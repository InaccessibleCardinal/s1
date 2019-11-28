import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import LoadingIndicator from './components/LoadingIndicator';
import ProductFilters from './components/ProductFilters/';
import Trapdoor from './components/Trapdoor';
import {GET_PRODUCTS} from './redux/actions/actionTypes';

function loadingProductsSelector(state) {
    return state.productsState.loading;
}

function productsErrorSelector(state) {
    return state.productsState.error;
}

export default function App() {

    const loadingProducts = useSelector(loadingProductsSelector);
    const errorLoadingProducts = useSelector(productsErrorSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: GET_PRODUCTS});
    }, [dispatch]);

    return (
        <div>
            <LoadingIndicator active={loadingProducts} />
            <Header title={'E-Store'} />
            <ProductFilters />
            <ProductsList />
            {errorLoadingProducts && <Trapdoor error={errorLoadingProducts} />}
        </div>
    );
}
