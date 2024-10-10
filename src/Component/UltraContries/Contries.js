import React, { useState, useEffect } from 'react';
import './Contries.css';
import Contricard from '../ContriCard/Contricard';



 

const Contries = (props) => {
    const[contries, setcontries]=useState([]);
    const [tim,sattim]=useState([]);
    const [imgs,satimg]=useState([]);
    
    

    console.log(imgs)

   
 
   
useEffect(()=>{

    fetch('https://api.github.com/users')
    .then(res=>res.json())
    .then(data=>setcontries(data))

},[])

const addmamver=(mambr,memimg)=>{
    const newtim=[...tim,mambr]
    const memimgs=[...imgs,memimg]
    sattim(newtim);
    satimg(memimgs);
 
}
 
   
  const kom=contries.slice(11,20);
 
    return (
        <div>
            
        <Contricard  memimges={imgs} timMan={tim} addmambers={addmamver}   allconty={kom} ></Contricard>
 
            
               
              
        
                
          
            
        </div>
    );
};

export default Contries;