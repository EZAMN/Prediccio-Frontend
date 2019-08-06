import { PREDICT_MUNICIPI, SELECT_MUNICIPI } from '../../actions/types';

const predict = (state = {}, action) => {
    switch(action.type){
        case SELECT_MUNICIPI:
        case PREDICT_MUNICIPI:
            return {...state, [action.payload.codi]: action.payload};
        default:
            return state;
    }
}

export default predict;