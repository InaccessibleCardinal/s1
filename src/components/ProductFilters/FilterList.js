import React from 'react';
// import PropTypes from 'prop-types';
import Filter from './Filter';

export default function FilterList({filters, filterGroup}) {
    const listMarkup = filters.map((f, i) => {
        return (
            <Filter 
                key={`subFilter_${i}`} 
                filter={f} 
                filterGroup={filterGroup} 
            />
        );
    });
    return (
        <div style={{borderBottom: '1px solid', padding: 5, display: 'flex'}}>
            {listMarkup}
        </div>
    );
}

// FilterList.propTypes = {
//     filters: PropTypes.arrayOf(
//         PropTypes.shape()
//     )
// };