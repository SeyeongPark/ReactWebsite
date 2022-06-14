import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
function CardItem(props) {
  return (
    <>
      <li class="cards__item">
          <div class="cards__item__link" >
              <figure className="cards__item__pic-wrap" data-category={props.coop}>
                <a href={props.url}>
                  <img 
                  src={props.src} 
                  alt="Project Image" 
                  className="cards__item__img"/>
                  </a>
              </figure >
              <div className="cards__item__info">
                  <h5 className="cards__item__text">{props.text}</h5>
                  <p className="cards__item__description">{props.description}</p>
                  <br/>
                  <p className="cards__item__description">{props.detail}</p>
                  <p className="cards__item__role">{props.role}</p>
                  <p className="cards__item__language">{props.language}</p>

                  <a href={props.github}>
                    <FontAwesomeIcon size="3x" icon={faGithub} className="icon-tecnology"/>
                  </a>
              </div>
          </div>
      </li>
    </>
  )
}

export default CardItem
