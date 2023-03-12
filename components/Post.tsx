import { ProjectData } from '@/pages'
import { useEffect, useState } from 'react'
import { render } from 'react-dom'
import Link from 'next/link'
import profilePhoto from '@/public/images/profile-photo.jpg'

import arrowLight from '@/public/icons/arrow-light.svg'
import emptyWhiteHeart from '@/public/icons/unlike-for-light.svg'
import emptyBlackHeart from '@/public/icons/unlike-for-dark.svg'
import redHeart from '@/public/icons/red-like.svg'
import copyLight from '@/public/icons/copy-light.svg'
import copyDark from '@/public/icons/copy-dark.svg'
import githubDark from '@/public/icons/github-for-dark.svg'
import githubLight from '@/public/icons/github.svg'
import webLight from '@/public/icons/website-for-light.svg'
import webDark from '@/public/icons/website-for-dark.svg'

import Image from 'next/image'

type PostProps = {
  data: ProjectData
  focusInfoId: number
  showPost: number
  likesData: { id: number; likes: number }[] | any
  userDataStarter: { [key: number]: { liked: boolean } } | any
  setShowPost: (id: number) => void
  projectPhotos: any
  darkMode: any
  likes: any
  setLikes: any
  setR: any
  r: any
}

function Post({
  data,
  focusInfoId,
  showPost,
  likesData,
  userDataStarter,
  setShowPost,
  projectPhotos,
  darkMode,
  likes,
  setLikes,
  setR,
  r,
}: PostProps) {
  const [postsLike, setPostsLike] = useState<any>()
  const [trigger, setTrigger] = useState<any>()
  const [renderLikes, setRenderLikes] = useState<number>()
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [showLike, setShowLike] = useState<any>()
  const [likeLinkInc, setLikeLinkInc] = useState<any>()
  const [likeLinkDec, setLikeLinkDec] = useState<any>()
  const [copyAlert, setCopyAlert] = useState<boolean>(false)

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes))
  }, [likes])

  // in this handleLike function we are getting the id of the project that we clicked on and we are changing the liked value of that project to the opposite of its current value if the value is changed to true we map the data and we fetch the increaseLikes otherwise we fetch the decreaseLikes function

  function handleLike(e: React.MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.id
    setLikes((prev: any) => ({
      ...prev,
      [showPost]: {
        liked: !prev[showPost].liked,
      },
    }))
    handleIncDec()
    // datadan id'si showPost olan projeyi buluyoruz ve onun linkini alıyoruz
    localStorage.setItem('likes', JSON.stringify(likes))
  }

  function handleIncDec() {
    data.map((project) => {
      // console.log('inc', project.status.increaseLikes)
      // console.log('dec', project.status.decreaseLikes)

      if (project.id === showPost) {
        // console.log('buraya girdi')
        setLikeLinkDec(project.status.decreaseLikes)
        setLikeLinkInc(project.status.increaseLikes)

        if (likes[showPost].liked) {
          // console.log('düşürüyom')
          setShowLike(project.status.likes)
          setTrigger(false)
        } else {
          // console.log('arttiriyom')
          setShowLike(project.status.likes)
          setTrigger(true)
        }
      }
    })
  }
  // console.log({ likeLinkInc })
  // console.log({ likeLinkDec })

  useEffect(() => {
    if (trigger) {
      fetch(likeLinkInc)
        .then((response) => response.json())
        .then((data) => {
          setPostsLike(data)
        })
    } else {
      fetch(likeLinkDec)
        .then((response) => response.json())
        .then((data) => {
          setPostsLike(data)
        })
    }
    setR(!r)
  }, [trigger])

  useEffect(() => {
    if (likesData) {
      setRenderLikes(likesData[showPost])
    }
  }, [likesData])

  // useEffect(() => {
  //   if (postsLike) {
  //     setRenderLikes(postsLike.likes)
  //   }
  // }, [postsLike])

  // console.log({ renderLikes })

  function handleSend(e: React.MouseEvent<HTMLButtonElement>) {
    data.map((project) => {
      if (project.id === showPost) {
        navigator.clipboard.writeText(project.link)
      }
    })

    setCopyAlert(true)

    setTimeout(() => {
      setCopyAlert(false)
    }, 1500)
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
      {r}
      <div className="post--bar">
        <Image src={profilePhoto} alt="" onClick={handleGoBack} />
        <h1 onClick={handleGoBack}>kuralayusha</h1>
      </div>
      {data.map((project) => (
        <div
          key={project.id}
          className={showPost === project.id ? 'one' : 'none'}
        >
          {showPost === project.id && (
            <div className="post--container">
              <div className="post--container--top">
                <Image
                  className="slider--btn mobile left  "
                  onClick={handleSliderDecrease}
                  src={arrowLight}
                  alt="left arrow"
                />
                <Image
                  className="slider--btn mobile right  "
                  onClick={handleSliderIncrease}
                  src={arrowLight}
                  alt="right arrow"
                />
                <Image
                  className="slider--btn desktop left "
                  onClick={handleSliderDecrease}
                  src={arrowLight}
                  alt="left arrow"
                />
                <Image
                  className="slider--btn desktop right "
                  onClick={handleSliderIncrease}
                  src={arrowLight}
                  alt="right arrow"
                />
                <Link href={project.link} target={'_blank'}>
                  <Image
                    src={projectPhotos[currentSlide]}
                    alt="post photo"
                    className="post--photo"
                    width={400}
                    height={400}
                  />
                </Link>
              </div>
              <div className="post--details desktop">
                <div className="post--details--container">
                  <p className="post--definition">
                    <span>kuralayusha</span> This is the{' '}
                    <span>{project.name}</span> project.{' '}
                    {project.description}
                  </p>
                  <div className="post--technologys">
                    {project.technologies.map((technology) => (
                      <span key={technology}>#{technology}</span>
                    ))}
                  </div>
                </div>
                <div className="post--down">
                  <div className="post--buttons">
                    <div className="post--buttons--ls">
                      <button onClick={(e) => handleLike(e)}>
                        {likes[showPost].liked ? (
                          <img
                            className="post--btns"
                            src={redHeart.src}
                            alt="liked heart"
                          />
                        ) : (
                          <img
                            className="post--btns"
                            src={
                              darkMode
                                ? emptyBlackHeart.src
                                : emptyWhiteHeart.src
                            }
                            alt="like"
                          />
                        )}
                      </button>
                      <button onClick={(e) => handleSend(e)}>
                        <img
                          className="post--btns"
                          src={
                            darkMode ? copyDark.src : copyLight.src
                          }
                          alt="copy link"
                        />
                      </button>
                      <p
                        className={
                          copyAlert ? 'copy--alert' : 'see--less'
                        }
                      >
                        copied
                      </p>
                    </div>

                    <div className="post--buttons--gv">
                      <button>
                        <Link
                          href={project.codeLink}
                          target={'_blank'}
                        >
                          <img
                            className="post--btns"
                            src={
                              darkMode
                                ? githubDark.src
                                : githubLight.src
                            }
                            alt="github"
                          />
                        </Link>
                      </button>
                      <button>
                        <Link href={project.link} target={'_blank'}>
                          <img
                            className="post--btns"
                            src={
                              darkMode ? webDark.src : webLight.src
                            }
                            alt="website"
                          />
                        </Link>
                      </button>
                    </div>
                  </div>
                  <p className="post--likes">{renderLikes} likes</p>
                </div>
              </div>
              <div className="post--details mobile">
                <div className="post--buttons">
                  <div className="post--buttons--ls">
                    <button onClick={(e) => handleLike(e)}>
                      {likes[showPost].liked ? (
                        <Image
                          className="post--btns"
                          src={redHeart}
                          alt="liked heart"
                        />
                      ) : (
                        <Image
                          className="post--btns"
                          src={
                            darkMode
                              ? emptyBlackHeart
                              : emptyWhiteHeart
                          }
                          alt="like"
                        />
                      )}
                    </button>
                    <button onClick={(e) => handleSend(e)}>
                      <Image
                        className="post--btns one"
                        src={darkMode ? copyDark : copyLight}
                        alt="copy link"
                      />
                    </button>
                    <p
                      className={
                        copyAlert ? 'copy--alert' : 'see--less'
                      }
                    >
                      copied
                    </p>
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
                  <div className="post--buttons--gv">
                    <button>
                      <Link href={project.codeLink} target={'_blank'}>
                        <Image
                          className="post--btns two"
                          src={darkMode ? githubDark : githubLight}
                          alt="github"
                        />
                      </Link>
                    </button>
                    <button>
                      <Link href={project.link} target={'_blank'}>
                        <Image
                          className="post--btns"
                          src={darkMode ? webDark : webLight}
                          alt="website"
                        />
                      </Link>
                    </button>
                  </div>
                </div>
                <p className="post--likes">{renderLikes} likes</p>
                <p className="post--definition">
                  <span>kuralayusha</span> This is the{' '}
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
