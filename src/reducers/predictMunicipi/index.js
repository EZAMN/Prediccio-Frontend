import { PREDICT_MUNICIPI } from '../../actions/types';

const predict = (state = {}, action) => {
    switch(action.type){
        case PREDICT_MUNICIPI:
            return {...state, [action.payload.codi]: action.payload};
        default:
            return state;
    }
}

export default predict;