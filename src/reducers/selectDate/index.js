const selectDate = (state = [], action) => {

    switch(action.type){

        case 'SELECT_DATE':

            const filteredState = state.filter((prediccio)=>{ return prediccio.codi !== action.payload.codi });
            return [...filteredState, action.payload];

        case 'PREDICT_MUNICIPI':

            const newDate = {
                codi: action.payload.codi,
                ...action.payload.prediccions.dies[0]
            }
            return [...state, newDate];

        default:
            return state;

    }

}

export default selectDate;