import React from 'react';
import "./CharactersGallery.scss";

import { Link, } from 'react-router-dom';

export default function Gallery({ list }) {

  // const navigate = useNavigate();

  return (
    <>
    <div className='gallery'>
      {list.map((item, index) => (
        
             <Link to={`/personajes/${item.name}`}>
              
              <figure className='gallery--card' key={index}>
              <p className='tooltip'><span>{item.name}</span><img 
              
              src={item.image} alt="imagen"/>
              </p>
              </figure>
             </Link>
      ))};
    </div>
    <div className='navbar--characters'>
        
    </div>
    </>
  );
}