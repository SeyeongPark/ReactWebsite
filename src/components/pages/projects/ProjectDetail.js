import './Project.css'

export default function ProjectDetail() {
    return (
        <div className="container">
            <h1>Title</h1>
            <div className='sum-detail'>
                <div className='sum-team-solo'>
                    <h3>Team</h3>
                    <h5>Solo</h5>
                </div>
                <div className='sum-skills'>
                    <h3>Skills</h3>
                    <h5>JavaScript</h5>
                </div>
                <div className='sum-release'>
                    <h3>Released</h3>
                    <h5>Mar 02 2022</h5>
                </div>
            </div>
            <div className='project-link'>
                <h3>🔗 Link</h3>
                <h5>
                Application:
                </h5>
                <br/>
                <h5>
                Github:
                </h5>
            </div>
            <div className='project-detail'>
                <h3>🔎 Details</h3>
                <h5>
                    This is detail of the project
                </h5>
            </div>
            <div className='project-image'>
               
            </div>
            <div className='project-contribution'>
                <h3>💻 Contribution</h3>
            </div>
            <div className='project-learned'>
                <h3>📚 What I’ve learned</h3>
            </div>
        </div>
    )
}