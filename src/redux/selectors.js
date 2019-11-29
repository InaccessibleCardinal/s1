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

export const filteredProductsSelector = createSelector([productsSelector, appliedFiltersSelector], combineProductsAndFilters);

function combineProductsAndFilters(products, filters) {
    if (filters.length === 0) {
        return products;
    } else {
        return products.filter(p => {
            return isProductInActiveFilters(p, filters);
        });
    }
}

function isProductInActiveFilters(product, filters) {
    let isIn = true;
    filters.forEach(f => {
        if (f.indexOf('@') === 0) {
            if (!product.compatibility[f.split(':')[2]]) {
                isIn = false;
            }
        } else { //TODO--productType is broken, no data for it...
            if (!product[f.split(':')[0].toLowerCase()][f.split(':')[1]]) {
                isIn = false;
            }
        }
    });
    return isIn;
}
