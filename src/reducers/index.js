import { combineReducers } from 'redux';
import select from './selectMunicipi';
import build from './buildMunicipis';
import predict from './predictMunicipi';
import selectDate from './selectDate';

export default combineReducers({
    selected: select,
    municipis: build,
    prediccions: predict,
    dates: selectDate
});