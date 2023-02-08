import React from 'react';
import logo from '../../assets/house.png';
import "./HomeReturn.scss";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

const HomeReturn = () => {

  return (
    <div className='house' >
      <Link to='/'><img className='house--img' src={logo} alt='home'></img></Link>
    </div>
  )
}

export default HomeReturn
