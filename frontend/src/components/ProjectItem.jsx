function ProjectItem(params) {
  return (
    <div className="project-item">
      <h2>
        <a
          href={params.link}
          target="react/jsx-no-target-blank"
          rel="noopener noreferrer"
        >
          {params.title}
        </a>
      </h2>
      <p>{params.desc}</p>
    </div>
  );
}
export default ProjectItem;
