import { ProjectData } from '@/pages'
import profilePhoto from '../public/images/profile-photo.jpg'

type MobileMainProps = {
  data: ProjectData
  calculating: boolean
  sumOfLikes: number
  visitors: number
  seeMore: boolean
  setSeeMore: any
  showMail: boolean
  setShowMail: any
  showPost: number
}

function MobileMain({
  data,
  calculating,
  sumOfLikes,
  visitors,
  seeMore,
  setSeeMore,
  showMail,
  setShowMail,
  showPost,
}: MobileMainProps) {
  function handleDownloadCv() {
    window.open(
      'https://drive.google.com/file/d/1I6L5vLLvXiCS28OMaU1Tv85TrnERuBmW/view?usp=sharing'
    )
  }

  function handleSeeMore() {
    setSeeMore(!seeMore)
  }

  return (
    <div className="mobile--main">
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
          Hi! my name is Yusha and I am a computer engineering
          student.
          <span className={seeMore ? 'see--less' : 'see--more'}>
            ...
          </span>
          <span className={seeMore ? 'see--more' : 'see--less'}>
            {' '}
            For me, frontend development is the most satisfying thing
            to do. I am currently looking for a job because being a
            part of a team that shares the same passion as me is my
            primary goal. Please don't hesitate to contact me on any
            topic. I hope you enjoy my projects.
          </span>
          <span className="see--btn" onClick={handleSeeMore}>
            {seeMore ? ' less' : ' more'}
          </span>
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
    </div>
  )
}

export default MobileMain
