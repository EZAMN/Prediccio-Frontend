import {PREDICT_MUNICIPI_REQUEST, PREDICT_MUNICIPI_SUCCESS, PREDICT_MUNICIPI_FAIL,
    BUILD_MUNICIPIS_REQUEST, BUILD_MUNICIPIS_SUCCESS, BUILD_MUNICIPIS_FAIL} from '../../actions/types';
    
export default (state = false, action) => {
    switch (action.type) {

        case PREDICT_MUNICIPI_REQUEST:
        case BUILD_MUNICIPIS_REQUEST:
            return true;

        case BUILD_MUNICIPIS_SUCCESS:
        case PREDICT_MUNICIPI_SUCCESS:
        case BUILD_MUNICIPIS_FAIL:
        case PREDICT_MUNICIPI_FAIL:
            return false;

        default:
            return state;

    };
};
  