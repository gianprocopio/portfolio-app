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
      es: "Nombre del proyecto 1",
      en: "Project name 1",
    },
    description: {
      es: "Breve descripción de qué hace el proyecto y qué problema resuelve.",
      en: "Short description of what the project does and what problem it solves.",
    },
    tags: ["C++", "Algoritmos"],
    repo: "https://github.com/tu-usuario/proyecto-1",
    demo: "",
  },
  {
    title: {
      es: "Nombre del proyecto 2",
      en: "Project name 2",
    },
    description: {
      es: "Breve descripción de qué hace el proyecto y qué aprendiste con él.",
      en: "Short description of what the project does and what you learned from it.",
    },
    tags: ["React", "CSS"],
    repo: "https://github.com/tu-usuario/proyecto-2",
    demo: "https://tu-demo.com",
  },
  {
    title: {
      es: "Nombre del proyecto 3",
      en: "Project name 3",
    },
    description: {
      es: "Breve descripción del proyecto, tu rol y las tecnologías usadas.",
      en: "Short description of the project, your role, and the technologies used.",
    },
    tags: ["JavaScript", "HTML"],
    repo: "https://github.com/tu-usuario/proyecto-3",
    demo: "",
  },
];
