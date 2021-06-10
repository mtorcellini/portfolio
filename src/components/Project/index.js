
function Project (props) {

  let tags;

  if (props.tags) {
    tags = props.tags.map(tag => <span key={tag}className="tag">{tag}</span>);
  }

  return (
    <div className="column">
      <div className="box">
        <h3 className="title is-3">{props.title}</h3>
        <p className="subtitle">{props.subtitle}</p>
        <div className="tags">
          {tags}
        </div>
        <div className="columns">
          {
            props.repo && 
            <div className="column">
              <a href={props.repo} target="_blank" rel="noreferrer">
                <div className="icon-text">
                  <span className="icon">
                    <i className="fab fa-github-alt"></i>
                  </span>
                  <span>Repo</span>
                </div>
              </a>
            </div>
          }
          {
            props.deploy &&
            <div className="column">
              <a href={props.deploy} target="_blank" rel="noreferrer">
                <div className="icon-text">
                  <span className="icon">
                    <i className="fas fa-power-off"></i>
                  </span>
                  <span>Application</span>
                </div>
              </a>
            </div>
          }
        </div>

      </div>
    </div>

  )
}

export default Project;