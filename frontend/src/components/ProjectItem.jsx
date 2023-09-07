function ProjectItem(props) {
  return (
    <li className="project-item" key={props.id}>
      <h2 className="project-title">
        <a
          href={props.link}
          target="react/jsx-no-target-blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {props.title}
        </a>
      </h2>
      <p className="project-desc">{props.desc}</p>
      <div className="project-extras">{props.extras}</div>
    </li>
  );
}
export default ProjectItem;
