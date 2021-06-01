function Projects() {
  return (
    <>
      <h1 className="title is-1">Projects</h1>
      <div className="columns">
        <div className="column is-half">
          <div className="box">
            <h3 className="title is-3">Jubilee Austen</h3>
            <p className="subtitle">A single page portfolio thing</p>
            <div className="tags">
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="box">
            <h3 className="title is-3">eCommerce Backend</h3>
            <p className="subtitle">Backend for an eCommerce application</p>
            <div className="tags">
              <span className="tag">Node.js</span>
              <span className="tag">MySQL</span>
              <span className="tag">Express</span>
            </div>
          </div>
        </div>
      </div>
    </>



  )
}

export default Projects;