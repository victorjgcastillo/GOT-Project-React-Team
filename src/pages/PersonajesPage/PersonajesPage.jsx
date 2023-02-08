import React, { useEffect, useState } from 'react';
import HomeReturn from '../../components/HomeReturn/HomeReturn';
import Flags from '../../components/Flags/Flags';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


import './PersonajesPage.scss';
import Search from '../../components/Search/Search';
import axios from 'axios';
import CharactersGallery from '../../components/CharactersGallery/CharactersGallery';
import Navbar from '../../components/Navbar/Navbar';


const PersonajesPage = () => {

  const [characters, setCharacters] = useState([]);

  const getCharacters = async (searchCharacters = [])=> {
    const res = await axios.get(
      "https://api.got.show/api/show/characters/" + searchCharacters
    );
    console.log(res.data)
    if (searchCharacters.length > 0){
      setCharacters([res.data])
    }
    else {
      setCharacters(res.data)
    }
  };

  useEffect(() => {getCharacters()}, []);

  const scrollableNodeRef = React.createRef();

  return (
    <>
      
      <div className='personajes'>

        <div className='personajes__navbar'>
          <div className='personajes__navbar--buscador'>
            <Search onSubmit={getCharacters}></Search>
          </div>
          <div className='personajes__navbar--idiomas'>
            <HomeReturn></HomeReturn>
            <Flags></Flags>
          </div>
        </div>
        <div>
        <SimpleBar scrollableNodeProps={{ ref: scrollableNodeRef }} className='simple-bar' >
          <CharactersGallery list={characters}></CharactersGallery>
        </SimpleBar>
        </div>
        
      </div>
      <div>
      <Navbar></Navbar>
      </div>

    </>
  )
}
export default PersonajesPage