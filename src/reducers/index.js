import { combineReducers } from 'redux';
import select from './select';
import build from './build';
import predict from './predict';
import selectDate from './selectDate';

export default combineReducers({
    selected: select,
    municipis: build,
    prediccions: predict,
    dates: selectDate
});