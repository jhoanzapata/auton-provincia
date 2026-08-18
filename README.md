# Automatismos La Provincia — Sitio Web

Landing estática (frontend informativo) del negocio de puertas metálicas y automatismos.

- **Frontend**: `frontend/` — Vite + React 18 + TypeScript + Tailwind v4
- **Producción**: https://auton-provincia.vercel.app
- **Documentación del proyecto**: `notas_auton-provincia.md`

## ⚠️ GDPR HOSTING CHECK

- **Hosting actual**: Vercel (empresa con sede en EE. UU.).
- Los datos de los visitantes (IP, logs) pueden tratarse en servidores de EE. UU. bajo las cláusulas contractuales tipo (SCC) de Vercel.
- Para cumplimiento estricto con servidores dentro de la UE, valorar migrar a:
  - OVHcloud (Francia/Alemania)
  - Hetzner (Alemania/Finlandia)
  - AWS eu-central-1 (Frankfurt) o DigitalOcean Frankfurt
- Si se migra el hosting, actualizar DNS/CNAME y el `vercel.json` si deja de aplicarse.

## Pendiente del titular (no inventar datos)

- NIF / CIF
- Domicilio físico
- Nombre legal del titular (si es autónomo)
- Inscripción en Registro Mercantil (solo si aplica forma societaria)

Estos datos se centralizan en `frontend/src/config/companyData.ts` — actualizar ese único archivo cuando se disponga de ellos.
