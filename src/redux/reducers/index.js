import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    productsState: productsReducer,
    appliedFilters: filtersReducer
});
