import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import ProductCard from './ProductCard';
import PaginationButtons from './PaginationButtons';
import {/*productsSelector, */filteredProductsSelector} from '../redux/selectors';


export default function ProductsList() {

    const products = useSelector(filteredProductsSelector);
    const [productsPerPage/*, setProductsPerPage*/] = useState(10);
    const [numberOfProducts, setNumberOfProducts] = useState(0);
    const [offset, setOffset] = useState(0);
    const [currentProducts, setCurrentProducts] = useState([]);
    useEffect(() => {
        setCurrentProducts(products.slice(offset, offset + productsPerPage));
        setNumberOfProducts(products.length);
    }, [offset, products, productsPerPage]);

    const jumpToOffset = useCallback((e) => {
        let {id} = e.target;
        if (id === 'NEXT') {
            setOffset(offset + productsPerPage);
        } else if (id === 'PREV') {
            setOffset(offset - productsPerPage);
        } else {
            let buttonNumber = parseInt(id.replace('page-button_', ''), 10);
            if (Math.ceil(offset / productsPerPage) !== buttonNumber) {
                setOffset(productsPerPage * buttonNumber);
            }
        }
    }, [offset, productsPerPage]);

    if (currentProducts.length > 0) {
        const productsMarkup = currentProducts.map(product => <ProductCard key={product._id} product={product} />);

        return (
            <div>
            <button id='PREV' disabled={offset < 10} onClick={jumpToOffset}>Prev</button>
            <button id='NEXT' disabled={offset > numberOfProducts - 10} onClick={jumpToOffset}>Next</button>
            <PaginationButtons 
                numberOfProducts={numberOfProducts} 
                offset={offset} 
                jumpToOffset={jumpToOffset} 
            />
                {productsMarkup}
            </div>
        );
    }
    return (
        <div>
            <p>No products for the selected filter criteria. Try broadening your query.</p>
        </div>
    );
}

