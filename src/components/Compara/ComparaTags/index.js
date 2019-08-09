import React from 'react'
import literals from '../../config/literals' //Carrega la llista de literals per seprar-ho tot el text i donar opcio a traduccions


//Component per a mostrar les etiquetes de la comparacio
const ComparaTags = () => (
  <ul className="col-sm tags">
    <li></li>
    <li>{literals.comarca}</li>
    <li>{literals.estat}</li>
    <li>{literals.tempMax}</li>
    <li>{literals.tempMin}</li>
    <li>{literals.precipitacio}</li>
  </ul>
);

export default ComparaTags
