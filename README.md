# Javier Placencia · Portfolio

Portfolio profesional y presentación de servicios de desarrollo independiente de software para empresas. Construido como sitio estático con Astro 5, CSS y TypeScript, preparado para GitHub Pages.

## Desarrollo local

Requiere Node.js 22 LTS y npm.

```powershell
npm ci
npm run dev
```

Abre la dirección que muestra Astro (habitualmente `http://localhost:4321`).

```powershell
npm run build
npm run preview
```

`build` genera el sitio de producción en `dist/`; `preview` permite revisarlo localmente.

## Contenido y estructura

- `src/data/portfolio.ts`: datos de contacto, proyectos, experiencia profesional, servicios y tecnologías.
- `src/components/Inicio.astro`: secciones e interacciones de la página.
- `src/pages/brochure/index.astro`: brochure corporativo con enlace propio en `/brochure/`.
- `src/styles/brochure.css`: diseño del brochure y estilos de impresión.
- `src/components/ProjectCard.astro`: presentación y casos de los proyectos destacados.
- `src/components/SystemVisual.astro`: esquemas conceptuales creados con HTML, CSS y SVG.
- `src/components/Header.astro`: navegación y menú móvil.
- `src/styles/global.css`: paleta, tipografía, componentes y adaptación a pantallas.
- `src/layouts/Layout.astro`: metadatos, canonical, Open Graph y datos estructurados.
- `public/`: fuentes locales, favicon y recursos gráficos.

El portfolio incluye los proyectos de Automatización y Optimización de Turnos, Sistema Eléctrico Interactivo EFE Central y Sistema Eléctrico Interactivo EFE SUR, además de seis proyectos anteriores. Los esquemas son ilustrativos: no son capturas de aplicaciones ni representan datos operacionales reales.

La presentación de servicios abarca sistemas empresariales a medida, automatización, transformación digital e integración y evolución de sistemas. El bloque de experiencia profesional recoge el liderazgo Full Stack y la mejora del sistema de gestión integrado en EFE SUR, junto con la digitalización de ventas y cobranzas para el grupo empresarial de importadoras Durban, Giorgio y Vergio.

Los casos de proyecto usan un diálogo nativo accesible, con navegación por teclado y cierre con Escape. Si JavaScript no está disponible, los detalles siguen funcionando como desplegables. Las tarjetas, enlaces de contacto y navegación permanecen disponibles sin JavaScript; los filtros y la copia de correo se habilitan progresivamente.

## Brochure corporativo

La página `/brochure/` presenta los servicios, la experiencia profesional, proyectos de referencia, la forma de trabajo y los datos de contacto en un formato comercial independiente. Está enlazada desde la navegación del portfolio y añadida al sitemap.

- Vista local: `http://localhost:4321/brochure/` al iniciar el servidor con el puerto habitual.
- Dirección de publicación: `https://javopa.github.io/brochure/`.
- **Copiar enlace** copia la dirección pública del brochure; requiere un contexto seguro y permiso del navegador para acceder al portapapeles.
- **Imprimir / Guardar PDF** abre la impresión del navegador con estilos específicos para A4; el guardado como PDF depende del navegador. No se genera ni descarga un PDF automáticamente.

El contenido permanece accesible sin JavaScript. Los datos de contacto, servicios, experiencia y proyectos reutilizan `src/data/portfolio.ts`.

## Publicación

El flujo existente en `.github/workflows/` compila y publica en GitHub Pages al subir cambios a `main`. La URL del sitio se configura en `astro.config.mjs`. Para revisar los cambios antes de publicar, usa la compilación y la vista previa local.

No se requieren backend, variables de entorno ni servicios externos para ejecutar el sitio. El contacto usa enlaces de correo, LinkedIn y GitHub; no se envían datos a un formulario.
