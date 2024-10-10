import React, { Children, useContext, useEffect } from 'react';
import { Outlet, Navigate, useNavigate, replace   } from 'react-router-dom';
import { userContex } from '../../App';
import Newloginm from '../../LoginAccount/Newlogin';
import Newshop from '../Newshop/Newshop';
import Contries from '../UltraContries/Contries';
import Sipmant from '../../Shipment/Sipmant';
  
const Redireact = (Children,...rest ) => {


     const navigat=useNavigate()
    
    const [loginUser,satLoginuser]=useContext(userContex);
     
    
   return loginUser.email?<Outlet  />:<Navigate to='/login' replace/>;

    

   
};
  
export default Redireact;