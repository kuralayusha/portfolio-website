import { ProjectData } from '@/pages'
import { useEffect, useState } from 'react'

type ShowPostInfoProps = {
  data: ProjectData
  focusInfoId: number
  likesData: { id: number; likes: number }[] | any
  postViews: { [key: number]: number } | any
}

function ShowPostInfo({
  data,
  focusInfoId,
  likesData,
  postViews,
}: ShowPostInfoProps) {
  // console.log(postViews)

  return (
    <div className="post-entry-info">
      {data.map((project) => (
        <div key={project.id}>
          {/* here should be print the likesDatas value if the project.id is equal to likesData.id */}
          {project.id === focusInfoId && (
            <div className="post-entry-info--likes">
              <p>{likesData[project.id]} likes</p>
              <p>{postViews[project.id]} views</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ShowPostInfo
