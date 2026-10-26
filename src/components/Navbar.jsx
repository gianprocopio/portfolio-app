import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Navbar() {
  const { t, toggleLang } = useLanguage();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#inicio" className="logo">
          &lt;GP /&gt;
        </a>
        <div className="nav__right">
          <nav aria-label="Principal">
            <ul className="nav__links">
              <li>
                <a href="#sobre-mi">{t("navAbout")}</a>
              </li>
              <li>
                <a href="#proyectos">{t("navProjects")}</a>
              </li>
              <li>
                <a href="#certificaciones">{t("navCertifications")}</a>
              </li>
              <li>
                <a href="#contacto">{t("navContact")}</a>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="lang-btn"
            onClick={toggleLang}
            aria-label={t("langLabel")}
            title={t("langLabel")}
          >
            {t("langButton")}
          </button>
        </div>
      </div>
    </header>
  );
}
