import ProjectPosts from './ProjectPosts'
import countryPhoto from '../images/country-ss-1.jpg'
import { ProjectData } from '@/pages'
import { useState, useEffect } from 'react'
import SendMeMail from './SendMeMail'

type MainPageProps = {
  data: ProjectData
}
function MainPage({ data }: MainPageProps) {
  const [visitorsCount, setVisitorsCount] = useState<number>()
  const [fatching, setFatching] = useState<boolean>(true)
  const [showMail, setShowMail] = useState<boolean>(false)

  useEffect(() => {
    fetchVisitors()
    async function fetchVisitors() {
      const response = await fetch(
        'https://api.countapi.xyz/update/kurleys-web/profile-site/?amount=0.5'
      )
      const data = await response.json()
      setVisitorsCount(data.value)
    }
    setFatching(false)
  }, [])

  function handleDownloadCv() {
    window.open(
      'https://drive.google.com/file/d/1I6L5vLLvXiCS28OMaU1Tv85TrnERuBmW/view?usp=sharing'
    )
  }

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
              <p>7 projects</p>
              <p>15 total likes</p>
              <p>{fatching ? '...' : visitorsCount} visitors</p>
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
        <h1>Projects</h1>

        <ProjectPosts data={data} />
      </div>
    </div>
  )
}

export default MainPage
