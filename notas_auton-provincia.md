===============================================================================
               AUTOMATISMOS LA PROVINCIA - DOCUMENTACIÓN Y BACKLOG
===============================================================================

-------------------------------------------------------------------------------
1. MARCO DE CUMPLIMIENTO Y PROTECCIÓN LEGAL (LSSI, RGPD Y DESARROLLADOR)
-------------------------------------------------------------------------------

- **Protección Legal y Deslinde del Desarrollador Web:**
  - **`DEVELOPER_NOTICE.md`:** Creado archivo legal formal en el repositorio deslindando al desarrollador web técnico (**Jhoan Felipe Zapata Arboleda / Zapata Labs**) de las responsabilidades comerciales, mecánicas, garantías e instalaciones de Automatismos La Provincia.
  - **Nota Discreta en el Pie de Página:** Incorporada nota de desarrollo independiente en 5 idiomas (`t("footer.devNotice")`) al final del footer.

- **Cumplimiento Normativo Multilingüe en 5 Idiomas (España / UE):**
  - **Traducción Integral de Leyes:** Los 5 documentos legales (`LegalNotice.tsx`, `PrivacyPolicy.tsx`, `CookiePolicy.tsx`, `TermsConditions.tsx`, `Accessibility.tsx`) traducen íntegramente todo su contenido al **Español**, **Inglés**, **Alemán**, **Francés** y **Neerlandés (`🇳🇱 NL`)**.


-------------------------------------------------------------------------------
2. ESTRUCTURA EN ESPEJO MULTI-HOSTER (NETLIFY & VERCEL)
-------------------------------------------------------------------------------

- **Estructura en Espejo Sincronizada:**
  - **[frontend-Netlify](file:///E:/Proyectos_Develoment/auton-provincia/frontend-Netlify):** Ajustado para Netlify (`https://automatismolaprovincia.netlify.app`, `public/_redirects`, `netlify.toml`).
  - **[frontend-Vercel](file:///E:/Proyectos_Develoment/auton-provincia/frontend-Vercel):** Ajustado para Vercel (`https://auton-provincia.vercel.app`, `vercel.json`).

- **Corrección del Reproductor de Vídeos (Fix en Espejo):**
  - Corregido en `useVideoPlayer.ts` la desestructuración de `vActiveIndex` y `vVideoRef` en ambos entornos.
  - Al hacer clic en las miniaturas de vídeo, el reproductor alterna e intercambia de inmediato entre la Puerta Seccional y la Puerta Corredera en ambos sitios.

- **Repositorio Oficial en GitHub:**
  - URL: https://github.com/jhoanzapata/auton-provincia.git
  - Último Commit: `fix: solucionar seleccion de videos en espejo para frontend-Netlify y frontend-Vercel`.
  - Rama Principal: `main`.

- **5 Idiomas Oficiales Soportados (`ES`, `DE`, `EN`, `FR`, `NL`):**
  - `🇪🇸 ES` (Español), `🇩🇪 DE` (Alemán), `🇬🇧 EN` (Inglés), `🇫🇷 FR` (Francés), `🇳🇱 NL` (Neerlandés).

- **Arquitectura Base y Rendimiento:**
  - Frontend estático con Vite + React 18 + TypeScript + Tailwind v4.
  - Compilación de producción limpia en 3.34s con 0 errores de TypeScript.


-------------------------------------------------------------------------------
3. GUÍA DE DESPLIEGUE GRATUITO EN NETLIFY & VERCEL
-------------------------------------------------------------------------------

- **Netlify:** https://automatismolaprovincia.netlify.app (Redirección SPA en `_redirects`).
- **Vercel:** https://auton-provincia.vercel.app (Redirección SPA en `vercel.json`).


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

- Dominio propio definitivo (reemplazar vercel.app / netlify.app por automatismoslaprovincia.es en index.html y companyData.ts).
- Testimonios reales de clientes en TestimonialsSection.tsx.