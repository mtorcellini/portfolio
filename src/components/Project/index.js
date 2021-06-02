
function Project (props) {
  return (
      <div className="column is-half">
      <div className="box">
        <h3 className="title is-3">{props.title}</h3>
        <p className="subtitle">{props.subtitle}</p>
        <div className="tags">
          {props.tags.map(tag => <span className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}

export default Project;