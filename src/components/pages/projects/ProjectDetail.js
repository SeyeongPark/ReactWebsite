import './ProjectDetail.css'

export default function ProjectDetail(props) {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <div className='sum-detail'>
                <div className='sum-team-solo'>
                    <h3>Team</h3>
                    <h3>{props.coop}</h3>
                </div>
                <div className='sum-skills'>
                    <h3>Skills</h3>
                    <h5>{props.skill}</h5>
                </div>
                <div className='sum-release'>
                    <h3>Released</h3>
                    <h5>{props.date}</h5>
                </div>
            </div>
            <div className='project-link'>
                <h3>🔗 Link</h3>
                <h5>
                Application: {props.url}
                </h5>
                <br/>
                <h5>
                Github: {props.github}
                </h5>
            </div>
            <div className='project-detail'>
                <h3>🔎 Details</h3>
                <h5>
                    {props.description}
                </h5>
            </div>
            <div className='project-image'>
               
            </div>
            <div className='project-contribution'>
                <h3>💻 Contribution</h3>
                <h5>
                    {props.contribution}
                </h5>
            </div>
            <div className='project-learned'>
                <h3>📚 What I’ve learned</h3>
                <h5>
                    {props.learned}
                </h5>
            </div>
        </div>
    )
}