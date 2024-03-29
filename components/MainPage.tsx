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

import MobileMain from './MobileMain'
import DesktopMain from './DesktopMain'
import Image from 'next/image'
import { log } from 'console'

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
  const [seeMore, setSeeMore] = useState<boolean>(false)

  useEffect(() => {
    // Local storage'dan beğeni durumunu çekiyoruz
    const storedLikes = localStorage.getItem('likes')
    // console.log('likes a baktim ', storedLikes)

    if (storedLikes && storedLikes.length === data.length) {
      // if the storedLikes lenght is equal to data lenght then set the likes state to the storedLikes else
      console.log('varmış', storedLikes.length)
      console.log(data.length)

      setLikes(JSON.parse(storedLikes))
    } else {
      // console.log('boşmuş', likes)
      // Local storage'da beğeni durumu yoksa, her bir proje id si için beğeni kısmı false olan bir obje oluşturuyoruz
      data.map((project) => {
        // console.log('setting the data')
        setLikes((prev: any) => ({
          ...prev,
          [project.id]: {
            liked: false,
          },
        }))
      })
      // console.log('olusturdum', likes)
    }
  }, [])

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

  return (
    <div className="mainPage--container">
      {r}
      <div
        className={
          showPost > 0 ? 'mainPage--info no' : 'mainPage--info'
        }
      >
        <MobileMain
          data={data}
          calculating={calculating}
          sumOfLikes={sumOfLikes}
          visitors={visitors}
          seeMore={seeMore}
          setSeeMore={setSeeMore}
          showMail={showMail}
          setShowMail={setShowMail}
          showPost={showPost}
        />
        <DesktopMain
          data={data}
          calculating={calculating}
          sumOfLikes={sumOfLikes}
          visitors={visitors}
          seeMore={seeMore}
          setSeeMore={setSeeMore}
          showMail={showMail}
          setShowMail={setShowMail}
          showPost={showPost}
        />

        <div className="info--socials">
          <Link
            href="https://github.com/kuralayusha"
            target={'_blank'}
            className="social--btn--txt"
          >
            <div className="social--btn--cover">
              <Image
                src={githubLogo}
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
              <Image
                src={linkedinLogo}
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
              <Image
                src={twitterLogo}
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
              <Image
                src={instagramLogo}
                alt="instagram"
                className="social--btn"
              />
            </div>
            <p className="last">Instagram</p>
          </Link>
        </div>
      </div>
      <div
        className={
          showPost > 0 ? 'mainPage--posts no' : 'mainPage--posts'
        }
      >
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
