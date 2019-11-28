import React from 'react';

export default function Trapdoor({error}) {
    return (
        <div>
            <p>An error has occurred.</p>
            <p>{error}</p>
        </div>
    );
}