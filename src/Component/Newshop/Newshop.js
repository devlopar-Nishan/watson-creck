import React, { useEffect, useState } from 'react';
import fakData from'../../fakeData/products.json';
import './Newshop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { Link } from "react-router-dom";
 
 


const Newshop = (props) => {
    const fakdata=fakData.slice(0,10);
    const [fak,stefak]=useState(fakdata);
    const [cart,setcart]=useState([]);
    let count=1;
    let newcart;
   

 console.log(fakData)

    useEffect(()=>{
         const getdatabs=getShoppingCart();
          
         const productkeys=Object.keys(getdatabs);
         console.log(productkeys)
         const productcart=productkeys.map(existingkey=>{
          
            const getproduct=fakData.find(pd=>pd.id===existingkey)
            console.log(getproduct)
            getproduct.quantity=getdatabs[existingkey];
            return getproduct;
         })
        setcart(productcart);
    },[])
    

    const handleEvent=(production)=>{
     const sameproduct=cart.find(pd=>pd.id===production.id)
     console.log(sameproduct);
     if(sameproduct){
         count=sameproduct.quantity+1;
        sameproduct.quantity=count;
        const other=cart.filter(pd=>pd.id!==production.id)
        newcart=[...other,sameproduct];

     }
     else{
        production.quantity=1;
        newcart=[...cart, production];
     }
        // const newcart=[...cart,production]
        // setcart(newcart);
         
         
        const sem= newcart.filter(pd =>pd.id===production.id  )
          
        // const count=sem.length
        setcart(newcart)
        addToDb(production.id,count)
        console.log(production.id);
       
        
        
       
       
         

          
    }
   
    return (
        <div className='shop-body'>
            <div className="product-shop">
    
                {
                    fak.map(fakitem=><Product 
                    key={fakitem.id}
                    show={true}
                    handleEvent={handleEvent}
                    products={fakitem}>
                        

                    </Product>)
                }
        

            </div>
            <div className="cart-shop">
                <Cart cart={cart}>
                <Link to='/Revue'>
                    <button className="product-btn">Revue</button>
                    </Link>
                </Cart>
               
                
               
            </div>
            
    
             

        </div>
    );
};

export default Newshop;