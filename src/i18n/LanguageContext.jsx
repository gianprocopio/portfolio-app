import { createContext, useContext, useEffect, useState } from "react";
import { ui } from "./ui.js";

const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext(null);

// Idioma inicial: el que eligió antes el visitante; si no, el de su navegador.
function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // localStorage puede no estar disponible; seguimos con el idioma del navegador
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // no pasa nada si no se puede guardar
    }
  }, [lang]);

  const toggleLang = () => setLang((current) => (current === "es" ? "en" : "es"));

  // t("clave") → texto fijo de la interfaz en el idioma actual
  const t = (key) => ui[lang][key];

  // tr(valor) → si el valor es { es: ..., en: ... } devuelve el del idioma actual;
  // si es un valor normal (un link, un mail, una tecnología) lo deja como está.
  const tr = (value) =>
    value && typeof value === "object" && !Array.isArray(value) && "es" in value
      ? value[lang]
      : value;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return context;
}
