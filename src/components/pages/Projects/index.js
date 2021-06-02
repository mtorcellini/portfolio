import Project from '../../Project';


function Projects() {
  return (
    <>
      <h1 className="title is-1">Projects</h1>
      <div className="columns">
        <Project 
          title="Jubilee Austen" 
          subtitle="A simple page" 
          tags={["HTML5", "CSS3"]} />
        <Project
          title="eCommerce Backend"
          subtitle="Backend for an eCommerce application"
          tags={["Node.js", "MySQL", "Express"]} />
      </div>
    </>



  )
}

export default Projects;