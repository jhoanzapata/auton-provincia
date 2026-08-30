#!/usr/bin/env python3
"""
Prepara assets para auton-provincia frontend.
Uso: python preparar_assets_auton.py [ruta_origen]
       python preparar_assets_auton.py E:\Proyectos_Develoment\a mejorar

- Busca recursivamente imágenes y videos en ruta_origen
- Convierte a formatos web óptimos (WebP / MP4 H.264)
- Renombra uniforme: proyecto-01.webp, video-01.mp4...
- Actualiza projects.json y videos.json preservando títulos
"""

import os
import sys
import subprocess
import json
import argparse
import re
import hashlib
import shutil
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor

# ─── CONFIG ────────────────────────────────────────────────────
MAGICK = shutil.which("magick") or r"C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe"
FFMPEG = shutil.which("ffmpeg") or r"C:\Users\Admin\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.2-full_build\bin\ffmpeg.exe"

# Destinos fijos (frontend public)
DST_IMG = Path(r"E:\Proyectos_Develoment\auton-provincia\frontend\public\images\proyectos")
DST_VID = Path(r"E:\Proyectos_Develoment\auton-provincia\frontend\public\videos\proyectos")
JSON_PROJ = Path(r"E:\Proyectos_Develoment\auton-provincia\frontend\public\data\projects.json")
JSON_VID = Path(r"E:\Proyectos_Develoment\auton-provincia\frontend\public\data\videos.json")

IMG_EXTS = {'.webp', '.png', '.jpg', '.jpeg', '.tiff', '.heic', '.heif', '.bmp', '.gif'}
VID_EXTS = {'.mp4', '.mov', '.avi', '.mkv', '.flv', '.webm', '.m4v', '.mov'}

# Calidad profesional KISS
IMG_QUALITY = 82          # WebP quality (80-85 sweet spot)
IMG_MAX_DIM = 1600        # Max ancho/alto (responsive web)
VID_CRF = 23              # H.264 CRF (18-24 visually lossless, 23 default)
VID_PRESET = "medium"     # Encoding speed vs compression
VID_MAX_H = 1080          # Max altura (1080p max)
VID_FPS = 30              # FPS fijo web

# ─── HELPERS ───────────────────────────────────────────────────
def run(cmd):
    try:
        subprocess.run(cmd, check=True, capture_output=True)
        return True, ""
    except subprocess.CalledProcessError as e:
        return False, e.stderr.decode(errors='ignore')[:300]

def file_hash(p: Path) -> str:
    """Hash SHA256 truncado para detectar cambios en origen."""
    h = hashlib.sha256()
    with p.open("rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            h.update(chunk)
    return h.hexdigest()[:16]

def natural_key(p: Path):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r'(\d+)', p.stem)]

def find_media_files(root: Path):
    """Busca recursivamente imágenes y videos en root."""
    images, videos = [], []
    for f in root.rglob("*"):
        if f.is_file():
            ext = f.suffix.lower()
            if ext in IMG_EXTS:
                images.append(f)
            elif ext in VID_EXTS:
                videos.append(f)
    return sorted(images, key=natural_key), sorted(videos, key=natural_key)

def validate_tools():
    """Fail fast si faltan herramientas."""
    for tool, name in [(MAGICK, "ImageMagick (magick)"), (FFMPEG, "ffmpeg")]:
        if not Path(tool).exists():
            sys.exit(f"❌ {name} no encontrado en: {tool}")

