import ProjectPosts from './ProjectPosts'
import countryPhoto from '../images/country-ss-1.jpg'
import { ProjectData } from '@/pages'

type MainPageProps = {
  data: ProjectData
}
function MainPage({ data }: MainPageProps) {
  return (
    <div className="mainPage--container">
      <div className="mainPage--info">
        <div className="info--details">
          <div className="details--photo">my beautifull photo</div>
          <div className="details--bio">
            <div className="bio--top">
              <h1>kuralayusha</h1>
              <div className="bio--top--btns">
                <button className="bio--top--btn">download cv</button>
                <button className="bio--top--btn">mail</button>
              </div>
            </div>
            <div className="bio--mid">
              <p>7 projects</p>
              <p>15 total likes</p>
              <p>45 visitors</p>
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
