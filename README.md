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
- `src/components/ProjectCard.astro`: presentación y casos de los proyectos destacados.
- `src/components/SystemVisual.astro`: esquemas conceptuales creados con HTML, CSS y SVG.
- `src/components/Header.astro`: navegación y menú móvil.
- `src/styles/global.css`: paleta, tipografía, componentes y adaptación a pantallas.
- `src/layouts/Layout.astro`: metadatos, canonical, Open Graph y datos estructurados.
- `public/`: fuentes locales, favicon y recursos gráficos.

El portfolio incluye los proyectos de Automatización y Optimización de Turnos, Sistema Eléctrico Interactivo EFE Central y Sistema Eléctrico Interactivo EFE SUR, además de seis proyectos anteriores. Los esquemas son ilustrativos: no son capturas de aplicaciones ni representan datos operacionales reales.

La presentación de servicios abarca sistemas empresariales a medida, automatización, transformación digital e integración y evolución de sistemas. El bloque de experiencia profesional recoge el liderazgo Full Stack y la mejora del sistema de gestión integrado en EFE SUR, junto con la digitalización de ventas y cobranzas para el grupo empresarial de importadoras Durban, Giorgio y Vergio.

Los casos de proyecto usan un diálogo nativo accesible, con navegación por teclado y cierre con Escape. Si JavaScript no está disponible, los detalles siguen funcionando como desplegables. Las tarjetas, enlaces de contacto y navegación permanecen disponibles sin JavaScript; los filtros y la copia de correo se habilitan progresivamente.

## Publicación

El flujo existente en `.github/workflows/` compila y publica en GitHub Pages al subir cambios a `main`. La URL del sitio se configura en `astro.config.mjs`. Para revisar los cambios antes de publicar, usa la compilación y la vista previa local.

No se requieren backend, variables de entorno ni servicios externos para ejecutar el sitio. El contacto usa enlaces de correo, LinkedIn y GitHub; no se envían datos a un formulario.
