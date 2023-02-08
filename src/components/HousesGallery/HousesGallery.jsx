import React from 'react';
import { Link } from 'react-router-dom';
import "./HousesGallery.scss";

export default function Gallery({ list }) {


  
  return (
    <div className='galleryHouses'>
      {list.map((item, index) => (

        <Link to={`/casas/${item.name}`} >
        <div className='box-card'>
        <figure className='gallery--cardHouses' key={index}>
              {item.image === null ? 
              <img class='cardHouses-img' src='https://awoiaf.westeros.org/images/thumb/7/7f/House_Brune_of_Brownhollow.svg/1200px-House_Brune_of_Brownhollow.svg.png' alt={item.name}/> : item.image === undefined ? <img class='cardHouses-img' src='https://awoiaf.westeros.org/images/thumb/7/7f/House_Brune_of_Brownhollow.svg/1200px-House_Brune_of_Brownhollow.svg.png' alt={item.name}/> : item.name === 'House Vance of Atranta' ? <img class='cardHouses-img' src='https://awoiaf.westeros.org/images/thumb/7/7f/House_Brune_of_Brownhollow.svg/1200px-House_Brune_of_Brownhollow.svg.png' alt={item.name}/> : item.name === 'House Fossoway of New Barrel' ? <img class='cardHouses-img' src='https://awoiaf.westeros.org/images/thumb/7/7f/House_Brune_of_Brownhollow.svg/1200px-House_Brune_of_Brownhollow.svg.png' alt={item.name}/> : <img class='cardHouses-img' src={item.image} alt="imagen"/>}
              <p class='textHouses'>{item.name}</p>
        </figure>
        </div>
        </Link>
      ))}
    </div>
  );
}