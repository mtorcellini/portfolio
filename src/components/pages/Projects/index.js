import Project from '../../Project';


function Projects() {

  const projects = [
    {
      title: "Henrys Fork Wildlife Alliance",
      subtitle: "Website for a wildlife nonprofit",
      tags: ["WordPress", "PHP", "MySQL", "CSS3"],
      repo: "https://github.com/mtorcellini/henrys_fork",
      deploy: "https://henrysforkwildlifealliance.org/"
    },
    {
      title: "TicTacGo",
      subtitle: "Play Tic-Tac-Toe against your friends",
      tags: ["Node.js", "Express", "Handlebars", "MySQL", "Sequelize", "Bootstrap", "Full Stack", "REST", "JavaScript"],
      repo: "https://github.com/mtorcellini/ticTacGo",
      deploy: "https://aqueous-retreat-32595.herokuapp.com/"
    },
    {
      title: "Pupster",
      subtitle: "Uses the Dog CEO API so users can search by breed or play a game to make dog friends",
      tags: ["React.js", "React Router", "JSX / ES6", "HTML5", "CSS3"],
      repo: "https://github.com/mtorcellini/pupster",
      deploy: "https://mtorcellini.github.io/pupster/"

    },
    {
      title: "Jubilee Austen",
      subtitle: "A simple page",
      tags: ["HTML5", "CSS3"],
      repo: "https://github.com/mtorcellini/jubilee-austen",
      deploy: "https://mtorcellini.github.io/jubilee-austen/"
    },
    {
      title: "eCommerce Backend",
      subtitle: "Backend for an eCommerce application",
      tags: ["Node.js", "MySQL", "Express", "CLI"],
      repo: "https://github.com/mtorcellini/ecommerce-backend"
    },
  ];

  const projectArray = projects.map((project, index) => (
    <Project
      key={index}
      title={project.title}
      subtitle={project.subtitle}
      tags={project.tags} 
      repo={project.repo}
      deploy={project.deploy} />
  ));

  const projectGrid = () => {
    let grid = [];

    for (let i = 0; i < projectArray.length; i+=2) {

      let twoCol = 
        <div className="columns">
          {projectArray[i]}
          {projectArray[i+1]}
        </div>;

      grid.push(twoCol);
    }

    return grid;
  }

  return (
    <>
      <div className="container">
        <h1 className="title is-1">Projects</h1>
        {projectGrid()}
      </div>

    </>
  )
}

export default Projects;