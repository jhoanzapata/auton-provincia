===============================================================================
               AUTOMATISMOS LA PROVINCIA - DOCUMENTACIÓN Y BACKLOG
===============================================================================

-------------------------------------------------------------------------------
1. MARCO DE CUMPLIMIENTO LEGAL (LSSI, RGPD Y COOKIES)
-------------------------------------------------------------------------------

- **Cumplimiento Normativo Multilingüe en 5 Idiomas (España / UE):**
  - **Traducción Integral de Leyes:** Los 5 documentos legales (`LegalNotice.tsx`, `PrivacyPolicy.tsx`, `CookiePolicy.tsx`, `TermsConditions.tsx`, `Accessibility.tsx`) traducen íntegramente todo su contenido al **Español**, **Inglés**, **Alemán**, **Francés** y **Neerlandés (`🇳🇱 NL`)** según el idioma seleccionado.
  - **Botón de Retorno al Inicio:** Incorporado en la cabecera superior de las 5 páginas legales (`← Volver al Inicio` / `← Back to Home` / `← Zurück zur Startseite` / `← Retour à l'Accueil` / `← Terug naar Home`).
  - **RGPD (Reglamento General de Protección de Datos UE 2016/679):**
    - Banner interactivo de consentimiento de cookies (`CookieBanner.tsx` + `useCookieConsent.ts`) refactorizado con clases CSS limpias en `index.css`.

- **Datos del Titular Centralizados (`companyData.ts`):**
  - Nombre Legal: Duban Dario Zapata Arboleda.
  - NIF: Pendiente de verificación legal.
  - Domicilio: Calle La Provincia, Alicante, España.
  - Email: automatismolaprovincia@gmail.com
  - Teléfono: +34 694 91 70 83

- **Verificación de Hosting GDPR Check:**
  - **Hosting actual:** Vercel (servidores en EE. UU. amparados por Cláusulas Contractuales Tipo - SCC).
  - **Alojamiento Recomendado en la UE (Netlify / Render / Cloudflare Pages):** Servidores en Frankfurt (Alemania) con SSL gratuito automático y 100% de cumplimiento RGPD.


-------------------------------------------------------------------------------
2. ESTADO ACTUAL DEL REPOSISORIO Y FRONTEND (GITHUB SINCRONIZADO)
-------------------------------------------------------------------------------

- **Repositorio Oficial en GitHub:**
  - URL: https://github.com/jhoanzapata/auton-provincia.git
  - Último Commit: `Feat: integrar i18n en 5 idiomas (ES, DE, EN, FR, NL), nuevo logo PNG y optimizaciones UX`.
  - Rama Principal: `main`.

- **5 Idiomas Oficiales Soportados (`ES`, `DE`, `EN`, `FR`, `NL`):**
  - **`🇪🇸 ES`** (Español): Idioma oficial base del negocio.
  - **`🇩🇪 DE`** (Alemán): 12,0 millones de turistas y residentes (`Angebotsrechner`, `Breite/Höhe`).
  - **`🇬🇧 EN`** (Inglés): 19,1 millones de turistas y mercado internacional (`Free Quote`).
  - **`🇫🇷 FR`** (Francés): 12,8 millones de turistas (`Calculateur de Devis`, `Portes Sectionnelles`).
  - **`🇳🇱 NL`** (Neerlandés): Mercado de Holanda y Bélgica Flamenca (`Geautomatiseerde Sectiepoort`, `Gratis Offerte`).

- **Actualización de Marca e Identidad Visual (Fondo Transparente):**
  - Sustituido el logo por la versión PNG con fondo recortado transparente (`Nuevo_Logo-removebg-preview.png`) en `Navbar.tsx` y `FooterSection.tsx`.

- **Arquitectura Base y Rendimiento:**
  - Frontend estático con Vite + React 18 + TypeScript + Tailwind v4.
  - Compilación de producción limpia en 4.05s con 0 errores de TypeScript.


-------------------------------------------------------------------------------
3. GUÍA DE DESPLIEGUE GRATUITO EN NETLIFY (0 COSTES / CONSUMO CERO)
-------------------------------------------------------------------------------

- **Plan Free ($0 USD / mes para siempre):**
  - Permite dominios personalizados con SSL gratis y red CDN global.
  - **Estaticidad Consumo Cero (0 Créditos):** Compilar en local (`npm run build`) y subir la carpeta `dist/` usando la CLI (`npx netlify-cli deploy --prod --dir=dist`), evitando gastar minutos de compilación en la nube.


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