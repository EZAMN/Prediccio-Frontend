import { PREDICT_MUNICIPI_SUCCESS, SELECT_MUNICIPI } from '../../actions/types';

const predict = (state = {}, action) => {
    switch(action.type){
        case SELECT_MUNICIPI:
        case PREDICT_MUNICIPI_SUCCESS:
            return {...state, [action.payload.codi]: action.payload};
        default:
            return state;
    }
}

export default predict;