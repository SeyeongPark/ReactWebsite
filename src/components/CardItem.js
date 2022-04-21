import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHtml5, faCss3, faJs, faGithub, faReact} from '@fortawesome/free-brands-svg-icons';
function CardItem(props) {
  return (
    <>
      <li class="cards__item">
          <div class="cards__item__link" >
              <figure className="cards__item__pic-wrap" data-category={props.label}>
                <a href={props.url}>
                  <img 
                  src={props.src} 
                  alt="Travel Image" 
                  className="cards__item__img"/>
                  </a>
              </figure>
              <div className="cards__item__info">
                  <h5 className="cards__item__text">{props.text}</h5>
                  <p className="cards__item__description">{props.description}</p>
                  <p className="cards__item__role">{props.role}</p>

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
