 import React from 'react';
import { useParams } from 'react-router-dom';
import fakData from '../../fakeData/products.json';
import Product from '../Product/Product';
 
 const Productditals = () => {
    const {key}=useParams()
    const poduct=fakData.find(pd=>pd.id===key);
    console.log(poduct);
    return (
        <div>
            <Product show={false} products={poduct}></Product>
        </div>
    );
 };
 
 export default Productditals;