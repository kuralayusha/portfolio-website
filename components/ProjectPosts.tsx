import { ProjectData } from '@/pages'
import ShowPostInfo from './ShowPostInfo'
import { useState, useEffect } from 'react'

type ProjectPostsProps = {
  data: ProjectData
  focusInfoId: number
  setFocusInfoId: React.Dispatch<React.SetStateAction<number>>
  setShowPost: React.Dispatch<React.SetStateAction<number>>
  likesData: { id: number; likes: number }[] | any
  postViews: { [key: number]: number } | any
  setR: React.Dispatch<React.SetStateAction<boolean>>
  r: boolean
}

function ProjectPosts({
  data,
  focusInfoId,
  setFocusInfoId,
  setShowPost,
  likesData,
  postViews,
  setR,
  r,
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
    incrisePostViews(id)
    setShowPost(id)
  }

  function incrisePostViews(id: number) {
    data.map((project) => {
      if (project.id === id) {
        const link = project.status.increaseViews
        fetch(link)
      }
    })
  }

  return (
    <div className="posts--project">
      {r}
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
            <ShowPostInfo
              data={data}
              focusInfoId={focusInfoId}
              likesData={likesData}
              postViews={postViews}
            />
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
