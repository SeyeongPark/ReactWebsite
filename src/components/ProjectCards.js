import React from 'react'
import CardItem from './items/CardItem'
import './items/Cards.css'

function ProjectCards() {
  return (
    <div className='cards'>
      <section id="projects">
      <div className="cards__container">
          <div className="cards__wrapper">
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
              <ul className="cards__items">
                {/* <CardItem 
                  src="images/SMG-1.png"
                  title="Slot Machine Game (2020)"
                  description=
                  "A game with spinning reels. Users play and gain money depending on their betting and the result of objects with different probabilities.."
                  application = "Web/Mobile"
                  coop = "Solo"
                  url = "https://seyeongpark.github.io/Slot-Machine-Game/"
                  github = "https://github.com/SeyeongPark/Slot-Machine-Game"
                  skill = "TypeScript, HTML, CSS"
                  /> */}
                {/* <CardItem 
                  src="images/first_personalsite.png"
                  title="First Personal Site (2020)"
                  description=
                  "The first website I deployed described simple information and pictures."
                  application = "Web"
                  coop = "Solo"
                  url = "http://studentweb.cencol.ca/spark235/"
                  skill = "HTML, CSS"
                  /> */}
                </ul>
          </div>
      </div>
      </section>
    </div>
  )
}

export default ProjectCards
