import React from 'react';
import ProductImages from './ProductImages';

export default function ProductCard({product}) {
    let {display_name, doc_id, featured, images} = product;
    // console.log('product: ', JSON.stringify(product, null, 2))
    return (
        <div className='product-card'>
            <h2>{display_name}</h2>
            <p>ID: {doc_id}</p>
            <p>Featured: {featured ? 'Yes' : 'No'}</p>
            <ProductImages images={images} />
        </div>
    );
}