
import config from '../config'

//es guarden les url del servidor extreta de l'arxiu de config
const apiUrl = JSON.parse(config.Config).serverUrl
const apiMunicipis = apiUrl + '/municipis/metadades';
const apiPrediccio = apiUrl + '/municipis/';

//Crida al server, guarda els municipis a l'state per a que es renderitzi tot altre cop
export const getMunicipis = () => {
    return fetchAPI(apiMunicipis)
} 

//Crida al server, guarda els municipis a l'state per a que es renderitzi tot altre cop
export const getPrediccio = (codiMunicipi) => {
    const url = apiPrediccio + codiMunicipi

    return fetchAPI(url)
} 

const fetchAPI = (url) => {
    return fetch(url)
        .then(response =>  response.json()
            .then(data => ({response: data, status: response.status})));
}