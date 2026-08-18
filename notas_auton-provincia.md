===============================================================================
               AUTOMATISMOS LA PROVINCIA - DOCUMENTACIÓN Y BACKLOG
===============================================================================

-------------------------------------------------------------------------------
1. MARCO DE CUMPLIMIENTO LEGAL (LSSI, RGPD Y COOKIES)
-------------------------------------------------------------------------------

- **Cumplimiento Normativo Multilingüe (España / UE):**
  - **Traducción Integral de Leyes:** Los 5 documentos legales (`LegalNotice.tsx`, `PrivacyPolicy.tsx`, `CookiePolicy.tsx`, `TermsConditions.tsx`, `Accessibility.tsx`) traducen íntegramente todo su contenido (títulos, migas de pan, secciones 1 a 9 y párrafos) al **Español**, **Inglés** y **Alemán** según el idioma seleccionado.
  - **Botón de Retorno al Inicio:** Incorporado en la cabecera superior de las 5 páginas legales (`← Volver al Inicio` / `← Back to Home` / `← Zurück zur Startseite`).
  - **RGPD (Reglamento General de Protección de Datos UE 2016/679):**
    - Banner interactivo de consentimiento de cookies (`CookieBanner.tsx` + `useCookieConsent.ts`) con opciones de aceptar todas, rechazar y configurar por categorías (analíticas/marketing).

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
2. ESTADO ACTUAL DEL FRONTEND (100% TRADUCIDO E IMPLEMENTADO)
-------------------------------------------------------------------------------

- **Internacionalización (i18n) Absoluta (100% de los Componentes):**
  - Conectada la frase de redes sociales (`t("contact.followUs")`) en `ContactSection.tsx`.
  - Al presionar **`🇩🇪 DE`** (Alemán), **`🇬🇧 EN`** (Inglés) o **`🇪🇸 ES`** (Español), **absolutamente el 100% de los textos de la página (secciones, galerías, redes y documentos legales) se traducen al instante**:
    - Español: `"Síguenos en redes sociales"`
    - Alemán: `"Folgen Sie uns in den sozialen Netzwerken"`
    - Inglés: `"Follow us on social media"`

- **Diseño del Pie de Página (Footer) y Páginas Legales:**
  - Enlaces del pie de página reestructurados con formato de viñetas limpia previa: `· Impressum`, `· Datenschutz`, `· Cookie-Richtlinie`, `· Barrierefreiheit`, `· AGB`, `· Cookie-Einstellungen`.

- **Arquitectura Base y Rendimiento:**
  - Frontend estático con Vite + React 18 + TypeScript + Tailwind v4.
  - Compilación de producción limpia en 5.90s con 0 errores de TypeScript.


-------------------------------------------------------------------------------
3. GUÍA DE DESPLIEGUE GRATUITO EN NETLIFY (0 COSTES / CONSUMO CERO)
-------------------------------------------------------------------------------

- **Plan Free ($0 USD / mes para siempre):**
  - Permite dominios personalizados con SSL gratis y red CDN global.
  - **Estrategia Consumo Cero (0 Créditos):** Compilar en local (`npm run build`) y subir la carpeta `dist/` usando la CLI (`npx netlify-cli deploy --prod --dir=dist`), evitando gastar minutos de compilación en la nube.


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
