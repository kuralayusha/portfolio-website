import { ProjectData } from '@/pages'
import { useEffect, useState } from 'react'
import heart from '@/public/icons/white-heart.svg'
import eye from '@/public/icons/eye-dark.svg'

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
        <div key={project.id} className="post-entry-info--container">
          {project.id === focusInfoId && (
            <div className="post-entry-info--datas">
              <img
                src={heart.src}
                alt="likes"
                className="littleIcons heart"
              />
              <p>{likesData[project.id]}</p>
              <img
                src={eye.src}
                alt="views"
                className="littleIcons eye"
              />
              <p>{postViews[project.id]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ShowPostInfo
