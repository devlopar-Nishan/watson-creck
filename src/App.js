import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Newshop from './Component/Newshop/Newshop';
import Contries from './Component/UltraContries/Contries';
import Boostrap from './Component/boostrap1/Boostrap';
 import { BrowserRouter, Link, Navigate, Outlet, redirect, Route, Routes, useLocation } from 'react-router-dom';
import Revue from './Component/Revue/Revue';
 
 import Productditals from './Component/LINK/Productditals';


import { Children, createContext, useState } from 'react';
import Newloginm from './LoginAccount/Newlogin';
import Redireact from './Component/Redireact/Redireact';
import Sipmant from './Shipment/Sipmant';
import ProtectedTow from './Component/Anotherprotocted/ProtectedTow';
  
export const userContex=createContext();
 
 
 

function App() {
 
const [ pagestat,satpage]=useState(0);
 
 const carrentpage=(respons)=>{
  satpage(respons);








 }
const [loginUser,satLoginuser]=useState({});
 
  return (
    <userContex.Provider value={[loginUser,satLoginuser]}>
      <p>email{loginUser.email}</p>
       
       {/* <Outlet></Outlet> */}
           
       <Header carrentpage={carrentpage} ></Header>

       <BrowserRouter>

       
        
                <Routes>
                 
                <Route path='/' element={<Newshop/>}/>
                <Route path='/Shop' element={<Newshop />}/>
                <Route path='/Revue' element={<Revue carrentpage={carrentpage} />}/>
                
                {/* <Route path='/cart' element={<Cart cart={cart}/>}/> */}
                
                <Route path='/:key' element={<Productditals/>}/>
                 
                {/* <Route path='/Login' element={<Login/>}/> */}
                {/* <Route path='/Login' element={<Newloginm/>}/> */}
                 
                  
                <Route path='/login'  element={<Newloginm pagestat={pagestat} />}/>

                


                  <Route path='/redj' element={<Redireact/>}/>

                  
                <Route element={<Redireact/>}>
                  <Route path='/sipmant' element={<Sipmant />}/>
                  <Route path='/cart' element={<Contries    />}/>
                 
                 </Route>

                       {/* <Route element={<ProtectedTow/>}>
                     
                 </Route> */}

                   
                 
                 
                 
                    
                
                

                  
                </Routes>
                
                
             </BrowserRouter>

           
 
     
         
         
         
       

      
        
      
      
      
      
         


           

 
       
      
      {/* <Contries></Contries>
      <Boostrap></Boostrap>
   */}
 
 
      




    
      
       
    </userContex.Provider>
  );
}

export default App;
