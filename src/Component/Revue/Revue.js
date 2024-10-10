import React, { useContext, useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import fakData from '../../fakeData/products.json'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Revuitm from '../Revuesecton/Revuitm';
import Cart from '../Cart/Cart';
import { unstable_HistoryRouter, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Revue.css';
import fut from '../../images/fut.png';
import godi from '../../images/godi.png';
import { userContex } from '../../App';


 




 
const Revue = (props) => {
    const [datas,setdatas]=useState([]);
    const history=useNavigate();
    const location=useLocation();
    
    const [loginUser,satLoginuser]=useContext(userContex);
    //  const rrr=()=>{
    //     setTimeout(() => {
    //         document.querySelector('.fut').src=godi;
    //         fff();
    //      }, 3000);
    //  }
    //  const fff=()=>{
    //     setTimeout(() => {
    //         document.querySelector('.fut').src={fut};
    //         rrr();
    //     }, 6000);
    //  }
    //  rrr();
     
    const hendleplace=()=>{
        // setdatas([])
        // deleteShoppingCart();
        history('/sipmant' );

        
       
         
    }
 
    const hendelDelete=(productkey)=>{
     const newcat= datas.filter(removitm => removitm.id !== productkey )
     setdatas(newcat);
     deleteShoppingCart(productkey)
     console.log(productkey)
     
      

    }
    
 
     
    useEffect(()=>{
        const  dddd=getShoppingCart();
         
         
        const pdkeys=Object.keys(dddd);
        
    
        const keyvlsu=Object.values(dddd)
        
 
   
        
      
     
        const cartproduct=pdkeys.map((key, indx)=>{
           
            
            const product =fakData.find(pd=>
                pd.id===key
            )
            product.quantity=dddd[key];
            console.log(dddd[key])
           
           
           
           
             
            return product;
             
        
             
            
        } );
        setdatas(cartproduct);
       
         
       
           
       
        
         
       

        
       
    },[])
    

    return (
         <div className="main">
            <h1>this is revue sections</h1>
             <div className="imgbg"><img src={fut} alt="" className='fut'/></div>
            <div>
            
            {
                datas.map(dt=>
                    
                    <Revuitm  hendledelet={hendelDelete} key={dt.id}  products={dt}></Revuitm>
                    
                )
            }
            
        </div>
        <div>
            <Cart cart={datas}>
                <button onClick={hendleplace} onclick={props.carrentpage(66)} className='main-buttn'>place order</button>
            </Cart>
        </div>
         </div>
    );
};

export default Revue;