===============================================================================
               AUTOMATISMOS LA PROVINCIA - DOCUMENTACIÓN Y BACKLOG
===============================================================================

-------------------------------------------------------------------------------
1. MARCO DE CUMPLIMIENTO Y PROTECCIÓN LEGAL (LSSI, RGPD Y DESARROLLADOR)
-------------------------------------------------------------------------------

- **Protección Legal y Deslinde del Desarrollador Web:**
  - **`DEVELOPER_NOTICE.md`:** Creado archivo legal formal en el repositorio deslindando al desarrollador web técnico (**Ing. Jhoan Felipe Zapata Arboleda / Zapata Labs**) de las responsabilidades comerciales, mecánicas, garantías e instalaciones de Automatismos La Provincia.
  - **Nota Discreta en el Pie de Página:** Incorporada nota de desarrollo independiente (`t("footer.devNotice")`) al final del footer en el frontend de Vercel.

- **Cumplimiento Normativo Multilingüe en 5 Idiomas (España / UE):**
  - **Traducción Integral de Leyes:** Los 5 documentos legales (`LegalNotice.tsx`, `PrivacyPolicy.tsx`, `CookiePolicy.tsx`, `TermsConditions.tsx`, `Accessibility.tsx`) traducen íntegramente todo su contenido al **Español (`🇪🇸 ES`)**, **Inglés (`🇬🇧 EN`)**, **Alemán (`🇩🇪 DE`)**, **Francés (`🇫🇷 FR`)** y **Neerlandés (`🇳🇱 NL`)**.


-------------------------------------------------------------------------------
2. DESPLIEGUE EXCLUSIVO EN VERCEL
-------------------------------------------------------------------------------

- **Entorno Oficial Único:**
  - **frontend-Vercel:** Despliegue oficial en Vercel (`https://auton-provincia.vercel.app`, `vercel.json` con `rewrites` para SPA).

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
3. GUÍA DE DESPLIEGUE EN VERCEL
-------------------------------------------------------------------------------

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

- Dominio propio definitivo (reemplazar vercel.app por dominio comercial oficial en index.html y companyData.ts).
- Testimonios reales de clientes en TestimonialsSection.tsx.



-------------------------------------------------------------------------------


### Versión Técnica

A continuación, se detallan las notas e instrucciones operativas y estratégicas extraídas del análisis de la documentación, estructuradas para su correcta implementación.

**1. Instrucciones de Identidad Visual y Diseño (Manual de Marca)**

* **Aplicación de Logotipo y Variantes:** Se debe priorizar la versión *Horizontal* para web, rotulación de vehículos y papelería corporativa. La versión en *Negativo* se utilizará obligatoriamente sobre fondos oscuros o imágenes, prohibiendo estrictamente el uso de cajas o parches blancos de fondo. Para espacios reducidos o avatares, se aplicará la versión *Vertical* o el *Símbolo Solo*, respectivamente.


* **Zona de Protección y Escalabilidad:** El logotipo debe mantener un área de respeto (espacio vacío perimetral) equivalente a la mitad de la altura del símbolo "A". Las dimensiones mínimas de reproducción son 35 mm (impresión horizontal), 140 px (pantalla horizontal) y 16 px (símbolo en caja para *favicons*).


* **Restricciones de Manipulación:** Queda terminantemente prohibido deformar las proporciones, alterar la paleta cromática (el cordón de soldadura es invariablemente naranja), añadir efectos (sombras, relieves, contornos), reordenar las piezas o rotar el logotipo.


* **Accesibilidad y Contraste (Normativa WCAG 2.1):** Las interfaces deben cumplir con los ratios de contraste legales. Los botones o elementos con fondo Naranja Fundido (`#E4571B`) deben llevar texto en negro, ya que el texto blanco sobre este naranja no supera el mínimo de accesibilidad. Los textos pequeños en naranja sobre fondo blanco deben usar la variante oscura Naranja Forja (`#B33F0D`).


* **Tipografía y Licencias:** Se debe estandarizar el uso de fuentes de Google Fonts con licencia SIL Open Font. Utilizar *Oswald* (Regular a Bold) para titulares y el logotipo, y *Barlow* (Regular a SemiBold) para cuerpos de texto e interfaces.


* **Gestión de Archivos:** Se debe entregar el formato `.svg` (vectorial trazado a curvas) a rotulistas e imprentas para garantizar escalabilidad infinita. Para *software* de ofimática o redes sociales, se emplearán los formatos `.png` exportados, utilizando el archivo específico `avatar-redes.png` para asegurar la legibilidad en recortes circulares de UI.


* **Corrección de Naming:** El identificador verbal de la marca debe mantenerse en plural ("AUTOMATISMOS") y la palabra "carpintería" debe incluir la tilde ortográfica.



**2. Instrucciones Estratégicas y Comerciales (Propuesta de Agencia)**

* **Ejecución del Proyecto y Onboarding:** Para iniciar el despliegue, se requiere agendar una llamada inicial de 15 minutos, firmar el acuerdo comercial, abonar el 50% (250 €) del costo total del proyecto base (500 €) y proveer material multimedia propio (fotos y vídeos de obra). Además, se debe conceder acceso administrativo al gestor de la ficha de Google Business Profile. El 50% restante (250 €) se pagará tras la entrega y revisión en un plazo de 2 a 3 semanas.


