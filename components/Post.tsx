import { ProjectData } from '@/pages'
import { useEffect, useState } from 'react'
import { render } from 'react-dom'
import countrySs from '@/public/images/country-ss-1.jpg'
import profilePhoto from '@/public/images/profile-photo.jpg'

type PostProps = {
  data: ProjectData
  focusInfoId: number
  showPost: number
  likesData: { id: number; likes: number }[] | any
  userDataStarter: { [key: number]: { liked: boolean } } | any
  setShowPost: (id: number) => void
  projectPhotos: any
}

function Post({
  data,
  focusInfoId,
  showPost,
  likesData,
  userDataStarter,
  setShowPost,
  projectPhotos,
}: PostProps) {
  const [userData, setUserData] = useState<any>()
  const [renderLikes, setRenderLikes] = useState<number>()
  const [newUserData, setNewUserData] = useState<any>()
  const [currentSlide, setCurrentSlide] = useState<number>(0)

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

  // console.log({ userData })
  // console.log(userDataStarter)

  function handleLike(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (!userData[showPost].liked) {
      // console.log('liked')
      data.map((project) => {
        if (project.id === showPost) {
          const link = project.status.increaseLikes
          // console.log(link)

          fetch(link)
            .then((response) => response.json())
            .then((data) => {
              // console.log(data)
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
      // console.log('unlike')
      data.map((project) => {
        if (project.id === showPost) {
          const link = project.status.decreaseLikes
          // console.log(link)

          fetch(link)
            .then((response) => response.json())
            .then((data) => {
              // console.log(data)
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
    localStorage.setItem('userDataStarter', JSON.stringify(userData))
  }, [userData])

  function handleSend(e: React.MouseEvent<HTMLButtonElement>) {
    data.map((project) => {
      if (project.id === showPost) {
        navigator.clipboard.writeText(project.link)
      }
    })
  }

  function handleGoBack() {
    setShowPost(0)
  }

  function handleSliderIncrease() {
    if (currentSlide < projectPhotos.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0)
    }
  }

  function handleSliderDecrease() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    } else {
      setCurrentSlide(projectPhotos.length - 1)
    }
  }

  return (
    <div className="post--page">
      <div className="post--bar">
        <img src={profilePhoto.src} alt="" onClick={handleGoBack} />
        <h1 onClick={handleGoBack}>kurleyusha</h1>
      </div>
      {data.map((project) => (
        <div key={project.id} className="one">
          {showPost === project.id && (
            <div className="post--container">
              <img
                src={projectPhotos[currentSlide]}
                alt="post photo"
                className="post--photo"
              />
              <button
                className="slider--btn left"
                onClick={handleSliderDecrease}
              >
                L
              </button>
              <button
                className="slider--btn right"
                onClick={handleSliderIncrease}
              >
                R
              </button>

              <div className="post--details">
                <div className="post--buttons">
                  <div className="post--buttons--l&s">
                    <button onClick={(e) => handleLike(e)}>
                      like
                    </button>
                    <button onClick={(e) => handleSend(e)}>
                      {' '}
                      send{' '}
                    </button>
                  </div>
                  <div className="post--counter">
                    {projectPhotos.map(
                      (photo: any, index: number) => (
                        <div
                          key={index}
                          className={`post--photo--slider ${
                            currentSlide === index ? 'active' : ''
                          }`}
                        ></div>
                      )
                    )}
                  </div>
                  <div className="post--buttons--g&v">
                    <button>go to github</button>
                    <button>visit website</button>
                  </div>
                </div>
                <p className="post--likes">{renderLikes} likes</p>
                <p className="post--definition">
                  <span>kurleyusha</span> This is the{' '}
                  <span>{project.name}</span> project.{' '}
                  {project.description}
                </p>
                <div className="post--technologys">
                  {project.technologies.map((technology) => (
                    <span key={technology}>#{technology}</span>
                  ))}
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
