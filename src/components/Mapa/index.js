import React from 'react'
import './styles.css'


//Component per a mostrar el mapa de la situacio del municipi
//es crida un iframe de google maps amb una query de la latitud i longitud extretes de les metadades
const Mapa = (props) => {
    
    let lat = props.coordenades.latitud;
    let long = props.coordenades.longitud;
    var src = `https://maps.google.com/maps?q=${lat},${long}&t=&z=9&ie=UTF8&iwloc=&output=embed`

    return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe width="100%" 
                    title={lat+long} 
                    height="150" 
                    id="gmap_canvas" 
                    src={src} 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" />
            </div>
        </div>
    )

}
    
export default Mapa