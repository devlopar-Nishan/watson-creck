
import React, { useContext } from 'react';
import { userContex } from '../../App';
import { Navigate, useLocation } from 'react-router-dom';
import Sipmant from '../../Shipment/Sipmant';
import Contries from '../UltraContries/Contries';
import Newloginm from '../../LoginAccount/Newlogin';

const ProtectedTow = () => {
    const[loginUser,satLoginuser]=useContext(userContex);
    const location=useLocation();
    
    


    return loginUser.email?<Contries/>:<Navigate to='/login'/>;
};

export default ProtectedTow;