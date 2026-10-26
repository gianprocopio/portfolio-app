// ✏️ Para agregar un proyecto nuevo, copiá un bloque { ... } y pegalo al principio
// de la lista. Aparece solo en la página, no hace falta tocar nada más.
//
// Campos:
//   title        → nombre del proyecto
//   description  → 1 o 2 oraciones: qué hace y qué problema resuelve
//   tags         → tecnologías usadas
//   repo         → link al código (GitHub). Dejalo "" si no tiene
//   demo         → link a la demo online. Dejalo "" si no tiene
//
// title y description van en los dos idiomas: { es: "...", en: "..." }.
// Si un proyecto tiene el mismo nombre en ambos, repetilo igual.

export const projects = [
  {
    title: {
      es: "E-commerce minimalista",
      en: "Minimalist e-commerce",
    },
    description: {
      es: "Sitio web de un e-commerce minimalista, desarrollado con React.js y TailwindCSS. El sitio presenta un diseño moderno e intuitivo, con una navegación sencilla y una experiencia de compra simple.",
      en: "Minimalist e-commerce website built with React.js and TailwindCSS. This website features a modern and intuitive design, with easy-to-use navigation and a simple shopping experience.",
    },
    tags: ["React", "Tailwind"],
    repo: "https://github.com/gianprocopio/eccomerce-reactjs",
    demo: "https://minimalist-eccomerce.netlify.app/",
  },
  {
    title: {
      es: "Gian's Movies",
      en: "Gian's Movies",
    },
    description: {
      es: "Sitio web donde se pueden buscar películas y ver su información. Además cumple con una sección de categorías.",
      en: "Website where movies can be searched and see their information. Furthermore, it has a category section.",
    },
    tags: ["JavaScript Vanilla"],
    repo: "https://github.com/gianprocopio/movies-app",
    demo: "https://giansmovies.netlify.app/",
  },
];
