import {GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS} from '../actions/actionTypes';
const initialState = {
    loading: false,
    products: [],
    filterGroups: [],
    locale: '',
    error: null
};

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS: {
            return {...state, loading: true};
        }
        case GET_PRODUCTS_FAILURE: {
            return {...state, loading: false, error: action.payload};
        }
        case GET_PRODUCTS_SUCCESS: {
            let {products, filterGroups, locale} = action.payload;
            return {...state, loading: false, products, filterGroups, locale};
        }
        default: {
            return state;
        }
    }
}