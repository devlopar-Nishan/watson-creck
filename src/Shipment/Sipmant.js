import React, { useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { userContex } from '../App';

 



const Sipmant = () => {
    const [loginUser,satLoginuser]=useContext(userContex);
    const {displname,photoURL,email}=loginUser;
     
    const {
        register,
       
        watch,
        formState: { errors },
        
      } = useForm()
      const onSubmit = (data) => console.log(data)

      console.log(watch("example")) // watch input value by passing the name of it
    
      return (
        
        <form  action='#'>
        
          <input defaultValue={displname} {...register("name")} />
          {errors.name&& <span>name is required</span>}
    
 ;
          <input defaultValue={email}{...register("exampleRequired", { required: true })} />
         
          {errors.exampleRequired && <span>email is required</span>}

          <input defaultValue={loginUser.phone}{...register("mlll", { required: true })} />
          {errors.mlll && <span>phone number is required</span>}
         
    
          <input type="submit" onSubmit={onSubmit(onSubmit)} />
        </form>
      )
};

export default Sipmant;