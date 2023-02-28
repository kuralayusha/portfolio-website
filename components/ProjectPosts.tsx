import { ProjectData } from '@/pages'
import ShowPostInfo from './ShowPostInfo'
import { useState } from 'react'

type ProjectPostsProps = {
  data: ProjectData
}

function ProjectPosts({ data }: ProjectPostsProps) {
  const [focusInfoId, setFocusInfoId] = useState<number>(0)

  function handleMouseOver(e: React.MouseEvent<HTMLDivElement>) {
    const id = parseInt(e.currentTarget.id)
    setFocusInfoId(id)
  }

  function handleMouseLeave() {
    setFocusInfoId(0)
  }

  console.log(focusInfoId)

  // when mouse comes to the image show the info onliy for that image

  return (
    <div className="posts--project">
      {data.map((project) => (
        <div
          className="project--card"
          key={project.id}
          onMouseEnter={(e) => handleMouseOver(e)}
          onMouseLeave={handleMouseLeave}
          id={project.id.toString()}
        >
          {focusInfoId === project.id && (
            <ShowPostInfo data={data} focusInfoId={focusInfoId} />
          )}
          <img
            className="post"
            src={project.image[0]}
            alt={project.name}
            key={project.id}
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectPosts
