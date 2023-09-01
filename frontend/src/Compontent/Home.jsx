import React from 'react'
import '../Style/Home.css'

const Home = () => {
  return (
    <div>
         <div id="screen-home">
        <div id="swiggy-home">
            <div >
                 <div>
                    <div>
                        <img src="./logoswiggy.jpeg"/>
                    </div>
                   <div> 
                    <h4 id="switch">Login</h4>
                <div id="Logout"></div>
                    <button >Sign Up</button>
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
                <img src="./swiggy1.jpeg"/>
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
                        <img src="..Image/orer2.webp"/>

                    </div>
                    <div>
                        <h3>Live Order Tracking</h3>
                        <p>Know where your order is at all times,from the restaurants to your doorstep</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="..Image/order3.webp"/>
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
                    <img src="./googleplay.webp"/>
                </div>
                <div>
                    <img src="./apple store.webp"/>
                </div>
            </div>
        </div>
            <div>
                <div>
                    <img src="./pocket1.webp"/>
                </div>
                <div>
                    <img src="./pocket2.webp"/>
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
    </div>
  )
}

export default Home