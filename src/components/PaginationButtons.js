import React from 'react';

export default function PaginationButtons({numberOfProducts, offset, jumpToOffset}) {
    let buttonsMarkup = [];
    for (let i = 0; i < Math.ceil(numberOfProducts / 10); ++i) {
        let selected = Math.ceil(offset / 10) === i;
        buttonsMarkup.push(
            <PaginationButton 
                key={i} 
                id={`page-button_${i}`}
                value={i + 1} 
                selected={selected}
                jumpToOffset={jumpToOffset} 
            />
        );
    }
    return (
        <div>{buttonsMarkup}</div>
    );
}

export function PaginationButton({value, selected, jumpToOffset, id}) {
    return (
        <button id={id} onClick={jumpToOffset} style={{backgroundColor: selected ? '#fff' : '#d7d7d7'}}>
            {value}
        </button>
    );
}