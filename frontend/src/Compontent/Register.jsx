import React, { useState } from 'react'
import "../Style/Register.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { toast } from 'react-hot-toast';


 const Register = () => {
    const [userData,setUserData]=useState({name:"",email:"",password:"",confimpassword:"",role:"buyer"})

    const router =useNavigate();
    console.log(userData,"userData");

    const handleChange =(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value })
    }


    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confimpassword){
            try {
                const response=await axios.post("http://localhost:2000/swiggy/register",{
                    name:userData.name,
                    email:userData.email,
                    password:userData.password,
                    confirmpassword:userData.confimpassword,
                    role:userData.role

                });

                console.log(response,"response")

                const data=response.data;
                console.log(data,"data");

                if(data.success){
                    toast(data.message);
                    router('/login');
                }   
            } catch (error) {
                console.log(error)
                if(!error.response.data.success){
                    alert(error.response.data.message);
                }
                
            }
        }
        else{
            alert("all field are required");
        }
    }

  return (
    
          <div id="screen-register">
        <div id="sign-register">

            <div>
                <i class="fa-solid fa-xmark"></i>
                <h3>Sign up</h3>
                <p> <span>or</span> login to your accout</p>
                
            </div>
            <div>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"/>
            </div>

        </div>
 
        <div id="info-register">
            <form onSubmit={handleSubmit}>

                <div id="form-register">
                    <div><input name="name" type="text" placeholder="Name" onChange={handleChange} /></div>
                    <div><input name="email" type="email" placeholder="Enter Email Id" onChange={handleChange} /></div>
                    <div><input name="password" type="password" placeholder="password" onChange={handleChange} /></div>
                    <div><input name="confimpassword" type="password" placeholder="confimpassword" onChange={handleChange} /></div>
                    <div>
                     <select name="role" onChange={handleChange}>
                    <option value="buyer">Buyer</option>
                    <option value="seller" >Seller</option>
                     </select>
                    </div>
     
                    <div><input type="submit" value="Signup"/></div>

                </div>
           </form>
        </div>
        <p>Have a referral code?</p>
        
        <p>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
        

    </div>
    
  )
}
export default Register;
