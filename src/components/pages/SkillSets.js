import React from "react";
import '../../App.css'
import './About.css'

export default function SkillSets(){
    return(
        <body>
            <div className="main-skill-set">
            <h1>SkillSets.</h1>
            <table>
                <tbody>
                <tr>
                    <th className="title">Frontend</th>
                    <td className="content">
                        <ul>
                            <li>JavaScript, HTML, CSS</li>
                            <li>React.js</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th className="title">Backend</th>
                    <td className="content"> 
                        <ul>
                            <li>Java, Python</li>
                            <li>Spring Boot, Spring MVC, Spring Data JPA</li>
                            <li>Visual Studio Code</li>
                        </ul>  
                    </td>
                </tr>
                <tr>
                    <th className="title">DevOps</th>
                    <td className="content">
                        <ul>
                            <li>MySQL, MongoDB, GraphQL API, REST API</li>
                            {/* <li>AWS(DynamoDB, RDS, S3, and EC2)</li> */}
                            <li>Heroku, Firebase</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
                </table>
            </div>
        </body>
    ) 
}