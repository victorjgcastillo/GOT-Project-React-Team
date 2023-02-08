export const en = {
  "title": "GAME OF THRONES",
  "personajes": "CHARACTERS",
  "casas": "HOUSES",
  "cronologia": "CHRONOLOGY",
  "buscar": "Search...",
  "lema": "MOTTO",
  "sede": "SEAT",
  "region": "REGION",
  "alianzas": "ALLEGIANCES",
  "religion": "RELIGION",
  "fundacion": "FUNDATION",
  "casa": "HOUSE",
  "apariciones": "APPEARANCES",
  "padre": "FATHER",
  "descendientes": "SIBLINGS",
  "titulos": "TITLES",
  "volver": "← RETURN"
}


//Cada vez que queramos cambiar una palabra tenemos que declarar una variable y asignarle valor en las dos carpetas (en, es), y poner esto: 
//const {t} = useContext(MyContext) debajo del export de la pagina donde vamos a cambiar el nombre y esto:
//{t("nombreDeLaVariable")} donde queremos que aparezca la palabra