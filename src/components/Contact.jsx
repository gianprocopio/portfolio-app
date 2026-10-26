import { profile } from "../data/profile.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Contact() {
  const { t } = useLanguage();
  const { email, linkedin, github } = profile.contact;

  return (
    <section id="contacto">
      <div className="container contact">
        <h2 className="section-title section-title--center">
          <span>04.</span> {t("contactTitle")}
        </h2>
        <p>{t("contactText")}</p>
        <div className="btns btns--center">
          <a className="btn btn--primary" href={`mailto:${email}`}>
            E-mail
          </a>
          <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          {github && (
            <a className="btn" href={github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
