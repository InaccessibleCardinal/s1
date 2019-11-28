import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CompatibilityFilters from './CompatibilityFilters';
import GenericFilters from './GenericFilters';
import {clearFilters} from '../../redux/actions/filterActions';
import {filterGroupsSelector} from '../../redux/selectors';

export default function ProductFilters() {

    const filterGroups = useSelector(filterGroupsSelector);
    const dispatch = useDispatch();
    const handleClearFilters = useCallback(() => dispatch(clearFilters()), [dispatch]);

    if (filterGroups.length > 0) {
        const filterGroupsMarkup = filterGroups.map((f, i) => {
            let {display_name, filters} = f;
            if (display_name === 'Compatibility') {
                return <CompatibilityFilters key={i} filter={f} />;
            } else {
                return (
                    <GenericFilters 
                        key={i} 
                        displayName={display_name} 
                        filters={filters} 
                    />
                );
            }
        });
        return (
            <div>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 4}}><span>Filters</span></div>
                    <div style={{flex: 1}}>
                        <button style={{width: '100%'}} onClick={handleClearFilters}>Clear Filters</button>
                    </div>
                </div>
                {filterGroupsMarkup}
            </div>
        );
    }
    return null;
}
