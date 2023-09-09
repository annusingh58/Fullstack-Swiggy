// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
// import {AuthContext} from 'react-router-dom';


// const Navbar = () => {
//     const Navbar = () => {

//         const {state,dispatch}=useContext(AuthContext); 
//         const username = state?.user?.name;
//         const router=useNavigate();
//         const Logout=()=>{
//             dispatch({
//                 type:"LOGOUT"
//             })
//         }
//   return (
//      <div id="nvbar">
//         <div>
//                 <img src="./swiggy logo.png"/>
//         </div>
//          <div>
//                 <p><b>other</b> Vashi,Navi mumbai,Maharashtra,India</p>

//             </div>
//             <div>
//                 <p><span><i class="fa-solid fa-magnifying-glass"></i></span>Search</p>
//                 <p><span><i class="fa-solid fa-certificate"></i></span>Offer </p>
//                 <p><span><i class="fa-solid fa-hand-holding-hand"></i></span>help</p>
//                 <p><span><i class="fa-regular fa-user"></i></span>Sign In</p>
//                 <p><span><i class="fa-solid fa-cart-shopping"></i></span>Cart</p>
//             </div>
//             </div>
//   )
// }

// export default Navbar