import {  useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Component/Context/AuthContext";
 import { toast } from "react-hot-toast";
 
function AuthProtected({children}){
    const {state}=useContext(AuthContext);
    const router=useNavigate();

    useEffect(()=>{
        if(!state?.user?.name){
            setTimeout(() => {
                router('/')
            }, 3000);
        }
    },[state])
    if(state?.user?.role){
        return(
            children
        )
    }else{
        return (
        <div>
            <h1>You are not Logged in please log in first...Redirecting you to the Home page </h1>
            <button onClick={()=>router('/login')}>Click here to login</button>
        </div>
        )
    }
}

export default AuthProtected;