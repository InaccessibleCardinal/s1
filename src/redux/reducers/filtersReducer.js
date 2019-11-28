import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS} from '../actions/actionTypes';

const initialState = [];

export default function filtersReducer(state = initialState, action) {
    switch(action.type) {
        
        case ADD_FILTER: {
            return state.concat(action.payload);
        }

        case REMOVE_FILTER: {
            let filterToRemove = action.payload;
            return state.filter(f => f !== filterToRemove);
        }
        
        case CLEAR_FILTERS: {
            return [];
        }
        
        default: {
            return state;
        }
        
    }
}