import { BUILD_MUNICIPIS } from '../../actions/types';

const build = (state = [], action) => {
    switch(action.type){
        case BUILD_MUNICIPIS:
            return action.payload;
        default:
            return state;
    }
}

export default build;