# ─── 1. CONVERTIR IMÁGENES A WEBP ──────────────────────────────
def convert_images(src_files):
    print(f"🖼️  Convirtiendo {len(src_files)} imágenes a WebP (q{IMG_QUALITY}, max {IMG_MAX_DIM}px)...")
    DST_IMG.mkdir(parents=True, exist_ok=True)
    
    def process_img(f):
        # Nombre determinista: stem + hash corto (ej: foto_casa_a1b2c3d4.webp)
        src_hash = file_hash(f)
        out_name = f"{f.stem}_{src_hash[:8]}.webp"
        out = DST_IMG / out_name
        if out.exists():
            hash_file = out.with_suffix(".hash")
            if hash_file.exists() and hash_file.read_text().strip() == src_hash:
                return f"⏭️  {out.name} sin cambios (hash coincide)"
        # -strip quita metadata EXIF, -interlace Plane = progressive
        cmd = [
            MAGICK, str(f),
            "-strip",
            "-quality", str(IMG_QUALITY),
            "-define", "webp:lossless=false",
            "-resize", f"{IMG_MAX_DIM}x{IMG_MAX_DIM}>",
            "-interlace", "Plane",
            str(out)
        ]
        ok, err = run(cmd)
        if ok:
            out.with_suffix(".hash").write_text(src_hash)
            return f"✅ {f.name} → {out.name}"
        return f"❌ {f.name}: {err}"
    
    with ThreadPoolExecutor(max_workers=os.cpu_count()) as ex:
        results = list(ex.map(process_img, src_files))
    for r in results:
        print(f"  {r}")
    return len(src_files)

# ─── 2. CONVERTIR VIDEOS A MP4 H.264 ───────────────────────────
def convert_videos(src_files):
    print(f"🎬 Convirtiendo {len(src_files)} videos a MP4 H.264 (CRF {VID_CRF}, {VID_MAX_H}p)...")
    DST_VID.mkdir(parents=True, exist_ok=True)
    
    def process_vid(f):
        # Nombre determinista: stem + hash corto
        src_hash = file_hash(f)
        out_name = f"{f.stem}_{src_hash[:8]}.mp4"
        out = DST_VID / out_name
        if out.exists():
            hash_file = out.with_suffix(".hash")
            if hash_file.exists() and hash_file.read_text().strip() == src_hash:
                return f"⏭️  {out.name} sin cambios (hash coincide)"
        # scale con force_original_aspect_ratio=decrease mantiene aspect ratio
        # -movflags +faststart permite streaming progresivo
        # -threads 0 = auto-paraleliza en todos los cores
        cmd = [
            FFMPEG, "-y", "-threads", "0", "-i", str(f),
            "-vcodec", "libx264", "-crf", str(VID_CRF), "-preset", VID_PRESET,
            "-acodec", "aac", "-b:a", "128k",
            "-vf", f"scale='if(gt(ih,{VID_MAX_H}),-2,{VID_MAX_H})':'if(gt(ih,{VID_MAX_H}),{VID_MAX_H},-2)':force_original_aspect_ratio=decrease",
            "-r", str(VID_FPS),
            "-movflags", "+faststart",
            str(out)
        ]
        ok, err = run(cmd)
        if ok:
            out.with_suffix(".hash").write_text(src_hash)
            return f"✅ {f.name} → {out.name}"
        return f"❌ {f.name}: {err}"
    
    with ThreadPoolExecutor(max_workers=min(4, os.cpu_count())) as ex:  # videos son pesados, limitar workers
        results = list(ex.map(process_vid, src_files))
    for r in results:
        print(f"  {r}")
    return len(src_files)

