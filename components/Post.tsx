import { ProjectData } from '@/pages'
import { useEffect, useState } from 'react'

type PostProps = {
  data: ProjectData
  focusInfoId: number
  showPost: number
}

function Post({ data, focusInfoId, showPost }: PostProps) {
  useEffect(() => {}, [])
  return (
    <div className="post-container">
      {data.map((project) => (
        <div key={project.id}>
          {showPost === project.id && (
            <div>
              {project.image.map((image) => (
                <img className="post-picture" src={image} alt="" />
              ))}
              <div>
                <div>kuralayusha</div>
                <div>
                  <p>
                    kuralayusha This is the {project.name} project.{' '}
                    {project.description}
                  </p>
                </div>
                <div>
                  {project.technologies.map((technology) => (
                    <div key={technology}>{technology}</div>
                  ))}
                </div>
                <div>
                  <div>
                    <button>like</button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(project.link)
                      }}
                    >
                      {' '}
                      send{' '}
                    </button>
                  </div>
                  <p>{} likes</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Post
