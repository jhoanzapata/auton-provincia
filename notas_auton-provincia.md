===============================================================================
               AUTOMATISMOS LA PROVINCIA - DOCUMENTACIÓN Y BACKLOG
===============================================================================

-------------------------------------------------------------------------------
1. MARCO DE CUMPLIMIENTO Y PROTECCIÓN LEGAL (LSSI, RGPD Y DESARROLLADOR)
-------------------------------------------------------------------------------

- **Protección Legal y Deslinde del Desarrollador Web:**
  - **`DEVELOPER_NOTICE.md`:** Creado archivo legal formal en el repositorio deslindando al desarrollador web técnico (**Ing. Jhoan Felipe Zapata Arboleda / Zapata Labs**) de las responsabilidades comerciales, mecánicas, garantías e instalaciones de Automatismos La Provincia.
  - **Nota Discreta en el Pie de Página:** Incorporada nota de desarrollo independiente en 5 idiomas (`t("footer.devNotice")`) al final del footer en ambos entornos (`frontend-Netlify` y `frontend-Vercel`).

- **Cumplimiento Normativo Multilingüe en 5 Idiomas (España / UE):**
  - **Traducción Integral de Leyes:** Los 5 documentos legales (`LegalNotice.tsx`, `PrivacyPolicy.tsx`, `CookiePolicy.tsx`, `TermsConditions.tsx`, `Accessibility.tsx`) traducen íntegramente todo su contenido al **Español (`🇪🇸 ES`)**, **Inglés (`🇬🇧 EN`)**, **Alemán (`🇩🇪 DE`)**, **Francés (`🇫🇷 FR`)** y **Neerlandés (`🇳🇱 NL`)**.


-------------------------------------------------------------------------------
2. ESTRUCTURA EN ESPEJO MULTI-HOSTER (NETLIFY & VERCEL)
-------------------------------------------------------------------------------

- **Estructura en Espejo Sincronizada:**
  - **frontend-Netlify:** Ajustado para Netlify (`https://automatismolaprovincia.netlify.app`, `public/_redirects`, `netlify.toml` con `base = "frontend-Netlify"`).
  - **frontend-Vercel:** Ajustado para Vercel (`https://auton-provincia.vercel.app`, `vercel.json` con `rewrites`).

- **Corrección del Reproductor de Vídeos (Fix en Espejo):**
  - Eliminada la propiedad `key` dinámica en la etiqueta `<video>` de `VideoGallery.tsx` para mantener estable la referencia del nodo DOM en React.
  - Conectada la recarga `.load()` y reproducción instantánea `.play()` reactiva en `useVideoPlayer.ts` en ambos entornos.
  - Al hacer clic en las miniaturas de vídeo, el reproductor conmuta e intercambia de inmediato entre la Puerta Seccional y la Puerta Corredera en ambos sitios.

- **Banda de Marcas Homologadas (Mejora Aprendida de la Competencia):**
  - Incorporada la sección `BrandsSection.tsx` en ambos entornos con marcas oficiales: `Somfy`, `FAAC`, `BFT`, `CAME`, `Erreka`, `Clemsa`, `Nice`, `Pujol`, traducida en los 5 idiomas.

- **Repositorio Oficial en GitHub:**
  - URL: https://github.com/jhoanzapata/auton-provincia.git
  - Configuración de Firma: `user.name = Zapata Labs`, `user.email = jhoan.zapata@cun.edu.co`.
  - Rama Principal: `main`.

- **7 Idiomas Oficiales Soportados:**
  - `🇪🇸 ES` (Español), `🟡 VA` (Valencià), `🇬🇧 EN` (Inglés), `🇩🇪 DE` (Alemán), `🇫🇷 FR` (Francés), `🇳🇱 NL` (Neerlandés), `🇷🇺 RU` (Ruso).

- **Mejoras Homologadas con Arboleda Multiservicios:**
  - **Zona de Cobertura:** 16 municipios de Alicante indexables (`CoverageSection.tsx`).
  - **Horarios Comerciales en Schema.org:** Lun-Sáb 08:00-20:00 para Google Rich Snippets.
  - **FAQs de Alta Conversión:** 6 preguntas con palabras clave de urgencia, motorización y mandos.

- **Arquitectura Base y Rendimiento:**
  - Frontend estático con Vite + React 18 + TypeScript + Tailwind.
  - Compilación de producción limpia en ~4.5s con **0 errores de TypeScript**.


-------------------------------------------------------------------------------
3. GUÍA DE DESPLIEGUE GRATUITO EN NETLIFY & VERCEL
-------------------------------------------------------------------------------

- **Netlify:** https://automatismolaprovincia.netlify.app (Redirección SPA en `_redirects` y `netlify.toml`).
- **Vercel:** https://auton-provincia.vercel.app (Redirección SPA en `vercel.json`).


-------------------------------------------------------------------------------
4. DATOS REALES DEFINITIVOS DEL TITULAR (VERIFICADOS Y APLICADOS)
-------------------------------------------------------------------------------

- **Datos Oficiales de Duban Dario Zapata Arboleda (Aplicados en companyData.ts & Schema.org):**
  - **Titular / Representante:** Duban Dario Zapata Arboleda
  - **NIF Oficial:** Z4570064S
  - **Domicilio Físico:** Pasaje Campoamor 4, Entresuelo B, 03010 Alicante, España
  - **Correo Oficial:** automatismolaprovincia@gmail.com
  - **Teléfono Oficial:** +34 694 91 70 83


-------------------------------------------------------------------------------
5. PENDIENTES DE DECISIÓN DE NEGOCIO Y PRODUCCIÓN DEFINITIVA
-------------------------------------------------------------------------------

- Dominio propio definitivo (reemplazar vercel.app / netlify.app por dominio comercial oficial en index.html y companyData.ts).
- Testimonios reales de clientes en TestimonialsSection.tsx.