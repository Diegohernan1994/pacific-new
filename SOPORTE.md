# Pacific West Home Builders — Documento de Soporte y Registro Técnico

**Fecha de actualización:** 26 de Octubre de 2026  
**Cliente:** Pacific West Home Builders (Pasadena / Los Angeles County, CA)  
**Versión seleccionada por el cliente:** **Enlace Limpio (`/`)**  
**Repositorio GitHub:** [Diegohernan1994/pacific-new](https://github.com/Diegohernan1994/pacific-new.git) (Rama: `main`)  
**Despliegue / Hosting:** Cloudflare Pages (`https://pacific-westhomebuilders.gdtwo.com/`)

---

## 📌 1. Resumen Ejecutivo y Decisión del Cliente

El cliente evaluó las distintas alternativas de diseño, interactividad y experiencia visual construidas para el proyecto. 
**Decisión final:** El cliente seleccionó oficialmente la **versión de enlace limpio (`/`)** como la versión definitiva para su presencia web y campañas de adquisición de leads de ADUs (*Accessory Dwelling Units*).

Para cumplir con este requerimiento:
* La **versión limpia (`/`)** es la landing principal visible en la raíz.
* La **versión corporativa 2 (`/v2/`)** se mantiene activa como portal integral secundario.
* Las **versiones alternativas 1 y 3 (`/v1/` y `/v3/`)** fueron retiradas de la vista pública mediante redirecciones automáticas instantáneas hacia la versión limpia, preservando todo su código en respaldos seguros.

---

## 🌐 2. Arquitectura de Rutas y Navegación

| Ruta | Estado | Descripción técnica |
| :--- | :---: | :--- |
| **`/`** *(Enlace Limpio)* | **🟢 Activa (Ganadora)** | Landing page principal de alta conversión especializada en ADUs. Incluye Hero interactivo con animación constructiva de 9 etapas, cursor seguidor minimalista (*click-through*), módulo de tipos de ADU con acordeón móvil desacoplado, calculadora de costos, galería bento y captura de leads. |
| **`/v2/`** *(Versión 2)* | **🟢 Activa** | Sitio web corporativo completo desarrollado con React 18 (`AppV6`), con 11 secciones estructuradas, sliders táctiles optimizados para móviles, reseñas verificadas y formulario de contacto. |
| **`/thank-you/`** | **🟢 Activa** | Página de confirmación y agradecimiento estándar posterior al envío de formularios, optimizada para eventos de conversión en analítica y Meta Pixel. |
| **`/v1/`** | **🟡 Redirigida (Oculta)** | Redirección instantánea (0ms) mediante `<meta http-equiv="refresh">` y `window.location.replace('/')` con directiva `noindex, nofollow`. Código fuente preservado en `src/pages/_v1_backup.astro` y componentes en `src/components/v1/`. |
| **`/v3/`** | **🟡 Redirigida (Oculta)** | Redirección instantánea (0ms) hacia `/` con `noindex, nofollow`. Código fuente preservado en `src/pages/_v3_backup.astro` y componentes en `src/components/v3/`. |

---

## 🛠️ 3. Registro Detallado de Trabajos Realizados

### A. Corrección y Optimización del Scroll en el Hero ("SCROLL TO BUILD ↓")
* **Diagnóstico inicial:** El texto/flecha "SCROLL TO BUILD" era inicialmente un contenedor estático con la clase `pointer-events-none`. Posteriormente, saltaba solo a la primera diapositiva de construcción (`Stage 1`), por lo que para el usuario la pantalla permanecía fija en el Hero sin bajar al contenido del sitio.
* **Solución aplicada:**
  1. Se transformó en un enlace interactivo semántico `<a href="#types" id="scroll-prompt">` con clase `cursor-pointer`, `z-50` y área de clic ampliada (`p-3`).
  2. Al hacer clic, ejecuta un desplazamiento suave (*smooth scroll*) con compensación automática de **84 píxeles** (altura exacta del header fijo), posicionando el inicio de la sección `#types` (Tipos de ADU) perfectamente visible bajo el menú.
  3. Cuenta con fallback nativo HTML `href="#types"` para garantizar que funcione en cualquier dispositivo móvil o navegador antiguo, incluso si las animaciones de JavaScript son interrumpidas.

### B. Corrección de Interferencia del Cursor Personalizado (*Click-Through Bug*)
* **Diagnóstico del cliente:** *"sigue sin funcionar al hacer clic, capaz sea el efecto del cursor"*.
* **Causa técnica detectada:** El elemento del cursor seguidor (`#crosshair-circle`) utilizaba aceleración gráfica por hardware (`will-change: transform`) centrado permanentemente en las coordenadas exactas `(x, y)` del ratón. En navegadores Chromium/WebKit de escritorio y móviles, esta capa de composición GPU capturaba el evento de clic antes de que pudiera atravesar al botón subyacente.
* **Solución aplicada:**
  1. **Regla CSS estricta obligatoria:**
     ```css
     #crosshair-box,
     #crosshair-box * {
       pointer-events: none !important;
     }
     ```
  2. Se aplicó `pointer-events: none !important` tanto a nivel de hoja de estilos como en estilos inline directamente sobre el contenedor, el círculo SVG y el punto central rojo.
  3. **Hover inteligente:** Se implementó un detector que desvanece suavemente el círculo rojo (`opacity: 0`) cuando el usuario pasa el cursor sobre cualquier botón, enlace o elemento interactivo del Hero. Esto asegura visual y físicamente que el botón quede 100% libre para el cursor estándar de mano (`pointer`).

### C. Desacople de Anclas en el Módulo de Tipos de ADU (Mobile UX)
* **Problema anterior:** En teléfonos móviles, al tocar las tarjetas de tipos de ADU (Detached ADU, Garage Conversion, Attached ADU, etc.), el enlace anclaba directamente al formulario de contacto (`#contact`), impidiendo que el usuario pudiera leer los textos explicativos y especificaciones de cada tipo.
* **Solución aplicada:**
  - Se removió la navegación forzada hacia el formulario en pantallas móviles.
  - Se transformó el módulo en un **acordeón interactivo táctil** con `e.preventDefault()`. Ahora, al tocar una tarjeta en móvil, se expande fluidamente su información, metrajes y características sin mover la pantalla del usuario.

### D. Ajustes Visuales, Padding y Tipografía
* **Footer (Pasadena / Redes):** Se corrigió la separación vertical (`mt-7`) entre la mención de ubicación "Pasadena" y la fila de iconos de redes sociales, eliminando la sensación de compresión.
* **Bento Grid de Galería (`#projects`):** Se ajustó el padding horizontal (`px-5 sm:px-6`) en las etiquetas superpuestas de los proyectos (Kitchen, ADU Living, etc.) para que durante el efecto hover los títulos y flechas `↗` no se corten contra los bordes de la tarjeta.
* **Fotografía de Stock de Remodelación de Garaje:** Se integró la nueva fotografía oficial provista por el cliente (`pacific-garage.jpeg`) tanto en la versión limpia como en las secciones correspondientes de la V2.

### E. Ocultamiento Limpio de Versiones Alternativas
* Las páginas `src/pages/v1.astro` y `src/pages/v3.astro` se configuraron con redirección automática limpia en 0 milisegundos hacia `/`:
  ```html
  <meta http-equiv="refresh" content="0;url=/" />
  <script is:inline>window.location.replace('/');</script>
  ```
* Se crearon copias de seguridad íntegras (`_v1_backup.astro` y `_v3_backup.astro`) para mantener el trabajo histórico accesible para el equipo técnico sin interferir en las rutas públicas de producción.

---

## 🔒 4. Integraciones, Webhooks y Seguridad de Leads

1. **Proxy Seguro de Leads (Anti-GitGuardian / Anti-Scraping):**
   - Las URLs de webhooks externos (Zapier, CRMs) **no** están expuestas en el código fuente del cliente ni en scripts públicos.
   - En entornos PHP/cPanel: los leads se envían al proxy interno `public/api/submit-lead.php`.
   - En entornos Cloudflare Pages: se procesan a través de la Edge Function en `functions/api/submit-lead.js`.
2. **Validación de Formularios:**
   - Validación obligatoria de Nombre, Teléfono formateado estadounidense y Correo Electrónico antes de habilitar el botón de envío.
   - Estados de carga (*Loading state*) en botones con protección contra múltiples clics accidentales.
3. **Página de Conversión:**
   - Redirección automática a `/thank-you` para disparar eventos de conversión en Google Tag Manager y Meta Pixel (`fbq('track', 'Lead')`).

---

## 🚀 5. Guía de Comandos y Despliegue

### Requisitos previos
- Node.js 18.x o superior
- Administrador de paquetes npm

### Comandos de desarrollo
```bash
# Navegar a la carpeta del proyecto Astro
cd "c:\Users\Diego\Downloads\Agente Ayrton\Agente Pacific\pacific-v5-astro"

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar proyecto para producción
npm run build

# Previsualizar la compilación de producción localmente
npm run preview
```

### Flujo de despliegue continuo (CI/CD)
El repositorio de GitHub está vinculado al pipeline de producción. Cada commit enviado a la rama `main` compila y publica los cambios de forma automática:
```bash
git add .
git commit -m "feat/fix: descripción de cambios"
git push origin main
```

---

## 📜 6. Historial de Commits Clave

| Commit | Descripción |
| :--- | :--- |
| `512628d` | `feat: hide v1 and v3 pages with instant redirect to clean root, leaving only root and v2 visible` |
| `c2197d8` | `fix: make cursor follower 100% click-through, hide circle on scroll-prompt hover, elevate button to z-50 with native anchor` |
| `90a6f1b` | `fix: scroll-prompt button scrolls smoothly to #types section` |
| `698de1f` | `fix: make hero scroll-prompt clickable to smooth scroll into build stages` |
| `462381b` | `feat(root): keep only circle follower on clean version, hide crosshair lines and drafting label` |

---

*Documento elaborado para el equipo de desarrollo, soporte y operaciones de **Pacific West Home Builders**.*
