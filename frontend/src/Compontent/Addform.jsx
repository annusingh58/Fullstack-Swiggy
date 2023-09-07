import React, { useState } from 'react';
import "../Style/Addform.css"
import { useNavigate } from 'react-router-dom';
const Addform = () => {


  const[userData,setUserData]=useState({name:"",price:"",image:""})
 const router=useNavigate();

const handleChange=(event) =>{
  setUserData({...userData,[event.target.name]:event.target.value})
}


const handelSubmit=async(event)=>{
event.preventDefault();
}
  return (
    <div className='screen-form'>
        <h1>Form Dteails</h1>
        <form onSubmit={handelSubmit}>
            <div className='form-Addproduct'>
                  <div><input name="productname" type="text" placeholder="productname" onChange={handleChange} /></div>
                  <div><input name="productprice" type="text" placeholder="productprice" onChange={handleChange} /></div>
                  <div><input name="productimage" type="text" placeholder="productimage" onChange={handleChange} /></div>
                <div><input type="submit" value="AddProduct"/></div>

            </div>
        </form>


    </div>
  )
}

export default Addform