import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./HousesDetailPage.scss";
import { MyContext } from "../../context/MyContext";
import HomeReturn from "../../components/HomeReturn/HomeReturn";
import Flags from "../../components/Flags/Flags";

const HousesDetailPage = () => {
  const { t } = useContext(MyContext);

  const { idHouse } = useParams();

  const [house, setHouse] = useState([]);
  const [escudo, setEscudo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api.got.show/api/show/houses/${idHouse}`
      );
      const data2 = await axios.get(
        `https://api.got.show/api/book/houses/${idHouse}`
      );

      setHouse(data[0]);
      console.log(data[0]);
      setEscudo(data2.data[0]);
      console.log(data2.data[0]);
    };
    getData();
  }, []);

  return (
    <>
      <div className="navDetailshield">
        <Link className="navDetailshield__return" to="/casas">{t('volver')}</Link>

        <div className="navDetailshield__navbar">
          <HomeReturn className="navDetailshield__home"></HomeReturn>
          <Flags className="navDetailshield__languaje"></Flags>
        </div>
      </div>

      <div className="galleryDetailshield">
        <div className="galleryDetailshield_card">
          <img className="pictureshield" src={escudo.image}alt={escudo && escudo.name}></img>
          <h1 className="galleryshield_text">{escudo.name}</h1>
        </div>
       

         <div className="galleryshield_container"> {/* TODO MENOS IMAGEN Y NOMBRE */}

          <div className="galleryshield_container--box">
            <h2>{t("lema")}</h2>
            <div className="galleryshield_box--text">{house.words}</div>
          </div>

            <div className="galleryshield_container--box">
              <h2 className="">{t("sede")}</h2>
              <p className="galleryshield_box--text">{house && house.seat}</p>
            </div>

            <div className="galleryshield_container--box">
              <h2 className="">{t("region")}</h2>
              <ul>
                {house.region &&
                  house.region.map((region, index) => (
                    <li className=" galleryshield_box--text" key={index}>
                      {region}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="galleryshield_container--box">
              <h2 className="">{t("alianzas")}</h2>
              <ul>
                {house.allegiance &&
                  house.allegiance.map((allegiance, index) => (
                    <li className=" galleryshield_box--text " key={index}>
                      {allegiance}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="galleryshield_container--box">
              <h2 className="">{t("religion")}</h2>
              <ul>
                {house.religion && house.religion.map((religion, index) => (
                    <li className="galleryshield_box--text" key={index}>{religion}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="galleryshield_container--box">
              <h2>{t("fundacion")}</h2>
              <div className="galleryshield_box--text">
                <p className="text-p">{house.createdAt && house.createdAt.substring(0, 10)}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default HousesDetailPage;
