import React from 'react';

export default function LoadingIndicator({active}) {
    if (active) {
        return (
            <div className='loading-indicator' />
        );
    }
    return null;
}