 
import firebaseConfig from './ffiarbase.config';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
 
import React,{useContext, useEffect, useState} from 'react';
import { userContex } from '../App';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import Sipmant from '../Shipment/Sipmant';

const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 


function Newloginm(props) {
  

  const [loginUser,satLoginuser]=useContext(userContex);
   
  const History=useNavigate();
  const location =useLocation();


  const[newuser,setnewuser]=useState(false);
  const[user,satuser]=useState({
    isvalidemail:false,
    email:'',
    photo:"",
     
    displname:'',
    password:'',
    error:'',
    name:'',
    success:false

    
  })
   
   
    
 
   
   
  

  const provider = new GoogleAuthProvider();
  const handlevent=()=>{
    const auth = getAuth();
    signInWithPopup( auth,provider)
     .then(res=>{
      const {displayName,photoURL,email}=res.user;
      const seruse={
        isvalidemail:true,
        email:email,
        photo:photoURL,
        displname:displayName
      }
      satuser(seruse);
      satLoginuser(seruse);
      if(props.pagestat===0){
        History('/cart')
      }else if(props.pagestat===66){
        History('/sipmant');
      }
      
     })
    .catch(err=>{
      console.log(err.message);
    })
 
  

  }
  const handlebulr=(e)=>{
    var isformvalid=true;
    if(e.target.name==='email'){
      isformvalid=/^\S+@\S+\.\S+$/.test(e.target.value)
      


    }
    if(e.target.name==='password'){
      const passordvalid=e.target.value.length>6;
      const isvalidpasord= /^\d+$/.test(e.target.value);
      isformvalid=passordvalid && isvalidpasord;


    }
    if(e.target.name==='name'){
      const userinfo={...user};
      userinfo[e.target.name]=e.target.value;
      satuser(userinfo);
    }
    if(isformvalid){
      const userinfo={...user};
      userinfo[e.target.name]=e.target.value;
      satuser(userinfo);
    }
  }
  const handlesubmit=(e)=>{
    if(newuser&& user.email&&user.password){

      const auth = getAuth();
createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((res) => {
    const newinfo={...user}
    newinfo.error='';
    // res.displayName=user.name
    newinfo.success=true;
    satuser(newinfo);
    satLoginuser(newinfo);
    if(props.pagestat===0){
      History('/cart')
    }else if(props.pagestat===66){
      History('/sipmant');
    }
  
    // userinformatino(user.name)
    // console.log(res)
      
  })
  .catch((error) => {
 
    
    const errorMessage = error.message;
    const newinfo={...user}
    newinfo.error=errorMessage;
    newinfo.success=false;
    satuser(newinfo);
    
  });
  









      }

     if(!newuser && user.email && user.password){
  const auth = getAuth();
signInWithEmailAndPassword(auth, user.email, user.password)
  .then((res) => {
     
    const newinfo={...user}
    newinfo.error= '';
    newinfo.success=false;
    satuser(newinfo);
    res.displayName=user.name
    userinformatino(user.name)
    
    satLoginuser(newinfo);
    if(props.pagestat===0){
      History('/cart')
    }else if(props.pagestat===66){
      History('/sipmant');
    }

     
      
    
     
     
    
     
  })
  .catch((error) => {
    const errorMessage = error.message;
    const newinfo={...user}
    newinfo.error=errorMessage;
    newinfo.success=false;
    satuser(newinfo);
  });
      }
     e.preventDefault();

  
  }
   
  const changstate=()=>{
    setnewuser(!newuser);
    }    
     const userinformatino=(userName)=>{
    

        const auth = getAuth();
        const user = auth.currentUser;
     
        if (user !== null) {
          
          const displayName = userName;
        
         
          // const email = user.email;
          // const photoURL = user.photoURL;
          // const emailVerified = user.emailVerified;
        
          // const uid = user.uid;
          
}
 
  }
   
  return (
    <div className="App">

    
      <button onClick={handlevent}>sign in</button><br />
      <button>sing in with facebook</button><br />
      {
        user.isvalidemail&& <div>
          <p>welcome {user.displname}</p>
          <p>welcome {user.email}</p> 
          </div>

        }
          <h1>our authontation proses</h1>
          <p>email:{user.email}</p>
          <p>pasord:{user.password}</p>
           <form action={handlesubmit}>

            <input type="checkbox" name="" id="" onChange={changstate}/>

            <label htmlFor="nweuser"></label>
              {
              newuser&& <input type="text" onBlur={handlebulr}  name="name" id="" />
              }
              <br />
           <input type="email" onBlur={handlebulr} name="email" id=""  placeholder='your email' required/>
           <br />
           <input type="password" onBlur={handlebulr} name="password" id="" placeholder='your password' required />
           <br />
            <input type="submit" onClick={handlesubmit} value={newuser?'submit':'log in'} />
           </form>
      







        <p style={{color:'red'}}>{user.error}</p>
        
        {
          user.success  &&   <p style={{color:'green'}}>user {newuser? 'creted':'Login'} successfully.</p>
        }
          
          
        </div>
        
    

 
     
  );

}
export default Newloginm;
