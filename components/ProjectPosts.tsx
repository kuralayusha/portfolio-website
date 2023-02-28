import { ProjectData } from '@/pages'
import ShowPostInfo from './ShowPostInfo'

type ProjectPostsProps = {
  data: ProjectData
}

function ProjectPosts({ data }: ProjectPostsProps) {
  console.log(
    data.map((project: any) =>
      project.image.map((image: any) => image)
    )
  )

  return (
    <div className="posts--project">
      {data.map((project) => (
        <div className="project--card" key={project.id}>
          {/* map the images and just print the first one */}
          <ShowPostInfo />
          <img
            src={project.image[0]}
            style={{
              width: '150px',
              height: '150px',
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectPosts
