import { combineReducers } from 'redux';
import selectMunicipi from './selectMunicipi';
import buildMunicipis from './buildMunicipis';
import predictMunicipi from './predictMunicipi';
import selectDate from './selectDate';

export default combineReducers({
    selected: selectMunicipi,
    municipis: buildMunicipis,
    prediccions: predictMunicipi,
    dates: selectDate
});