import ProjectPosts from './ProjectPosts'
import countryPhoto from '../images/country-ss-1.jpg'
import { ProjectData } from '@/pages'
import { useState, useEffect } from 'react'
import SendMeMail from './SendMeMail'
import Post from './Post'

type MainPageProps = {
  data: ProjectData
  visitors: number
  likesData: { id: number; likes: number }[] | any
  sumOfLikes: number
  calculating: boolean
  userDataStarter: { [key: number]: number } | any
}
function MainPage({
  data,
  visitors,
  likesData,
  sumOfLikes,
  calculating,
  userDataStarter,
}: MainPageProps) {
  const [showMail, setShowMail] = useState<boolean>(false)
  const [focusInfoId, setFocusInfoId] = useState<number>(0)
  const [showPost, setShowPost] = useState<number>(0)
  const [postViews, setPostViews] = useState<number>(0)

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
  }, [])

  // get from local storage the data of the user

  return (
    <div className="mainPage--container">
      {showMail ? <SendMeMail /> : null}
      <div className="mainPage--info">
        <div className="info--details">
          <div className="details--photo">my beautifull photo</div>
          <div className="details--bio">
            <div className="bio--top">
              <h1>kuralayusha</h1>
              <div className="bio--top--btns">
                <button
                  className="bio--top--btn"
                  onClick={handleDownloadCv}
                >
                  download cv
                </button>
                <button
                  className="bio--top--btn"
                  onClick={() => setShowMail(!showMail)}
                >
                  mail
                </button>
              </div>
            </div>
            <div className="bio--mid">
              <p>{data.length} projects</p>
              <p>{calculating ? '. . .' : sumOfLikes} likes</p>
              <p>{visitors} times visited</p>
            </div>
            <div className="bio--bot">
              <h1>Yusha Kuralay</h1>
              <p>Front-end developer</p>
              <p>React, Next.js, TypeScript, JavaScript, HTML, CSS</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Officiis ducimus, magni tempore impedit facilis
                cupiditate aspernatur voluptatem ea quidem officia
                voluptate, nobis, laborum culpa commodi. Et
                accusantium debitis aliquam dolorem tenetur, pariatur
                commodi inventore. Hic, quibusdam. Hic reiciendis
                maiores quibusdam.
              </p>
            </div>
          </div>
        </div>
        <div className="info--socials">
          <button className="social--btn">twitter</button>
          <button className="social--btn">instagram</button>
          <button className="social--btn">linkedIn</button>
        </div>
      </div>
      <div className="mainPage--posts">
        {showPost > 0 && (
          <Post
            data={data}
            focusInfoId={focusInfoId}
            showPost={showPost}
            likesData={likesData}
            userDataStarter={userDataStarter}
          />
        )}
        <h1>Projects</h1>

        <ProjectPosts
          data={data}
          setFocusInfoId={setFocusInfoId}
          focusInfoId={focusInfoId}
          setShowPost={setShowPost}
          likesData={likesData}
          postViews={postViews}
        />
      </div>
    </div>
  )
}

export default MainPage
