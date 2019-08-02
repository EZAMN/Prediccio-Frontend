import config from '../config'

//es guarden les url del servidor extreta de l'arxiu de config
const apiUrl = JSON.parse(config.Config).serverUrl
const apiMunicipis = apiUrl + '/municipis/metadades';
const apiPrediccio = apiUrl + '/municipis/';

//Crida al server, guarda els municipis a l'state per a que es renderitzi tot altre cop
export const getMunicipis = () => {
    return fetch(apiMunicipis)
        .then(response => response.json());
} 

//Crida al server, guarda els municipis a l'state per a que es renderitzi tot altre cop
export const getPrediccio = (codiMunicipi) => {

    const url = apiPrediccio + codiMunicipi

    return fetch(url)
      .then(response => response.json())

} 