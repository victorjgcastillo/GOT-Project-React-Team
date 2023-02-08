import React, { useContext } from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { MyContext } from '../../context/MyContext';
import './Navbar.scss';

const Navbar = () => {

  const {t} = useContext(MyContext)

  return (
    <nav className='navbar'>
      <Link to="/personajes">{t("personajes")}</Link>
      <Link to="/casas">{t("casas")}</Link>
      <Link to="/cronologia">{t("cronologia")}</Link>
    </nav>
  )
}

export default Navbar
