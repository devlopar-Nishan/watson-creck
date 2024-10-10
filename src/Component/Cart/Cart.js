import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
const carts =props.cart;
// console.log(carts)
// const [prevs,currSet]=useState(0);
// const newcart=prevs+carts.price;
// currSet(newcart)

const total =carts.reduce((previousCart,currentCart)=> previousCart+currentCart.price *currentCart.quantity ,0)
 
let tax=(total*(4/100)).toFixed(2);
// let subting=props.cart.name; 
// function namesubting(nam,maxlength){
//     if(nam.length>maxlength){
//         subting.substring(0,maxlength)

//     }
// }



    return (
        <div className='cart'>
           <p className="text-secondary">order summary:{props.cart.length}</p>
           {/* <p><small>product name:{props.cart.map(sk=><li>{sk.name.substring(0,5)+"......"} key={sk.id}</li>)}</small></p> */}
           <p>price:{total}</p>
           <p>tax:{tax}</p>
           <p>total:{total}</p>
          
          {
            props.children
          }
           
        </div>
    );
};

export default Cart;