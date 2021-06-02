
function Project (props) {

  let tags;

  if (props.tags) {
    tags = props.tags.map(tag => <span className="tag">{tag}</span>);
  }

  return (
      <div className="column is-half">
      <div className="box">
        <h3 className="title is-3">{props.title}</h3>
        <p className="subtitle">{props.subtitle}</p>
        <div className="tags">
          {tags}
        </div>
      </div>
    </div>
  )
}

export default Project;