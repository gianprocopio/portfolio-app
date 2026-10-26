import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ProjectCard({ title, description, tags, repo, demo }) {
  const { t, tr } = useLanguage();

  return (
    <article className="card">
      <h3>{tr(title)}</h3>
      <p>{tr(description)}</p>
      <div className="card__tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {(repo || demo) && (
        <div className="card__links">
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              {t("code")} ↗
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              {t("demo")} ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
