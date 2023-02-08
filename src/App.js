import './app.scss';

import { MyContext} from './context/MyContext';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PersonajesPage from "./pages/PersonajesPage/PersonajesPage";
import CasaPage from "./pages/CasaPage/CasaPage";
import {CronologiaPage} from "./pages/CronologiaPage/CronologiaPage";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import HousesDetailPage from './pages/HousesDetailPage/HousesDetailPage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import 'simplebar-react/dist/simplebar.min.css';


function App() {
  const {t, i18n} = useTranslation(['translation']);

  const changeLanguaje = (code) => {
    i18n.changeLanguage(code);
  }

  const [number, setNumber] = useState(2000)
  const [number2, setNumber2] = useState(0)

  return (
    <>
    <Router>
      <MyContext.Provider value={{number, setNumber, number2, setNumber2,t, changeLanguaje}}>

      <div className="app">
      
      
      <Routes>

        <Route path="/" element={<HomePage></HomePage>}/>
        <Route path="/personajes/:idCharacter" element={<CharacterDetailPage></CharacterDetailPage>}/>
        <Route path="/personajes" element={<PersonajesPage></PersonajesPage>}/>
        <Route path="/casas/:idHouse" element={<HousesDetailPage></HousesDetailPage>}/>
        <Route path="/casas" element={<CasaPage></CasaPage>}/>
        <Route path="/cronologia" element={<CronologiaPage></CronologiaPage>}/>

      </Routes>

      </div>

      </MyContext.Provider>
    </Router>
    </>

  );
}
export default App;