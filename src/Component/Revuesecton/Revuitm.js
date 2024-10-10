import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';
 


const Revuitm = (props) => {
   
   const  itmkom=props.products;
    
 let style={
    height:"80px",
    width:"80px"
     
 }
 const style3={
    border:"1px solid red",
    padding:"5px"
    
 }
     return (
         <div className="main">
            <div style={style3} >
             
             <div>
               <img  style={style} src={props.products.img} alt="" />
               <p>{props.products.quantity}</p>
               <br />
               <button  onClick={()=>props.hendledelet(props.products.id)} className='main-button'>Remove</button>
             </div>
                
               
           </div>
           
         </div>
    )
};

export default Revuitm;