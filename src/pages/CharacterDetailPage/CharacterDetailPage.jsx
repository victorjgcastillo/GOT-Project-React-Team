import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Flags from '../../components/Flags/Flags'
import HomeReturn from '../../components/HomeReturn/HomeReturn'
import './CharacterDetailPage.scss'
import { MyContext } from '../../context/MyContext';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const CharacterDetailPage = () => {

  const {t} = useContext(MyContext)

  const {idCharacter} = useParams();

  const[character, setCharacter] = useState([]);
  const {appearances, titles, siblings, allegiances,} = character
  const [escudo, setEscudo] = useState([])
  
  useEffect(() => {
    const getData = async () => {

      const {data} = await axios.get(`https://api.got.show/api/show/characters/${idCharacter}`)
      const data2 = await axios.get(`https://api.got.show/api/book/houses/${data.house}`);

      setCharacter(data);
      console.log(data);
      setEscudo(data2.data[0])
      console.log(data2.data[0])
    }
    getData();
  }, [])



  return (
      <>
      <div className='navDetail'>
        <Link className='navDetail__return' to="/personajes">{t('volver')}</Link>
        
        <div className='navDetail__navbar'>
            <HomeReturn className='navDetail__home'></HomeReturn>
            <Flags className='navDetail__languaje'></Flags>
        </div>
      </div>

      <div className= "galleryDetail">
            <div className='galleryDetail_card'>
                  <img className='pictureDetail' src={character.image} alt={character.name}></img>
            </div>             
            <h1 className='gallery_text'>{character.name}</h1>


            <div className='gallery_container'>
                    <div className='gallery_container--box'>
                        <div className='gallery_container--box_detail'>
                          <h2 className='h2detail'>{t('casa')}</h2>
                          <img className='gallery_container--box_detail--imghouse' src={escudo.image} alt='klk'></img>
                        </div>
                    </div>

                    <div className='gallery_container--box'>
                      <div className='gallery_container--box_detail'>
                          <h2 className='h2detail'>{t('alianzas')}</h2>
                            <ul className='gallery_box--text'>                          
                                    {allegiances && allegiances.map((allegiance, index) => 
                                    <li className='gallery_box--text' key={index}>{allegiance}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className='gallery_container--box'>
                        <div className='gallery_container--box_detail'>
                          <h2 className='h2detail'>{t('apariciones')}</h2>
                          <SimpleBar   style={{ maxHeight: 200, maxWidth: 300, textAlign:'center'}}>
                              {appearances && appearances.map((apariencia, index) => <div className='gallery_box--text' key={index}>{apariencia}</div>
                              )}
                              </SimpleBar> 
                        </div>
                    </div>

                    <div className='gallery_container--box'>
                       <div className='gallery_container--box_detail'>
                          <h2 className='h2detail'>{t('padre')}</h2>
                          
                             <div className='gallery_box--text'>{character.father}</div>
                         
                        </div>
                    </div>

                    <div className='gallery_container--box'>
                       <div className='gallery_container--box_detail'>
                          <h2 className='h2detail'>{t('descendientes')}</h2>
                          <ul className=''>
                            {siblings && siblings.map((sibling, index) => <li className='gallery_box--text' key={index}>{sibling}</li>)}
                          </ul>
                        </div>  
                    </div>

                    <div className='gallery_container--box'>
                      <div className='gallery_container--box_detail'>
                          <h2 className='h2detail'>{t('titulos')}</h2>
                         
          
        
                          
                          <SimpleBar   style={{ maxHeight: 200,maxWidth: 300 }}>
                              {titles && titles.map ((title, index) =>
                                <div className='gallery_box--text' key={index}> {title} </div>
                                )}
                          </SimpleBar> 
                      </div>
                   </div>
              </div>
         </div> 
         
      
        
      </>
  )
}
export default CharacterDetailPage 