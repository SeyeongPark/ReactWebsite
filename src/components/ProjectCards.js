import React from 'react'
import CardItem from './items/CardItem'
import AOS from 'aos';

function ProjectCards() {
  AOS.refreshHard();
  return (
    <div className='cards'>
      <section className="projects-section" id="projects">
      <div className="cards__container">
          <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                    src="images/URQR.png"
                    page = "/project/urqr"
                    title = "URQR (Sep 2022 ver 1.0) "
                    description = "A web/mobile application that generates QR code with child information for an emergency card."
                    coop = "Team"
                    />
              </ul>
              <ul className="cards__items">
                <CardItem
                    src="images/Todo-1.webp"
                    page = "/project/todo"
                    title = "Todo (Jun 2022)"
                    description = "A web application that helps users stay organized and managed by adding their tasks on to lists."
                    detail = "Register | Login | CRUD each todo tasks"
                    skill = "MongoDB, Express, React, Node.js, Netlify, Heroku"
                    application = "Website"
                    coop = "Solo"
                    url = "https://sptech-todo.netlify.app"
                    github = "https://github.com/SeyeongPark/todo-mern-backend"
                    />
                <CardItem
                    src="images/TS-3.webp"
                    page = "/project/timetracker"
                    title = "Employee Time Tracker (May 2022)"
                    description = "A web application that records employees working time stamps from start to finish, and allows the manager to access all information."
                    detail = "Register | Login | Record Working Time | View/Manage Employee’s information(Salary, Email..)"
                    skill = "Java, MySQL, Spring Framework, Spring Boot, Spring Security, JPA, Heroku"
                    application = "Website"
                    coop = "Solo"
                    url = "https://timestamp-app-1.herokuapp.com/"
                    github = "https://github.com/SeyeongPark/PartTime-TimeStamp"
                    />
              </ul>
              <ul className="cards__items">
                <CardItem 
                  src="images/HA-1.webp"
                  title="HotAuc Auction (Apr 2022)"
                  page = "/project/hotauc"
                  description=
                  "A web application where Hot Wheels collectors buy and sell cars through auctions."
                  role="FE (Payment Method using Paypal), BE/FE (Utilize user's payment Info for selling info) "
                  application = "Website"
                  coop = "Team"
                  url = "https://mighty-mesa-33042.herokuapp.com/"
                  github = "https://github.com/hlutony/Comp313-22w-HotAuc"
                  skill = "JavaScript, HTML, CSS, React.js"
                  />
              <CardItem 
                  src="images/SM-1.webp"
                  title="Super Survey Maker (DEC 2020)"
                  page="/project/surveymaker"
                  description=
                  "A web application where users can create their own surveys and manage the surveys."
                  role="Web Design"
                  application = "Website"
                  coop = "Team"
                  url = "https://team1c-f2020.herokuapp.com/home"
                  github = "https://github.com/jodoubleny/team1c"
                  skill = "HTML, CSS"
                  />
              </ul>
          </div>
      </div>
      </section>
    </div>
  )
}

export default ProjectCards
