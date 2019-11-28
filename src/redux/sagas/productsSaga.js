import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import {/*GET_PRODUCTS,*/ GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS} from '../actions/actionTypes';
import uuidv4 from 'uuid';
import mapErrorToMessage from '../../utils/mapErrorToMessage';

const LOCAL_SVC = {
    products: 'http://localhost:3001/products'
};

export default function* productsSaga() {
    try {
        const r = yield call(getProducts);
        yield put({type: GET_PRODUCTS_SUCCESS, payload: makeProductsStateSlices(r.data)});
    } catch(e) {
        yield put({type: GET_PRODUCTS_FAILURE, payload: mapErrorToMessage(e)});
    }
}

export function getProducts() {
    return axios.get(LOCAL_SVC.products);
}

export function makeProductsStateSlices(data) {
    let {products, filter_groups: filterGroups, locale} = data;
    
    return {
        products: uniqueIds(products),
        filterGroups, 
        locale
    };
}

export function uniqueIds(products) {
    products.forEach(p => {
        let id = uuidv4();
        let {compatibility, colors, brands} = makeFilterMatchesMap(p.filter_matches);
        p.compatibility = compatibility;
        p.colors = colors;
        p.brands = brands; 
        p._id = id; 
        p.images = p.images.map((image, i) => {
            image._id = `${i}_${id}`;
            return image;
        });
    });
    return products;
}

export function makeFilterMatchesMap(fm) {
    return fm.reduce((acc, currentFilterMatch) => {
        if (currentFilterMatch.filter_category === 'Product Type') {
            acc.productType = currentFilterMatch.filter_value;
        } else if (currentFilterMatch.filter_category === 'Compatibility') {
            acc.compatibility[currentFilterMatch.filter_value] = true;
        } else if (currentFilterMatch.filter_category === 'Colors') {
            acc.colors[currentFilterMatch.filter_value] = true;
        } else if (currentFilterMatch.filter_category === 'Brands') {
            acc.brands[currentFilterMatch.filter_value] = true;
        }
        return acc;
    }, {compatibility: {}, colors: {}, brands: {}});
}