* **Despliegue de Infraestructura Web:** El desarrollo se ejecutará mediante código nativo (evitando CMS o plantillas) para optimizar el *performance* (tiempos de carga < 1s). Se incorporará etiquetado `hreflang` para segmentar el tráfico de las *landing pages* en español e inglés, apuntando al *buyer persona* de residentes extranjeros en la Costa Blanca (Benidorm, Torrevieja).


* **Optimización SEO Local y *Funnel* de Conversión:** Es imperativo implementar el "kit de reseñas" in-situ, que consiste en mostrar un código QR al finalizar la obra y enviar un mensaje estandarizado por WhatsApp para traccionar valoraciones. El objetivo inicial es superar las 15 reseñas orgánicas para obtener liderazgo de categoría en el *Local Pack* de búsquedas en Alicante.


* **Pivotaje en Redes Sociales:** Modificar la taxonomía de los metadatos y *hashtags* en las publicaciones (actualmente globales y de gremio como `#welding`) por marcadores geolocalizados para asegurar conversión a nivel provincial.


* **Planes de Mantenimiento (MRR):** Posterior a la entrega, evaluar la suscripción a un plan mensual sin permanencia. Las opciones abarcan desde soporte e infraestructura por 49 €/mes, hasta *Ruta Pro* (119 €/mes) que incluye consultoría de SEO local, guiones audiovisuales, o la integración de bots conversacionales 24/7 (149 € + 29 €/mes).



---

### Versión para No Técnicos

Aquí tienes las reglas y pasos a seguir, explicados de forma sencilla y directa, para aplicar perfectamente lo que indican los dos documentos.

**1. Reglas para cuidar la imagen de tu negocio (Manual de Marca)**

* **Cómo usar el logo:** Para facturas, firmas o la furgoneta, usa siempre el logo normal alargado. Si vas a poner el logo sobre una foto oscura o un fondo negro, usa la versión con letras claras (negativo), pero nunca le pongas un parche cuadrado blanco de fondo. Deja siempre un espacio libre alrededor del logo para que "respire" (el tamaño del hueco debe ser como media letra "A").


* **Lo que está prohibido:** No estires ni aplastes el logo, no le pongas sombras ni brillos, no cambies las piezas de lugar y nunca le cambies el color (la chispita de soldadura siempre debe ser naranja).


* **Colores y lectura:** Usa exactamente los tonos de naranja y negro que te han dado. Hay una regla muy importante para que tus clientes puedan leer la web en el móvil a pleno sol: si pones un botón naranja, las letras de adentro deben ser negras, no blancas. Y si escribes letras pequeñas en naranja sobre un fondo blanco, debes usar el naranja más oscuro que te diseñaron.


* **Tipos de letra:** Descarga e instala en tu ordenador las letras "Oswald" (para títulos grandes) y "Barlow" (para textos largos y presupuestos). Son gratuitas y le darán un toque muy profesional a tus documentos.


* **Qué archivo usar:** Si vas a hacer polos bordados o a rotular la furgoneta, mándale a la imprenta el archivo que termina en ".svg", porque nunca pierde calidad. Para tu foto de perfil de Instagram, Facebook o WhatsApp, usa el archivo que se llama "avatar-redes.png", que está preparado para verse perfecto dentro del círculo.


* **Ortografía:** Recuerda que tu nombre lleva una "S" al final ("Automatismos") y que ahora "carpintería" lleva su tilde correcta.



**2. Pasos para conseguir más clientes (Propuesta Comercial)**

* **Cómo arrancar el proyecto:** Lo primero es hacer una llamada rápida de 15 minutos con la agencia para explicarles qué tipo de trabajos quieres vender más. Después, firmas el presupuesto, pagas 250 euros por adelantado, les pasas tus datos de facturación, fotos de tus trabajos y les das permiso para manejar tu negocio en Google Maps. En unas 2 o 3 semanas te entregarán la web y pagas los 250 euros restantes.


* **Qué vas a recibir:** Te van a hacer una página web muy rápida y fácil de usar, pero con un truco: tendrá textos preparados en inglés para que los extranjeros de la costa (como en Benidorm) te encuentren cuando busquen herreros en su idioma.


* **El plan para ganarle a tu competencia en Google:** Cuando termines de instalar una reja o puerta, debes sacar un código QR que te darán y mandar un mensaje preparado por WhatsApp para pedirle al cliente que te deje cinco estrellas en Google. Si consigues 15 clientes que lo hagan, estarás por encima de todos los herreros de Alicante.


* **Cambios en tus videos de Facebook/Instagram:** Tienes que seguir grabando los videos que haces, pero no le pongas etiquetas en inglés general como "soldadores del mundo". Empieza a poner el nombre de tu zona (Alicante, San Juan) para que los vean tus vecinos, que son los que te van a comprar.


* **Decidir si quieres ayuda mensual:** Cuando la web sea tuya, puedes elegir pagarles una mensualidad para que te ayuden a mejorar mes a mes. Por ejemplo, por 49 euros al mes te cuidan la web para que no se caiga. Y por precios un poco mayores, te ayudan a espiar a tu competencia, te dan ideas de qué grabar o hasta te instalan un robot de WhatsApp que responda los presupuestos automáticamente.