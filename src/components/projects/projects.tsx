import Card from "../card/card";
import "./project.scss";

const projects = [
  {
    name: `Game of Thrones Database`,
    link: `https://github.com/mmsaleem/Ice-and-Fire-API`,
    img: {
      src: "/img/Game.png",
      alt: `Game of Thrones Database`,
    },
  },

  {
    name: `Github Cards`,
    link: `https://git-cards.herokuapp.com/`,
    img: {
      src: "/img/git.png",
      alt: `Github Cards`,
    },
  },
];

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-wrapper">
          <div className="project-heading">
            <h2>Projects</h2>
          </div>
          <div className="project-section">
            <div className="project-section-wrapper">
              {projects.map((project) => {
                return <Card key={project.name} {...project}></Card>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
