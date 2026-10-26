import { projects } from "../data/projects.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos">
      <div className="container">
        <h2 className="section-title">
          <span>02.</span> {t("projectsTitle")}
        </h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.title.es} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
