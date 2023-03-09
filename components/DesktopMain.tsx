import { ProjectData } from "@/pages"
import profilePhoto from "../public/images/profile-photo.jpg"

type MobileMainProps = {
  data: ProjectData
  calculating: boolean
  sumOfLikes: number
  visitors: number
  seeMore: boolean
  setSeeMore: any
  showMail: boolean
  setShowMail: any
}

function DesktopMain({
  data,
  calculating,
  sumOfLikes,
  visitors,
  seeMore,
  setSeeMore,
  showMail,
  setShowMail,
}: MobileMainProps) {
  function handleDownloadCv() {
    window.open(
      "https://drive.google.com/file/d/1I6L5vLLvXiCS28OMaU1Tv85TrnERuBmW/view?usp=sharing"
    )
  }

  function handleSeeMore() {
    setSeeMore(!seeMore)
  }

  return (
    <div className="desktop--main">
      <div className="info--left">
        {" "}
        <img className="info--top--img" src={profilePhoto.src} alt="pp" />
      </div>
      <div className="info--right">
        <div className="info--btns">
          <h1>kuralayusha</h1>
          <button className="info--btns--btn blue" onClick={handleDownloadCv}>
            CV
          </button>
          <button
            className="info--btns--btn grey"
            onClick={() => setShowMail(!showMail)}
          >
            Mail
          </button>
        </div>
        <div className="info--top--datas">
          <div className="web--datas">
            <h4>{data.length}</h4>
            <span>Posts</span>
          </div>
          <div className="web--datas">
            <h4>{calculating ? ". . ." : sumOfLikes}</h4>
            <span>Likes</span>
          </div>
          <div className="web--datas">
            <h4>{visitors}</h4>
            <span>Visitors</span>
          </div>
        </div>
        <div className="info--bio">
          <h1>Yusha Kuralay</h1>
          <h2>Front-end developer</h2>
          <h2>HTML, CSS, JavaScript, React, TypeScript, Next.js</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing Officiis
            ducimus, magni tempore impedit facilis cupiditate aspernatur
            voluptatem ea quidem officia
            <span className={seeMore ? "see--less" : "see--more"}>...</span>
            <span className={seeMore ? "see--more" : "see--less"}>
              {" "}
              voluptate, nobis, laborum culpa commodi. Et accusantium debitis
              aliquam dolorem tenetur, pariatur commodi inventore. Hic,
              quibusdam. Hic reiciendis maiores quibusdam.
            </span>
            <span className="see--btn" onClick={handleSeeMore}>
              {seeMore ? " less" : " more"}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DesktopMain
