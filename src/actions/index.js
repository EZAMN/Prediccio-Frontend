import { getMunicipis, getPrediccio } from '../api';
import { toast } from 'react-toastify';
import { BUILD_MUNICIPIS, SELECT_MUNICIPI, UNSELECT_MUNICIPI, PREDICT_MUNICIPI, SELECT_DATE } from './types';


const catchToast = (error) => {toast.error(`Error ${error}`)};

export const buildMunicipis = () => { return async (dispatch) => {

    const {response, status} = await getMunicipis().catch(catchToast); 

    if(status === 200){
        dispatch({
            type: BUILD_MUNICIPIS,
            payload: response
        });
    }else{
        catchToast(`${status}: ${response.error}`)
    }

};};

export const selectMunicipi = (municipi) => {
    return {
        type: SELECT_MUNICIPI,
        payload: municipi
    };
};

export const unselectMunicipi = (municipi) => {
    return {
        type: UNSELECT_MUNICIPI,
        payload: municipi
    };
};

export const predict = (codiMunicipi) => { return async (dispatch) => {

    const  {response, status} = await getPrediccio(codiMunicipi).catch(catchToast); 

    if(status === 200){
        dispatch({
            type: PREDICT_MUNICIPI,
            payload: response
        });
    }else{
        catchToast(`${status}: ${response.error}`)
    }

};};

export const selectDate = (date) => {
    return {
        type: SELECT_DATE,
        payload: date
    };
};