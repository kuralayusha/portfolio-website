import { ProjectData } from '@/pages'

type ShowPostInfoProps = {
  data: ProjectData
  focusInfoId: number
}

function ShowPostInfo({ data, focusInfoId }: ShowPostInfoProps) {
  function handlePostDetails() {
    console.log('clicked')
  }
  return (
    <div className="post-entry-info" onClick={handlePostDetails}>
      {data.map((project) => (
        <div key={project.id}>
          {focusInfoId === project.id && (
            <div>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ShowPostInfo
