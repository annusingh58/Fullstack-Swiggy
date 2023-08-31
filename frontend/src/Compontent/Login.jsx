import React, { useContext, useState } from 'react';
import "../Style/Login.css";

import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Login = () => {
    const[userData,setUserData]=useState({email:"", password:""});
    const {state,dispatch}=useContext(AuthContext);
    

    const router=useNavigate();
    console.log(userData,"userData");

    const handleChange=(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})

    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(userData.email && userData.password){
            try {
                const response=await axios.post("http://localhost:2000/swiggy/login",{
                    email:userData.email,
                   password:userData.password

                });
                console.log(response,"response")
                const data=response.data;
                if(data.success){
                    dispatch({
                        type:"LOGIN",
                        payload:data?.user
                    });
                    localStorage.setItem("JWTToken",JSON.stringify(data.token));
                    alert(data.message);
                    router('/home');
                }
                
            } catch (error) {
                console.log(error)
                if(!error.response.data.success){
                    alert(error.response.data.message)
                }
                
            }

        }
        else{
            alert("all field are required");
        }
    }
    
        
  return (
     <div id="screen-login">
        <div id="sign-login">

            <div>
                <i class="fa-solid fa-xmark"></i>
                <h3>Login</h3>
                <p> <span>or</span> Create an accout</p>
                <div></div>
            </div>
            <div>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"/>
            </div>

        </div>
        <div id="info-login">

            <form onsubmit={handleSubmit}>
               <div id="form-login">
                <div><input name="email" type="email" placeholder="Enter Email Id" onChange={handleChange}/></div>
                <div><input name="password" type="password" placeholder="password" onChange={handleChange}/></div>
                <div><input type="submit" value="login"/></div>
               </div>
            </form>
           
        </div>
        
        <p><span>By clicking on Login, I accept the,</span> Terms & Conditions & Privacy Policy</p>
        </div>
    
    
  )
}

export default Login