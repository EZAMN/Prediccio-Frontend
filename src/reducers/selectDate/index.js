import { SELECT_DATE, PREDICT_MUNICIPI_SUCCESS, UNSELECT_MUNICIPI } from '../../actions/types';

const selectDate = (state = {}, action) => {

    switch(action.type){

        case SELECT_DATE:
            return {...state, [action.payload.codi]: action.payload};

        case PREDICT_MUNICIPI_SUCCESS:
            return {...state, [action.payload.codi]: action.payload.prediccions.dies[0]};

        case UNSELECT_MUNICIPI:
            const { [action.payload]:id, ...newState} = state;
            return newState;

        default:
            return state;

    }

}

export default selectDate;