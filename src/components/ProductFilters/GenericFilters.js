import React, {Fragment, useState, useCallback} from 'react';
import FilterList from './FilterList';

export default function GenericFilters({displayName, filters}) {

    const [isOpen, setIsOpen] = useState(false); //TODO extract to common
    const handleOpenFilters = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <Fragment>
            <button onClick={handleOpenFilters} className='filter-button'>{displayName}</button>
            {isOpen && <FilterList filterGroup={displayName} filters={filters} />}
        </Fragment>
    );
}