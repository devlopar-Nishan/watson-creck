import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import'./Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
   const key=props.products.id;
    
    
    return (
        <div className='product'>
            <div className="product-img">
                <img src={props.products.img} alt="" />
            </div>
            <div className="product-name">
            <h2><Link to={"/"+key}> {props.products.name}  </Link> </h2><br />
            <p><small>by:{props.products.seller}</small></p>
            <p>${props.products.price}</p>
            <p><small>only {props.products.stock} left stock-order</small></p>



              
            { props.show&&<button className='product-btn' onClick={()=>props.handleEvent(props.products)}> <FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>}


            

                
          
                
                
            </div>
         
             
        </div>
    );
};

export default Product;