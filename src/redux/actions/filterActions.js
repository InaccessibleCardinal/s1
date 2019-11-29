import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from "./actionTypes";

export function addFilter(value) {
    return {type: ADD_FILTER, payload: value};
}

export function removeFilter(value) {
    return {type: REMOVE_FILTER, payload: value};
}

export function clearFilters() {
    return {type: CLEAR_FILTERS};
}