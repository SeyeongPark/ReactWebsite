import React from "react";
import '../../App.css'
import './About.css'

export default function SkillSets(){
    return(
        <body>
            <div class="main-skill-set">
            <h1>My SkillSets.</h1>
            <table>
                <tbody>
                <tr>
                    <th class="title">Frontend</th>
                    <td class="content">
                        <ul>
                            <li>JavaScript, HTML, CSS</li>
                            <li>React.js</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th class="title">Backend</th>
                    <td class="content"> 
                        <ul>
                            <li>Java, Python, jQuery, Node.js</li>
                            <li>Spring Boot, Spring MVC, Spring Data JPA</li>
                            <li>Visual Studio Code</li>
                        </ul>  
                    </td>
                </tr>
                <tr>
                    <th class="title">DevOps</th>
                    <td class="content">
                        <ul>
                            <li>MySQL, MongoDB, GraphQL API</li>
                            <li>AWS(DynamoDB, RDS, S3, and EC2)</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
                </table>
            </div>
        </body>
    ) 
}