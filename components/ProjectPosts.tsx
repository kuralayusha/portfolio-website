import { ProjectData } from '@/pages'
import rps from '../public/images/country-ss-1.jpg'

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

          <img
            src={project.image[0]}
            style={{
              width: '100px',
              height: '100px',
            }}
          />
        </div>
      ))}
      <p>im here</p>
      <img
        src={rps.src}
        style={{
          width: '100px',
          height: '100px',
        }}
      />
    </div>
  )
}

export default ProjectPosts
