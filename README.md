# Portfolio – Gianluca Enzo Procopio

Portfolio personal hecho con React + Vite.

## Cómo correrlo

Necesitás tener [Node.js](https://nodejs.org) instalado (versión 18 o más nueva).

```bash
npm install     # solo la primera vez
npm run dev     # abre el sitio en http://localhost:5173
```

## Cómo editarlo

| Qué querés cambiar            | Archivo                         |
| ----------------------------- | ------------------------------- |
| Tu nombre, textos, mail, links | `src/data/profile.js`           |
| **Agregar un proyecto nuevo**  | `src/data/projects.js`          |
| **Agregar una certificación**  | `src/data/certifications.js`    |
| Colores y tipografías          | `src/styles/variables.css`      |
| Estilos de cada sección        | `src/styles/components.css`     |

### Idiomas (español / inglés)

El botón **EN / ES** del navbar cambia el idioma de toda la página. Se acuerda de la última elección del visitante, y la primera vez usa el idioma de su navegador.

- Los textos de tu perfil y de cada proyecto se escriben en los dos idiomas con la forma `{ es: "...", en: "..." }`.
- Los textos fijos (botones, títulos de sección) están en `src/i18n/ui.js`.

Para subir un proyecto nuevo: abrí `src/data/projects.js`, copiá uno de los bloques `{ ... }`, pegalo al principio de la lista y completá los datos. Se ve en la página automáticamente.

## Estructura

```
src/
├── components/   # una pieza de la página por archivo (Navbar, Hero, About...)
├── data/         # contenido: profile.js, projects.js y certifications.js
├── i18n/         # cambio de idioma: LanguageContext.jsx y ui.js
├── styles/       # variables.css, base.css y components.css
├── App.jsx       # arma la página juntando los componentes
└── main.jsx      # punto de entrada
```

## Publicarlo gratis

```bash
npm run build   # genera la carpeta dist/
```

- **Netlify / Vercel**: conectá el repo de GitHub, comando de build `npm run build`, carpeta de salida `dist`.
- **GitHub Pages**: subí el contenido de `dist/` a la rama que uses para Pages.
