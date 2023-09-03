import React, { useContext } from 'react'
import '../Style/Home.css';
import AuthContext from './Context/AuthContext'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const {state,dispatch} = useContext(AuthContext); 
    const username =state?.user?.name;
    const router =useNavigate();

    const Logout=()=>{
        dispatch({
            type:"LOGOUT"
        })
    }
  return (
    <div>
         <div id="screen-home">
        <div id="swiggy-home">
            <div >
                 <div>
                    <div>
                        <img src="data:image/png;base64,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"/>
                    </div>
                   <div> 
                   {username?<p>{username}</p>:<p onClick={()=>router('/login')}>LOGIN</p>}

                <div id="Logout"></div>
                {username?<button onClick={Logout}>LOGOUT</button>:<button></button>}

                     <div id="Logout"></div>
                </div>
                    </div>
                    <div>
                        <h2>Unexpected guests?</h2>
                        <h3>Order food from favourite restaurants near you.</h3>
                    </div>
                    <div>
                        <input type="Enter yur delivery location" placeholder="Enter your delivery location"/>
                        <p>Locate me</p>
                        <button onclick='window.location.href="./swiggylocation.html"'>FIND FOOD</button>
                    </div>
                    <div>
                        <p>POPULAR CITIES IN INDIA</p>
                        <p>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more.</p>
                    </div>
                    
                  
            </div>

            <div >
                <img src=""/>
            </div>

        </div>
        
        <div id="order-swiggy">
                <div>
                    <div>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"/>
                </div>
                <div>
                    <h3>No Minimum order</h3>
                    <p>Order in for yourself or for the group,with no restrications on order value</p>
                </div>
                </div>
                <div>
                    <div>
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"/>

                    </div>
                    <div>
                        <h3>Live Order Tracking</h3>
                        <p>Know where your order is at all times,from the restaurants to your doorstep</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"/>
                    </div>
                    <div>
                        <h3>Fast Delivery</h3>
                        <p>Experience Swiggy's Superfast delivery for food delivered fresh & on time</p>
                    </div>
                </div>
        </div>

        <div id="pocket">
            <div>
                <div>
                <h1>Restaurants in your pocket</h1>
                <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
            </div>
            <div>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
                </div>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
                </div>
            </div>
        </div>
            <div>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"/>
                </div>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"/>
                </div>
            </div>

        </div>
        <div id="footer-swiggy">
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
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
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
    </div>
  )
}

export default Home