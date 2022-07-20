import React from "react";
import './About.css'
import Footer from '../Footer';

export default function SkillSets(){
    return(
        <>
        <body>
            <div className="main-skill-set">
            <h1>SkillSets.</h1>
            <table>
                <tbody>
                <tr>
                    <th className="title">Frontend</th>
                    <td className="content">
                        <ul>
                            <li><em>Language</em>: JavaScript, HTML, CSS</li>
                            <li><em>Framework</em>: React.js, GraphQL API</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th className="title">Backend</th>
                    <td className="content"> 
                        <ul>
                            <li><em>Language</em>: JSP/Servlet(JAVA), ASP.NET(C#), Python </li>
                            <li><em>Framework</em>: Node.js(JavaScript), Spring(Java), Express.js</li>
                        </ul>  
                    </td>
                </tr>
                <tr>
                    <th className="title">DevOps</th>
                    <td className="content">
                        <ul>
                            <li>MySQL, MongoDB </li>
                            {/* <li>AWS(DynamoDB, RDS, S3, and EC2)</li> */}
                            <li>Heroku, Firebase</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
                </table>
            </div>
        </body>
       <Footer/>
       </>

    ) 
}