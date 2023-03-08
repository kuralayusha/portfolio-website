import ProjectPosts from './ProjectPosts'
import countryPhoto from '../images/country-ss-1.jpg'
import profilePhoto from '../public/images/profile-photo.jpg'
import twitterLogo from '../public/images/twitter-logo.png'
import linkedinLogo from '../public/images/linkedin-logo.png'
import instagramLogo from '../public/images/instagram-logo.jpg'
import githubLogo from '../public/images/github-logo.png'
import { ProjectData } from '@/pages'
import { useState, useEffect } from 'react'
import SendMeMail from './SendMeMail'
import Post from './Post'
import Link from 'next/link'
import { equal } from 'assert'

type MainPageProps = {
  data: ProjectData
  visitors: number
  likesData: { id: number; likes: number }[] | any
  sumOfLikes: number
  calculating: boolean
  userDataStarter: { [key: number]: number } | any
  darkMode: any
  setR: any
  r: any
}
function MainPage({
  data,
  visitors,
  likesData,
  sumOfLikes,
  calculating,
  userDataStarter,
  darkMode,
  setR,
  r,
}: MainPageProps) {
  const [showMail, setShowMail] = useState<boolean>(false)
  const [focusInfoId, setFocusInfoId] = useState<number>(0)
  const [showPost, setShowPost] = useState<number>(0)
  const [postViews, setPostViews] = useState<number>(0)
  const [projectPhotos, setProjectPhotos] = useState<any>([])
  const [likes, setLikes] = useState<any>()

  useEffect(() => {
    // Local storage'dan beğeni durumunu çekiyoruz
    const storedLikes = localStorage.getItem('likes')
    console.log('likes a baktim ', storedLikes)

    if (storedLikes) {
      console.log('doluymuş çektim', likes)
      setLikes(JSON.parse(storedLikes))
    } else {
      console.log('boşmuş', likes)
      // Local storage'da beğeni durumu yoksa, her bir proje id si için beğeni kısmı false olan bir obje oluşturuyoruz
      data.map((project) => {
        console.log('setting the data')
        setLikes((prev: any) => ({
          ...prev,
          [project.id]: {
            liked: false,
          },
        }))
      })
      console.log('olusturdum', likes)
    }
  }, [])

  function handleDownloadCv() {
    window.open(
      'https://drive.google.com/file/d/1I6L5vLLvXiCS28OMaU1Tv85TrnERuBmW/view?usp=sharing'
    )
  }

  useEffect(() => {
    data.map((project) => {
      const link = project.status.views

      async function fetchViews(link: string) {
        const response = await fetch(link)
        const data = await response.json()
        setPostViews((prev: any) => ({
          ...prev,
          [project.id]: data.value,
        }))
      }

      fetchViews(link)
    })
  }, [likes])

  // console.log({ postViews })

  // in this useEffect map the data and if showPost equals to project.id then set the image to the projectPhotos state if showPost equals to 0 then set the projectPhotos state to empty array
  useEffect(() => {
    data.map((project) => {
      if (showPost === project.id) {
        setProjectPhotos(project.image)
      } else if (showPost === 0) {
        setProjectPhotos([])
      }
    })
  }, [showPost])

  // console.log({ projectPhotos })
  // console.log({ showPost })

  return (
    <div className="mainPage--container">
      {r}
      <div className="mainPage--info">
        <div className="info--top">
          <img
            className="info--top--img"
            src={profilePhoto.src}
            alt="pp"
          />
          <div className="info--top--datas">
            <div className="web--datas">
              <h4>{data.length}</h4>
              <span>Posts</span>
            </div>
            <div className="web--datas">
              <h4>{calculating ? '. . .' : sumOfLikes}</h4>
              <span>Likes</span>
            </div>
            <div className="web--datas">
              <h4>{visitors}</h4>
              <span>Visitors</span>
            </div>
          </div>
        </div>
        <div className="info--bio">
          <h1>Yusha Kuralay</h1>
          <h2>Front-end developer</h2>
          <h2>HTML, CSS, JavaScript, React, TypeScript, Next.js</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis ducimus, magni tempore impedit facilis cupiditate
            aspernatur voluptatem ea quidem officia voluptate, nobis,
            laborum culpa commodi. Et accusantium debitis aliquam
            dolorem tenetur, pariatur commodi inventore. Hic,
            quibusdam. Hic reiciendis maiores quibusdam.
          </p>
        </div>
        <div className="info--btns">
          <button
            className="info--btns--btn blue"
            onClick={handleDownloadCv}
          >
            Download CV
          </button>
          <button
            className="info--btns--btn grey"
            onClick={() => setShowMail(!showMail)}
          >
            Contact Me
          </button>
        </div>
        <div className="info--socials">
          <Link
            href="https://github.com/kuralayusha"
            target={'_blank'}
            className="social--btn--txt"
          >
            <div className="social--btn--cover">
              <img
                src={githubLogo.src}
                alt="github"
                className="social--btn"
              />
            </div>
            <p>GitHub</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yusha-kuralay-6abb161b0/"
            target={'_blank'}
          >
            <div className="social--btn--cover">
              <img
                src={linkedinLogo.src}
                alt="linkedin"
                className="social--btn"
              />
            </div>
            <p>LinkedIn</p>
          </Link>
          <Link
            href="https://twitter.com/agresifcCcsage"
            target={'_blank'}
          >
            <div className="social--btn--cover">
              <img
                src={twitterLogo.src}
                alt="twitter"
                className="social--btn"
              />
            </div>
            <p>Twitter</p>
          </Link>
          <Link
            href="https://www.instagram.com/kuralayusha/?igshid=ZDdkNTZiNTM%3D"
            target={'_blank'}
          >
            <div className="social--btn--cover">
              <img
                src={instagramLogo.src}
                alt="instagram"
                className="social--btn"
              />
            </div>
            <p>Instagram</p>
          </Link>
        </div>
      </div>
      <div className="mainPage--posts">
        <ProjectPosts
          data={data}
          setFocusInfoId={setFocusInfoId}
          focusInfoId={focusInfoId}
          setShowPost={setShowPost}
          likesData={likesData}
          postViews={postViews}
          setR={setR}
          r={r}
        />
      </div>
      {showPost > 0 && (
        <Post
          data={data}
          focusInfoId={focusInfoId}
          showPost={showPost}
          likesData={likesData}
          userDataStarter={userDataStarter}
          setShowPost={setShowPost}
          projectPhotos={projectPhotos}
          darkMode={darkMode}
          likes={likes}
          setLikes={setLikes}
          setR={setR}
          r={r}
        />
      )}
      {showMail ? (
        <SendMeMail setShowMail={setShowMail} darkMode={darkMode} />
      ) : null}
    </div>
  )
}

export default MainPage
