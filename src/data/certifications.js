// ✏️ Para agregar una certificación nueva, copiá un bloque { ... } y pegalo al
// principio de la lista. Aparece sola en la página, no hace falta tocar nada más.
//
// Campos:
//   title   → nombre de la certificación o curso, en los dos idiomas: { es, en }
//   issuer  → quién la emite (UTN, Coursera, Udemy, Microsoft, etc.)
//   date    → fecha o año de obtención, por ejemplo "2025" o "Mar 2025"
//   link    → link para verificar la credencial. Dejalo "" si no tiene

export const certifications = [
  {
    title: {
      es: "First Certificate in English",
      en: "First Certificate in English",
    },
    issuer: "Cambridge University",
    date: "2025",
    id: "D4338064"
  },
  {
    title: {
      es: "Full Stack Developer con JavaScript",
      en: "JavaScript Full Stack Developer",
    },
    issuer: "Platzi",
    date: "2023",
    link: "https://platzi.com/p/GianProcopio/ruta/100-ruta/diploma/detalle/",
  },
];
