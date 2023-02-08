import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./CronologiaPage.scss";
import HomeReturn from '../../components/HomeReturn/HomeReturn';
import Flags from '../../components/Flags/Flags';
import Navbar from '../../components/Navbar/Navbar';

export const CronologiaPage = () => {

const [timeline, setTimeline] = useState([]);
const charactersLine =[]
const [ascOrder, setAscOrder]= useState(true)


useEffect(() => {
  const getData = async () => {
    const {data} = await axios.get("https://api.got.show/api/show/characters/");
    console.log(data);
    setTimeline(data);
  };
  getData();
}, []);

for (const character of timeline) {
  if (character.age){
    if (character.age.age){
charactersLine.push(character)
    }
  }
}
const ageOrder = () => {
  if (ascOrder) {
    charactersLine.sort((a, b) => a.age.age - b.age.age);
  } else {
    charactersLine.sort((a, b) => b.age.age - a.age.age);
  }
}
  const changeOrder=()=>{
        if(ascOrder){
          setAscOrder(false)
          ageOrder()
        }else{
          setAscOrder(true)
          ageOrder()
        }
      }
      ageOrder()

      return (
    <>
      
      <div className='cronologia'>
        <HomeReturn></HomeReturn>
        <Flags></Flags>
      </div>
        <div className='cronologyandbtn'>
        <button className='box-cronology--btn' onClick={changeOrder}>{ascOrder ? <span>↓</span> : <span>↑</span>}</button>
        <div className='box-cronology'>
            {charactersLine.map((element,index) => {
              return (
                  <>
                      <div className="box-cronology--card" key={index} style={index % 2 ?
                  { "margin-top": "150px", "margin-left": "-1.5px","padding-top":"200px", "height" : "150px", "border-left": "1px solid white" } :
                  { "margin-top": "0px", "border-right": "1px solid white" }}>
                        <h3 className='box-cronology--card__age'>{element.age.age}</h3>
                        <h2 className="box-cronology--card__name">{element.name}</h2>
                        <img className="box-cronology--card__img" src={element.image} alt=""/>
                      </div>
                  </>
                )
            })}
        </div>
        </div> 
        <Navbar></Navbar>
           
    </>
  )
}
