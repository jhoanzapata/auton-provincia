===============================================================================
               AUTOMATISMOS LA PROVINCIA - DOCUMENTACIÓN Y BACKLOG
===============================================================================

-------------------------------------------------------------------------------
1. MARCO DE CUMPLIMIENTO Y PROTECCIÓN LEGAL (LSSI, RGPD Y DESARROLLADOR)
-------------------------------------------------------------------------------

- **Protección Legal y Deslinde del Desarrollador Web:**
  - **`DEVELOPER_NOTICE.md`:** Creado archivo legal formal en el repositorio deslindando al desarrollador web técnico (**Jhoan Felipe Zapata Arboleda**) de las responsabilidades comerciales, mecánicas, garantías e instalaciones de Automatismos La Provincia.
  - **Nota Discreta en el Pie de Página:** Incorporada nota de desarrollo independiente en 5 idiomas (`t("footer.devNotice")`) al final del footer.

- **Cumplimiento Normativo Multilingüe en 5 Idiomas (España / UE):**
  - **Traducción Integral de Leyes:** Los 5 documentos legales (`LegalNotice.tsx`, `PrivacyPolicy.tsx`, `CookiePolicy.tsx`, `TermsConditions.tsx`, `Accessibility.tsx`) traducen íntegramente todo su contenido al **Español**, **Inglés**, **Alemán**, **Francés** y **Neerlandés (`🇳🇱 NL`)**.


-------------------------------------------------------------------------------
2. ESTADO ACTUAL DEL REPOSITORIO Y FRONTEND (GITHUB SINCRONIZADO)
-------------------------------------------------------------------------------

- **Repositorio Oficial en GitHub:**
  - URL: https://github.com/jhoanzapata/auton-provincia.git
  - Último Commit: `style: centrar rigidamente el logo en el pie de pagina`.
  - Rama Principal: `main`.

- **Diseño e Identidad de Marca:**
  - Centrado rígido con Flexbox colum de 100% de ancho para el logo en [FooterSection.tsx](file:///E:/Proyectos_Develoment/auton-provincia/frontend/src/pages/sections/FooterSection.tsx), eliminando cualquier desplazamiento hacia la izquierda en pantallas anchas.

- **5 Idiomas Oficiales Soportados (`ES`, `DE`, `EN`, `FR`, `NL`):**
  - `🇪🇸 ES` (Español), `🇩🇪 DE` (Alemán), `🇬🇧 EN` (Inglés), `🇫🇷 FR` (Francés), `🇳🇱 NL` (Neerlandés).

- **Arquitectura Base y Rendimiento:**
  - Frontend estático con Vite + React 18 + TypeScript + Tailwind v4.
  - Compilación de producción limpia en 4.15s con 0 errores de TypeScript.


-------------------------------------------------------------------------------
3. GUÍA DE DESPLIEGUE GRATUITO EN NETLIFY (0 COSTES / CONSUMO CERO)
-------------------------------------------------------------------------------

- **Plan Free ($0 USD / mes para siempre):**
  - Permite dominios personalizados con SSL gratis y red CDN global.
  - **Estaticidad Consumo Cero (0 Créditos):** Compilar en local (`npm run build`) y subir la carpeta `dist/` usando la CLI (`npx netlify-cli deploy --prod --dir=dist`).


-------------------------------------------------------------------------------
4. PENDIENTES BLOQUEADOS POR DATOS REALES DEFINITIVOS DEL TITULAR
-------------------------------------------------------------------------------

- Datos finales a actualizar cuando el titular los facilite en `companyData.ts`:
  - NIF / CIF definitivo.
  - Domicilio físico completo con número de calle.
  - Registro Mercantil / Adscripción societaria oficial.


-------------------------------------------------------------------------------
5. PENDIENTES DE DECISIÓN DE NEGOCIO Y PRODUCCIÓN DEFINITIVA
-------------------------------------------------------------------------------

- Dominio propio definitivo (reemplazar vercel.app por automatismoslaprovincia.es en index.html y companyData.ts).
- Testimonios reales de clientes en TestimonialsSection.tsx.


ya sabemos el link:

https://automatismolaprovincia.netlify.app/


ya no es vercel, es netlify:

"Voy a buscar dónde deberías poner ese badge y verificar qué está pasando con la configuración de Netlify.   

Searched for files matching `Proyectos_Develoment` · `auton-provincia/**/README*`, 1 match

Read 

Read 

Encontré el problema.

El proyecto **está hosteado en Vercel** (`https://auton-provincia.vercel.app`), no en Netlify. Por eso el badge de Netlify no muestra nada — ese ID de Netlify no existe o apunta a un proyecto diferente.

En el `README.md` dice claramente:

> **Producción**: https://auton-provincia.vercel.app

Y el `vercel.json` es la configuración para **Vercel**, no Netlify.

---

## Las opciones son:

1. **Si quieres mantener Vercel** → usa el badge de Vercel en lugar del de Netlify:
   ```markdown
   [![Vercel Status](https://img.shields.io/badge/Vercel-deployed-00d4ff)](https://auton-provincia.vercel.app)
   ```

2. **Si quieres cambiar a Netlify** → tendrías que:
   - Crear el proyecto en Netlify
   - Hacer el deploy allí
   - Reemplazar `vercel.json` con `netlify.toml`
   - Actualizar el DNS / CNAME

3. **O simplemente borrar el badge** si no es prioritario por ahora.

---

¿Cuál de las tres prefieres?

 | ___ ___ |"