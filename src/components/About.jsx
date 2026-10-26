import { profile } from "../data/profile.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function About() {
  const { t, tr } = useLanguage();

  return (
    <section id="sobre-mi">
      <div className="container">
        <h2 className="section-title">
          <span>01.</span> {t("aboutTitle")}
        </h2>
        <div className="about">
          <div className="about__text">
            {tr(profile.about).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <h3>{t("technologies")}</h3>
            <div className="skills">
              {profile.skills.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
