import { BUILD_MUNICIPIS_SUCCESS } from '../../actions/types';

const build = (state = [], action) => {
    switch(action.type){
        case BUILD_MUNICIPIS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export default build;