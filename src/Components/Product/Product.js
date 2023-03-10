import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    return (
        <div>
            <h1> {props.product.name}</h1>

        </div>
    );
};

export default Product;