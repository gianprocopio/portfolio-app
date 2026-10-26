import { profile } from "../data/profile.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Hero() {
  const { t, tr } = useLanguage();

  return (
    <div className="hero container" id="inicio">
      <p className="eyebrow">{t("greeting")}</p>
      <h1>{profile.name}</h1>
      <h2>
        {tr(profile.role)} · {profile.university}
      </h2>
      <p className="hero__intro">{tr(profile.intro)}</p>
      <div className="btns">
        <a className="btn btn--primary" href="#proyectos">
          {t("seeProjects")}
        </a>
        <a className="btn" href="#contacto">
          {t("contactMe")}
        </a>
      </div>
    </div>
  );
}
