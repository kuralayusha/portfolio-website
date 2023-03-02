import { ProjectData } from '@/pages'
import ShowPostInfo from './ShowPostInfo'
import { useState } from 'react'

type ProjectPostsProps = {
  data: ProjectData
  focusInfoId: number
  setFocusInfoId: React.Dispatch<React.SetStateAction<number>>
  setShowPost: React.Dispatch<React.SetStateAction<number>>
}

function ProjectPosts({
  data,
  focusInfoId,
  setFocusInfoId,
  setShowPost,
}: ProjectPostsProps) {
  function handleMouseOver(e: React.MouseEvent<HTMLDivElement>) {
    const id = parseInt(e.currentTarget.id)
    setFocusInfoId(id)
  }

  function handleMouseLeave() {
    setFocusInfoId(0)
  }

  function handleTakeToPost(e: React.MouseEvent<HTMLDivElement>) {
    const id = parseInt(e.currentTarget.id)
    setShowPost(id)
  }

  console.log({ focusInfoId })

  // when mouse comes to the image show the info onliy for that image

  return (
    <div className="posts--project">
      {data.map((project) => (
        <div
          className="project--card"
          key={project.id}
          id={project.id.toString()}
          onMouseEnter={(e) => handleMouseOver(e)}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => handleTakeToPost(e)}
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
