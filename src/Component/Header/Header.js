import React, { useContext } from 'react';
import logo from '../../images/favicon.ico'

import'./Header.css';
import { Link, useLocation } from 'react-router-dom';
import { userContex } from '../../App';


const Header = (props) => {
    
    const [loginUser,satLoginuser]=useContext(userContex);
  
 
    
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>

            
          <a className='shop'   href="/Shop">Shop</a>
            <a href="/Revue">Order Revue</a>
            <a href="Inventory"> Manage Inventory</a>
            <a href="/cart" onClick={()=>props.carrentpage(55)}   >cart</a>  
            <button onClick={()=>satLoginuser({})}>sign out</button>
              
            </nav>  
        </div>
    );
};

export default Header;
