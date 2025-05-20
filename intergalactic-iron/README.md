# Portfolio de Joan Lopez Ramirez

Este es un portfolio personal moderno y elegante desarrollado con Astro y React, que presenta las habilidades, proyectos y experiencia de Joan Lopez Ramirez como desarrollador de software.

## Características

- ✨ Diseño moderno con animaciones y transiciones fluidas
- 🎨 Esquema de colores elegante con negro para fondos y azul/blanco para textos
- 📱 Diseño completamente responsive
- 🚀 Optimizado para rendimiento con Astro
- 🧩 Componentes reutilizables
- 💻 Showcases de proyectos con filtrado por tecnologías
- 📊 Sección de habilidades con barras de progreso interactivas

## Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web para sitios centrados en contenido
- [React](https://reactjs.org/) - Biblioteca de JavaScript para interfaces de usuario
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca para animaciones en React
- [GSAP](https://greensock.com/gsap/) - Biblioteca de animación profesional
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
- [Typed.js](https://github.com/mattboldt/typed.js/) - Efecto de escritura

## Inicio Rápido

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/joanlopez/portfolio.git
   cd portfolio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en `http://localhost:4321`

## Estructura del Proyecto

```
portfolio/
├── public/             # Archivos estáticos
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Plantillas de diseño
│   ├── pages/          # Páginas de Astro
│   └── assets/         # Otros recursos
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind
└── package.json        # Dependencias y scripts
```

## Personalización

Para personalizar este portfolio para tu uso personal:

1. Actualiza la información personal en los componentes
2. Reemplaza las imágenes de proyectos y perfil en la carpeta `public/`
3. Modifica los colores en `tailwind.config.mjs` si deseas un esquema de colores diferente
4. Actualiza el contenido de los proyectos en `src/components/Projects.astro`

## Construcción para Producción

Para compilar el proyecto para producción:

```bash
npm run build
# o
yarn build
```

Los archivos compilados estarán en el directorio `dist/`.

## Despliegue

El sitio está listo para ser desplegado en cualquier servicio de hosting estático como:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Licencia

Este proyecto está disponible como código abierto bajo la [licencia MIT](LICENSE)

## Contacto

Joan Lopez Ramirez - hello@joanlopez.dev

Enlace del Proyecto: [https://github.com/joanlopez/portfolio](https://github.com/joanlopez/portfolio)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
