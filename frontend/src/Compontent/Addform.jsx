import React from 'react';
import "../Style/Addform.css"
const Addform = () => {
  return (
    <div className='screen-form'>
        <h1>Form Dteails</h1>
        <form >
            <div className='form-Addproduct'>
                  <div><input name="productname" type="text" placeholder="productname" /></div>
                  <div><input name="productprice" type="text" placeholder="productprice" /></div>
                  <div><input name="productimage" type="text" placeholder="productimage" /></div>
                <div><input type="submit" value="AddProduct"/></div>

            </div>
        </form>


    </div>
  )
}

export default Addform