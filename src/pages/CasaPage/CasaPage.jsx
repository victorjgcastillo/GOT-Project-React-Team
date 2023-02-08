import React, { useEffect, useState } from 'react';
import HomeReturn from '../../components/HomeReturn/HomeReturn';
import Flags from '../../components/Flags/Flags';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import './CasaPage.scss';
import Search from '../../components/Search/Search';
import axios from 'axios';
import HousesGallery from '../../components/HousesGallery/HousesGallery';
import Navbar from '../../components/Navbar/Navbar';

const CasaPage = () => {

  const [houses, setHouses] = useState([]);

  const getHouses = async (searchHouses = []) => {

    const res = await axios.get(
      "https://api.got.show/api/book/houses/" + searchHouses
    );
    console.log(res.data)
    if (searchHouses.length > 0){
      setHouses([res.data])
    }
    else {
      setHouses(res.data)
    }
  };

  useEffect(() => {getHouses()}, []);

  const scrollableNodeRef = React.createRef();

  return (
    <>
      
      <div className='personajes'>

        <div className='personajes__navbar'>
          <div className='personajes__navbar--buscador'>
            <Search onSubmit={getHouses}></Search>
          </div>
          <div className='personajes__navbar--idiomas'>
            <HomeReturn></HomeReturn>
            <Flags></Flags>
          </div>
        </div>
        <SimpleBar  scrollableNodeProps={{ ref: scrollableNodeRef }} className='simple-bar' >
          <HousesGallery list={houses}></HousesGallery>
        </SimpleBar>
      </div>
      <Navbar></Navbar>
    </>
  )
}
export default CasaPage