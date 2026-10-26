import { certifications } from "../data/certifications.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Certifications() {
  const { t, tr } = useLanguage();

  return (
    <section id="certificaciones">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> {t("certificationsTitle")}
        </h2>
        <div className="grid">
          {certifications.map((cert) => (
            <article className="card" key={cert.title.es}>
              <h3>{tr(cert.title)}</h3>
              <p className="cert__meta">
                {cert.issuer} · {cert.date}
              </p>
              {cert.id && <p>ID: {cert.id}</p>}
              {cert.link && (
                <div className="card__links">
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    {t("viewCredential")} ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
