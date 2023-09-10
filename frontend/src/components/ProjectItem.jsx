function ProjectItem({ id, title, link, desc, extras }) {
  return (
    <li className="project-item mb-8 md:mb-4" key={id}>
      <h2 className="project-title text-lg md:text-xl">
        <a
          href={link}
          target="react/jsx-no-target-blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {title}
        </a>
      </h2>
      <p className="project-desc">{desc}</p>
      <div className="project-extras">{extras}</div>
    </li>
  );
}
export default ProjectItem;
