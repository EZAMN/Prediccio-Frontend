import { getMunicipis, getPrediccio } from '../api';
import { toast } from 'react-toastify';
import { SELECT_MUNICIPI, UNSELECT_MUNICIPI, SELECT_DATE,
    PREDICT_MUNICIPI_REQUEST, PREDICT_MUNICIPI_SUCCESS, PREDICT_MUNICIPI_FAIL,
    BUILD_MUNICIPIS_REQUEST, BUILD_MUNICIPIS_SUCCESS, BUILD_MUNICIPIS_FAIL} from './types';


/* Sync Actions */

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

export const selectDate = (date) => {
    return {
        type: SELECT_DATE,
        payload: date
    };
};

/* Async Actions */

const catchToast = (error) => {toast.error(`Error ${error}`)};

export const buildMunicipis = () => { return async (dispatch) => {

    dispatch({
        type: BUILD_MUNICIPIS_REQUEST
    });
    
    const promise = await getMunicipis().catch(catchToast); 
    
    if(typeof promise !== 'undefined' && promise.status === 200){
        dispatch({
            type: BUILD_MUNICIPIS_SUCCESS,
            payload: promise.response
        });
    }else{
        dispatch({
            type: BUILD_MUNICIPIS_FAIL
        });
        if(typeof promise === 'undefined') catchToast(`400: Cannot reach server`);
        else catchToast(`${promise.status}: ${promise.response.error}`);
    }

};};

export const predict = (codiMunicipi) => { return async (dispatch) => {

    dispatch({
        type: PREDICT_MUNICIPI_REQUEST
    });

    const  promise = await getPrediccio(codiMunicipi).catch(catchToast); 

    if(typeof promise !== 'undefined' && promise.status === 200){
        dispatch({
            type: PREDICT_MUNICIPI_SUCCESS,
            payload: promise.response
        });
    }else{
        dispatch({
            type: PREDICT_MUNICIPI_FAIL
        });
        if(typeof promise === 'undefined') catchToast(`400: Cannot reach server`);
        else catchToast(`${promise.status}: ${promise.response.error}`)
    }

};};

