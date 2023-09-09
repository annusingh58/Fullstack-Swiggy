import React, { useContext, useState } from 'react'
import axios from 'axios';
import '../Style/Single.css';
import {useNavigate, useParams} from 'react-router-dom';
import {AuthContext} from './Context/AuthContext';
import AuthProtected from "../AuthProtected/index";


const Single = () => {
    const[product,setProduct]=useState();
    const{id} = useParams();
    const {state}=useContext(AuthContext);
    console.log(state);
    const router=useNavigate();

    async function addCart(){
        try {
            const response=await axios.post("http://localhost:2000/myntra/addToCart",{userId:state?.user?._id,productId:id})
            if(response.data.success){
                alert(response.data.message);
                router('/cart')
            }
        } catch (error) {
            alert(error.respose.data.message)
        }
    }

    useEffect(()=>{
        async function getProduct(){
            try {
                const response=await axios.post("http://localhost:2000/swiggy/getsingleProduct",{id});
                
                
                console.log(response);
                if(response){
                    setProduct(response.data.product);

                }
            } catch (error) {
                alert("error")
                
            }
        }getProduct();
    },[id]);

  return (
    <AuthProtected>
    <>
    <div id="screen">
    <div id="nvbar">
    <div>
            <img src="./swiggy logo.png"/>
    </div>
     <div>
            <p><b>other</b> Vashi,Navi mumbai,Maharashtra,India</p>

        </div>
        <div>
            <p><span><i class="fa-solid fa-magnifying-glass"></i></span>Search</p>
            <p><span><i class="fa-solid fa-certificate"></i></span>Offer </p>
            <p><span><i class="fa-solid fa-hand-holding-hand"></i></span>help</p>
            <p><span><i class="fa-regular fa-user"></i></span>Sign In</p>
            <p><span><i class="fa-solid fa-cart-shopping"></i></span>Cart</p>
        </div>
        </div>
        <div id="body">
            <div id="home">
                <div>
                    <p>Home/Mumbai/Vashi/McDonald's</p>

                </div>
                <div>
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
            <div id="order">
                <div id="order1">
                    <div id="replace-name">
                        <h3>McDonald's</h3>
                        <p>Burgers,Beverages</p>
                        <p>Vashi,o.5 km</p>
                        <p>0.5 Kms| Rs 34 Delivery fee will apply</p>
                    </div>
                    <div>
                        <div>
                            <p><span><i class="fa-solid fa-star"></i></span>4.5</p>
                            <p>500+rating</p>
                        </div>
                    </div>


                </div>
                <div id="order2">
                    <div>
                    <div>
                    <p><span><i class="fa-solid fa-circle-half-stroke"></i></span>16MIN</p>                          </p>                                

                        </div>
                        <div id="replace-price">
                            <p><span><i class="fa-solid fa-indian-rupee-sign"></i></span>₹400 for two</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>20% OFF UPTO Rs 125</p>
                            <p>USE KOTAK125|ABOVE Rs 500</p>
                        </div>
                       <div>
                            <p>20% OFF UPTO Rs 125</p>
                            <p>USE KOTAK125|ABOVE Rs 500</p>
                        </div>
                        <div>
                            <p>20% OFF UPTO Rs 125</p>
                            <p>USE KOTAK125|ABOVE Rs 500</p>
                        </div>

                    </div>
                    <div>
                        <p>Veg Only</p>
                    </div>
                </div>
                <div id="Top">
                    <div>
                        <h3>Top Picks</h3>
                    </div>
                    <div >
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/Cok"/>
                    </div>

                </div>
                <div id="food">
                    <h2>Recommended</h2>
                    <div>
                        <div>
                            <h3>Chicken Maharaja Mac</h3>
                            <p>Rs 235</p>
                            <p>Enjoy the tallest burgers innovated by us. Created with chunky juicy grilled chicken patty paired along with fresh ingredients like jalape??o, onion, slice of cheese, tomatoes & crunchy lettuce dressed with the classical Habanero sauce.</p>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/262656fef145b5595ea2a7cc68508b20"/>
                            <!-- <button onclick="addcart()">ADD CART</button> -->

                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Veg Maharaja Mac</h3>
                            <p>Rs 250</p>
                            <p>Enjoy the tallest burgers innovated by us. Created with perfectly fried corn and cheese patty paired along with fresh ingredients like jalape??o, onion, slice of cheese & crunchy lettuce dressed with cocktail sauce.</p>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/262656fef145b5595ea2a7cc68508b20"/>
                            <!-- <button onclick="addcart()">ADD CART</button> -->

                        </div>
                    </div>
                </div>

                <div id="browse">
                    <button>Browse Menu</button>
                </div>

                
                

            </div>
           
        </div>
        <div id="footer">
            <div>
                <div>
                    <h4>COMPANY</h4>
                    <p>About us</p>
                    <p>Team</p>
                    <p>Careers</p>
                    <p>Swiggy blog</p>
                    <p>Bug Bounty</p>
                    <p>swiggy one</p>
                    <p>Swiggy Instamart</p>
                    <p>Swiggy Genie</p>
                </div>
                <div>
                    <h4>CONTACT</h4>
                    <p>Help & Support</p>
                    <p>Ride With us</p>
                </div>
                <div>
                    <h4>LEGAL</h4>
                    <p>Terms & Conditions</p>
                    <p>Refunds & Cancellation </p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Offer Terms</p>
                    <p>Phising & Fraud</p>
                    <p>Corporate -Swiggy Money Codes Terms and Conditions</p>

                </div>
                <div>
                    <img src="./apple store.webp"/>
                    <img src="./googleplay.webp"/>
                </div>
            </div>
            <div>  
                                  <h4> WE DELIVER TO</h4>
            </div>
            <div>
                <div>
                
                      <p>Abohar</p>
                        <p>Adoni</p>
                        <p>Agra</p>
                        <p>Ajmer</p>
                        <p>Akola</p>
                        <p>Alappuzha</p>
                    </div>
                    <div>
                        <p>Dehradun</p>
                          <p>Dehri</p>  
                            <p>Delhi</p>
                            <p>Deoghar</p>
                            <p>Dewas</p>
                            <p>Dhanbad</p>
                            
                    </div>
                    <div>
                        <p>Khanna</p>
                        <p>Kharagpur</p>
                        <p>Kishangarh</p>
                        <p> Kochi</p>
                        <p>Kodaikanal</p>
                        <p>Kohima</p>
                            
                    </div>
                    <div>
                        <p>Purulia</p>
                        <p>Pusad</p>
                        <p>Puttur</p>
                        <p>Rae-Bareli</p>
                        <p>Raghunathpur</p>
                        <p>Raichur</p>
                            
                    </div>
                </div>
        </div>
</div>
</AuthProtected>
</>
  )
}

export default Single