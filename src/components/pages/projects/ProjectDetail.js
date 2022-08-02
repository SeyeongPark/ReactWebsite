export default function ProjectDetail(props) {
    return (
        <>
        <div loading='lazy' className="banner">
                <h1 className="title">{props.title}</h1>
        </div>
        <div className="container">
            <div className='sum-detail'>
                <div className='sum-team-solo'>
                    <h3>Team</h3>
                    <h5>{props.coop}</h5>
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
                { !props.url && !props.github ? '' : 
                <h3>🔗 Link</h3>
                }
                {props.url ? 
                    <h5>
                    Application: <a href={props.url}>{props.url}</a>
                    </h5> : ''
                }
                {props.github ? 
                    <>
                    <br/>
                    <h5>
                    Github: <a href={props.github}>{props.github}</a>
                    </h5> 
                    </>: ''
                }
            </div>
            <div className='project-detail'>
                <h3>🔎 Details</h3>
                <h5 dangerouslySetInnerHTML={{__html: props.description}}/>
            </div>
            <div className='project-image'>
               
            </div>

            {props.contribution ? 
                <div className='project-contribution'>
                <h3>💻 Contribution</h3>
                <h5 dangerouslySetInnerHTML={{__html: props.contribution}} />
            </div>    
            : ''}

            <div className='project-learned'>
                <h3>📚 What I’ve learned</h3>
                <h5 dangerouslySetInnerHTML={{__html: props.learned}} />
            </div>
        </div>
        </>
    )
}