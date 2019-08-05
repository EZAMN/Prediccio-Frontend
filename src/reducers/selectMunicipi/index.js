import { SELECT_MUNICIPI, UNSELECT_MUNICIPI } from '../../actions/types';

const select = (state = [], action) => {
    switch(action.type){
        case SELECT_MUNICIPI:
            if(state.length <= 1)
                return [...state, action.payload];
            else    
                return state;
        case UNSELECT_MUNICIPI:
            const newState = state.filter((municipi)=>{ return municipi.codi !== action.payload})
            return [...newState];
        default:
            return state;
    }
}

export default select;