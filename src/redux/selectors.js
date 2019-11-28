import {createSelector} from 'reselect';

export function appliedFiltersSelector(state) {
    return state.appliedFilters;
}

export function filterGroupsSelector(state) {
    return state.productsState.filterGroups;
}

export function productsSelector(state) {
    return state.productsState.products;
}

export const mySelector = createSelector(
    productsSelector,
    products => products.filter(isProductInActiveFilters)
);

function isProductInActiveFilters(product) {
    let v = false;
    [/*'Pixel 4', 'Pixel 4 XL'*/ 'Pixel 2'].forEach(value => {
        if (product.compatibility[value]) {
            v = true;
        }
    });
    return v;
}
