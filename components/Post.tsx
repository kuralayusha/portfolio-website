import { ProjectData } from '@/pages'
import { useEffect, useState } from 'react'
import { render } from 'react-dom'

type PostProps = {
  data: ProjectData
  focusInfoId: number
  showPost: number
  likesData: { id: number; likes: number }[] | any
  userDataStarter: { [key: number]: { liked: boolean } } | any
}

function Post({
  data,
  focusInfoId,
  showPost,
  likesData,
  userDataStarter,
}: PostProps) {
  const [userData, setUserData] = useState<any>()
  const [renderLikes, setRenderLikes] = useState<number>()
  const [newUserData, setNewUserData] = useState<any>()

  useEffect(() => {
    data.map((project) => {
      if (project.id === showPost) {
        setRenderLikes(likesData[project.id])
      }
    })
  }, [focusInfoId])

  useEffect(() => {
    setUserData(userDataStarter)
  }, [])

  console.log({ userData })
  console.log(userDataStarter)

  function handleLike(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    // here i want to fetch the link from the data and increase the likes
    if (!userData[showPost].liked) {
      console.log('liked')
      data.map((project) => {
        if (project.id === showPost) {
          const link = project.status.increaseLikes
          console.log(link)

          fetch(link)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              setRenderLikes(data.value)
            })

          setUserData({
            ...userData,
            [project.id]: {
              liked: true,
            },
          })
        }
      })
    } else {
      console.log('unlike')
      data.map((project) => {
        if (project.id === showPost) {
          const link = project.status.decreaseLikes
          console.log(link)

          fetch(link)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              setRenderLikes(data.value)
            })
          setUserData({
            ...userData,
            [project.id]: {
              liked: false,
            },
          })
        }
      })
    }
  }

  useEffect(() => {
    // setTimeout(() => {
    localStorage.setItem('userDataStarter', JSON.stringify(userData))
    // }, 3500)
  }, [userData])

  return (
    <div className="post-container">
      {data.map((project) => (
        <div key={project.id}>
          {showPost === project.id && (
            <div>
              {project.image.map((image) => (
                <img
                  className="post-picture"
                  key={image}
                  src={image}
                  alt=""
                />
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
                    <button onClick={(e) => handleLike(e)}>
                      like
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(project.link)
                      }}
                    >
                      {' '}
                      send{' '}
                    </button>
                  </div>
                  <p>{renderLikes} likes</p>
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