# ─── 3. ACTUALIZAR JSON PRESERVANDO METADATA ───────────────────
def update_json():
    print("📝 Actualizando JSON (preservando títulos existentes)...")
    
    # Cargar JSONs existentes
    existing_projects = {}
    if JSON_PROJ.exists():
        try:
            with open(JSON_PROJ, 'r', encoding='utf-8') as fp:
                for p in json.load(fp):
                    existing_projects[p["mediaUrl"]] = {"title": p.get("title"), "description": p.get("description"), "category": p.get("category")}
        except:
            pass
    
    existing_videos = {}
    if JSON_VID.exists():
        try:
            with open(JSON_VID, 'r', encoding='utf-8') as fp:
                for v in json.load(fp):
                    existing_videos[v["src"]] = {"title": v.get("title"), "description": v.get("description")}
        except:
            pass
    
    # projects.json - buscar todos los .webp en la carpeta destino
    img_files = sorted(DST_IMG.glob("*.webp"), key=natural_key)
    projects = []
    for i, f in enumerate(img_files):
        media_url = f"/images/proyectos/{f.name}"
        ex = existing_projects.get(media_url, {})
        projects.append({
            "id": f"proj-{i+1:02d}",
            "title": ex.get("title") or f"Proyecto {i+1}",
            "description": ex.get("description") or "Proyecto de automatismos y herrería metálica.",
            "mediaUrl": media_url,
            "mediaType": "IMAGE",
            "category": ex.get("category") or "proyecto"
        })
    
    with open(JSON_PROJ, 'w', encoding='utf-8') as fp:
        json.dump(projects, fp, ensure_ascii=False, indent=2)
    preserved = sum(1 for p in projects if p['title'] != f"Proyecto {projects.index(p)+1}")
    print(f"  ✅ projects.json: {len(projects)} proyectos ({preserved} con títulos preservados)")
    
    # videos.json - buscar todos los .mp4 en la carpeta destino
    vid_files = sorted(DST_VID.glob("*.mp4"), key=natural_key)
    videos = []
    default_titles = ["Puerta Seccional Automatizada", "Puerta Corredera en Panel Sándwich", "Puerta Abatible Metálica"]
    default_descs = [
        "Puerta seccional con paneles aislantes de alta densidad, motor a techo ultrasilencioso y receptor con mando a distancia.",
        "Sistema corredero de automatización rápida con cremallera de nylon silenciosa, motor de gran potencia y cierre de seguridad.",
        "Puerta abatible de una hoja, fabricación en chapa metálica, lacado al horno, brazo electromecánico, centralita y 2 mandos a distancia."
    ]
    for i, f in enumerate(vid_files):
        src = f"/videos/proyectos/{f.name}"
        ex = existing_videos.get(src, {})
        videos.append({
            "src": src,
            "title": ex.get("title") or (default_titles[i] if i < len(default_titles) else f"Video {i+1}"),
            "description": ex.get("description") or (default_descs[i] if i < len(default_descs) else "Instalación de automatismos.")
        })
    
    with open(JSON_VID, 'w', encoding='utf-8') as fp:
        json.dump(videos, fp, ensure_ascii=False, indent=2)
    preserved_v = sum(1 for v in videos if v['title'] not in [f"Video {i+1}" for i in range(len(videos))])
    print(f"  ✅ videos.json: {len(videos)} videos ({preserved_v} con títulos preservados)")

# ─── MAIN ──────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(
        description="Prepara assets para auton-provincia: imágenes→WebP, videos→MP4 H.264",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python preparar_assets_auton.py "E:\\Proyectos_Develoment\\a mejorar"
  python preparar_assets_auton.py "C:\\Users\\Admin\\Downloads\\fotos_videos"
        """
    )
    parser.add_argument("origen", nargs="?", default=r"E:\Proyectos_Develoment\a mejorar",
                        help="Carpeta origen con imágenes/videos (recursivo)")
    args = parser.parse_args()
    
    # Validar herramientas antes de empezar
    validate_tools()
    
    origen = Path(args.origen)
    if not origen.exists():
        print(f"❌ No existe: {origen}")
        return 1
    
    print("=" * 60)
    print(f"  PREPARAR ASSETS - AUTON-PROVINCIA")
    print(f"  Origen: {origen}")
    print("=" * 60)
    
    # Buscar archivos
    images, videos = find_media_files(origen)
    print(f"📁 Encontrados: {len(images)} imágenes, {len(videos)} videos")
    
    if not images and not videos:
        print("⚠️  No hay archivos de imagen/video en la carpeta origen")
        return 0
    
    # Procesar
    if images:
        convert_images(images)
    if videos:
        convert_videos(videos)
    
    update_json()
    
    print("\n✅ TODO LISTO. Assets en public/ y JSON actualizados.")
    return 0

if __name__ == "__main__":
    import os
    sys.exit(main())