import React from 'react'
function CardItem(props) {
  return (
    <>
      <li className="cards__item">
          <div className="cards__item__link" >
              <figure className="cards__item__pic-wrap" data-category={props.coop}>
                <a href={props.page}>
                  <img loading='lazy'
                  src={props.src} 
                  alt="Project Image" 
                  className="cards__item__img"/>
                  </a>
              </figure >
              <div className="cards__item__info">
                  <h5 className="cards__item__text">{props.title}</h5>
                  <p className="cards__item__description">{props.description}</p>
                  <br/>
              </div>
          </div>
      </li>
    </>
  )
}

export default CardItem
