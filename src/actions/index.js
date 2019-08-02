import { getMunicipis, getPrediccio } from '../api';


export const buildMunicipis = () => { return async (dispatch) => {

    const response = await getMunicipis(); 
    //TODO controlar errors

        dispatch({
            type: "BUILD_MUNICIPIS",
            payload: response
        });
    };
};

export const selectMunicipi = (municipi) => {
    return {
        type: "SELECT_MUNICIPI",
        payload: municipi
    };
};

export const unselectMunicipi = (municipi) => {
    return {
        type: "UNSELECT_MUNICIPI",
        payload: municipi
    };
};

export const predict = (codiMunicipi) => { return async (dispatch) => {

    const response = await getPrediccio(codiMunicipi); 
    //TODO controlar errors

        dispatch({
            type: "PREDICT_MUNICIPI",
            payload: response
        });
    };
};

export const selectDate = (date) => {
    return {
        type: "SELECT_DATE",
        payload: date
    };
};