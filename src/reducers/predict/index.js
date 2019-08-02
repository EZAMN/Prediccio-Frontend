const predict = (state = [], action) => {
    switch(action.type){
        case 'PREDICT_MUNICIPI':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default predict;