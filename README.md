# Joan López - Portfolio

Portfolio personal desarrollado con Astro, React y Tailwind CSS.

## 🚀 Características

- **Framework**: Astro + React
- **Estilos**: Tailwind CSS
- **TypeScript**: Soporte completo
- **Iconos**: Astro Icon con Simple Icons
- **Animaciones**: CSS + Tailwind animations
- **Responsive**: Diseño completamente adaptable

## 📦 Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🌐 Despliegue a GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1. **Configurar repositorio**: Actualiza `astro.config.mjs` con tu información:
   ```javascript
   export default defineConfig({
     site: 'https://TU_USUARIO.github.io',
     base: '/NOMBRE_REPOSITORIO',
     // ... resto de configuración
   });
   ```

2. **Subir a GitHub**: 
   ```bash
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPOSITORIO.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**: 
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "GitHub Actions" como fuente
   - El sitio se desplegará automáticamente en cada push

## 📁 Estructura del proyecto

```
/
├── public/          # Archivos estáticos
├── src/
│   ├── components/  # Componentes Astro/React
│   ├── layouts/     # Layouts base
│   ├── pages/       # Páginas de la aplicación
│   └── assets/      # Recursos (imágenes, etc.)
├── .github/workflows/ # GitHub Actions
└── package.json
```

## 🎨 Personalización

- **Colores**: Modifica `tailwind.config.mjs`
- **Contenido**: Edita los componentes en `src/components/`
- **Proyectos**: Actualiza el array de proyectos en `Projects.astro`
- **Habilidades**: Modifica las skills en `Skills.astro`

## 📱 Secciones incluidas

- **Hero**: Presentación principal
- **Sobre mí**: Información personal y profesional
- **Habilidades**: Stack tecnológico con iconos
- **Proyectos**: Portfolio de trabajos con filtros
- **Contacto**: Formulario y enlaces sociales

---

Desarrollado con ❤️ por Joan López
