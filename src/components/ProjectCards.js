import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHtml5, faCss3, faJs, faGithub, faReact} from '@fortawesome/free-brands-svg-icons';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Programming Projects</h1>
      <div class="cards__container">
          <div class="cards__wrapper">
              <ul class="cards__items">
              
              <CardItem
                  src="images/TS-1.png"
                  text = "TimeStamp (2022)"
                  description = "A web application that employees can record their working time, and managers can access employees' wage and personal information."
                  language = "Java, MySQL, Spring Boot"
                  application = "Website"
                  coop = "Solo"
                  url = "https://timestamp-app-1.herokuapp.com/"
                  github = "https://github.com/SeyeongPark/PartTime-TimeStamp"
                  />
                
                <CardItem 
                  src="images/img-hotaut-homepage.png"
                  text="HotAuc Auction (2022)"
                  description=
                  "A web application where Hot Wheels collectors can buy and sell cars over auctions."
                  role="Payment Method using the PayPal"
                  application = "Website"
                  coop = "Team"
                  url = "https://mighty-mesa-33042.herokuapp.com/"
                  github = "https://github.com/hlutony/Comp313-22w-HotAuc"
                  language = "JavaScript, React.js"
                  >
                  </CardItem>
                  
              </ul>
              <ul class="cards__items">
              <CardItem 
                  src="images/SM-1.png"
                  text="Super Survey Maker (2020)"
                  description=
                  "A web application where users can create their own survey and take other surveys."
                  role="Web Design"
                  application = "Website"
                  coop = "Team"
                  url = "https://team1c-f2020.herokuapp.com/home"
                  github = "https://github.com/jodoubleny/team1c"
                  language = "HTML, CSS"
                  >
                </CardItem>
               
              </ul>
                  
          </div>
      </div>
    </div>
  )
}

export default Cards
