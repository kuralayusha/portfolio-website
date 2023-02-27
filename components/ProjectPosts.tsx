type ProjectPostsProps = {
  data: any
}

function ProjectPosts({ data }: ProjectPostsProps) {
  return (
    <div className="posts--project">
      {data.map((project: any) => (
        <div className="project--card">
          <div className="card--img">
            <img src={project.image} alt="" />
          </div>
          <div className="card--info">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="card--info--btns">
              <button className="card--info--btn">visit</button>
              <button className="card--info--btn">like</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectPosts
