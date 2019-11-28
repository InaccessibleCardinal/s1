import React, {Fragment, useState, useCallback} from 'react';
import FilterList from './FilterList';

export default function CompatibilityFilters({filter}) {
    
    const [isOpen, setIsOpen] = useState(false); //TODO extract to common
    const {display_name, subfilters} = filter;
    const handleOpenFilters = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const subfilterMarkup = subfilters.map((f, i) => {
        const {display_name: sfName, filters} = f;
        return (
            <div key={i}>
                <h4>For {sfName}:</h4>
                <FilterList filters={filters} filterGroup={`Compatibility@${sfName}`} />
            </div>
        );
    });
    return (
        <Fragment>
            <button onClick={handleOpenFilters} className='filter-button'>{display_name}</button>
            {isOpen && subfilterMarkup}
        </Fragment>
    );
}