import React, { useContext } from 'react'
import Flags from '../../components/Flags/Flags';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.scss';
import { MyContext } from '../../context/MyContext';


const HomePage = () => {

  const {t} = useContext(MyContext)

  return (

    <div className='home'>
      <div className='home__idiomas'>
        <Flags></Flags>
      </div>
      <div className='home__title'>
        <h1>{t("title")}</h1>
      </div>
      <div className='home__navbar'>
        <Navbar></Navbar>
      </div>
    </div>

  )
}
export default HomePage