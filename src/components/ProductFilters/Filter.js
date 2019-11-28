import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addFilter, removeFilter} from '../../redux/actions/filterActions';
import {appliedFiltersSelector} from '../../redux/selectors';

function isFilterApplied(value, filterList) {
    if (filterList.length === 0) {
        return false;
    }
    return filterList.includes(value);
}

export default function Filter({filter, filterGroup}) {

    const {filter_display_value, filter_value} = filter;
    const appliedFilters = useSelector(appliedFiltersSelector);
    const dispatch = useDispatch();
    const isApplied = isFilterApplied(`${filterGroup}:${filter_value}`, appliedFilters);

    const handleToggleFilter = useCallback((e) => {
        const {checked} = e.target;
        if (checked) {
            dispatch(addFilter(`${filterGroup}:${filter_value}`));
        } else {
            dispatch(removeFilter(`${filterGroup}:${filter_value}`));
        }
    }, [dispatch, filter_value, filterGroup]);

    return (
        <div className='checkbox-container'>
            <span className='checkbox-label'>{filter_display_value}</span>
            <input 
                className='checkbox' 
                type='checkbox' 
                value={filter_value} 
                onChange={handleToggleFilter}
                checked={isApplied}
            />
        </div>
    );
}