import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

const Multiple = () => {
      const [products, setProducts] = useState([]);
    const router= useNavigate();
    useEffect(() => {
        async function getAllProducts() {
            try {
                const response = await axios.get("http://localhost:2000/swiggy/getallproducts");
                if (response) {
                    setProducts(response.data.products);
                    console.log(response.data.products);
                }
            } catch (error) {
                toast(error.response.data.message)
            }
        }
        getAllProducts();
    }, [])
  return (
    <div id="screen-multiple">
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
        <div id="filter-multiple">
            <div>
                <h1>43 resturants</h1>
            </div>
            <div>
                <p>Relevance</p>
                <p>Delivery Time</p>
                <p>Rating</p>
                <p>Cost:Low To High</p>
                <p>Cost:High To Low</p>
                <p>Filter</p>
            </div>
            
        </div>
        <div id="productsT">

        </div>
        <div id="pic-multiple">
            <div>
                 <div>
                    <img src="./pic1.webp"/>

                 </div>                  
                    <div>
                <h4>Cafe irani chai@ bun maska</h4>
                <p>Beverages,snaks</p>
                <p>.22 MINS .Rs 200 FOR TWO</p>
                <h6> 10% off | USE JUMBO</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="./pic2.webp"/>
                </div>
                <div>
                    <h4>Shabri</h4>
                    <p>South Indian, Indian, Snacks, North Indian, Juices</p>
                    <p>4.2 .20 MIN . Rs 300 FOR TWO</p>
                    <h6>50% off|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="./pik3.webp"/>
                </div>
                <div>
                    <h4>Sanjay Lunch Home</h4>
                    <p>South Indian, Indian, Snacks, North Indian, Juices</p>
                    <p>4.2 .20 MIN . Rs 300 FOR TWO</p>
                    <h6>50% off|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="./pik4.webp"/>
                </div>
                <div>
                    <h4>Sanjay Lunch Home</h4>
                    <p>South Indian, Indian, Snacks, North Indian, Juices</p>
                    <p>4.2 .20 MIN . Rs 300 FOR TWO</p>
                    <h6>50% off|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./pic5.webp"/>
                </div>
                <div>
                    <h4>R Bhagat Tarrachand</h4>
                    <p>North Indian, Chinese, Street Food</p>
                    <p>4.2 .20 MIN . Rs 300 FOR TWO</p>
                    <h6>60% off|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./pic6.jpg"/>
                </div>
                <div>
                    <h4>NICream</h4>
                    <p>Desserts,Ice cream</p>
                    <p>4.2 .20 MIN . Rs 300 FOR TWO</p>
                    <h6>Flat Rs 100 OFF on First Order</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./pic7.webp"/>
                </div>
                <div>
                    <h4>Bhagat Tarachand</h4>
                    <p>North Indian</p>
                    <p>4.2 .20 MIN . Rs 400 FOR TWO</p>
                    <h6>Flat Rs 125 OFF on First Order</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./pic8.jpg"/>
                </div>
                <div>
                    <h4>Baskin Robbins</h4>
                    <p>Desserts,Ice cream</p>
                    <p>4.2 .20 MIN . Rs 300 FOR TWO</p>
                    <h6>Flat Rs 125 OFF on First Order</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./pic9.jpg"/>
                </div>
                <div>
                    <h4>Baskin Robbins</h4>
                    <p>Desserts,Ice cream</p>
                    <p>4.6 .20 MIN . Rs 300 FOR TWO</p>
                    <h6>Flat Rs 50 OFF on First Order</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./pic10.webp"/>
                </div>
                <div>
                    <h4>Zeera Juice</h4>
                    <p>Juice,Ice cream</p>
                    <p>4.2 .20 MIN . Rs 300 FOR TWO</p>
                    <h6>Flat Rs 125 OFF on 249</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./kfc.jpg"/>
                </div>
                <div>
                    <h4>KFC</h4>
                    <p>Burgers, Biryani, American, Snacks, Fast Food</p>
                    <p>4.2 18 MIN . Rs 200 FOR TWO</p>
                    <h6>Flat Rs 125 OFF on 249</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./chayos.webp"/>
                </div>
                <div>
                    <h4>Chaayos Chai+Snacks=Relax</h4>
                    <p>Bakery, Beverages, Chaat, Desserts, Fast Food, Home Food, Italian, Maharashtrian...</p>
                    <p>4.2 18 MIN . Rs 200 FOR TWO</p>
                    <h6>40% OFF|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./bikks.webp"/>
                </div>
                <div>
                    <h4>BIKKS BIKANER</h4>
                    <p>Bakery, Beverages, Snacks, Desserts</p>
                    <p>4.2 28 MIN . Rs 400 FOR TWO</p>
                    <h6>40% OFF|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./bliss.jpg"/>
                </div>
                <div>
                    <h4>Blisss</h4>
                    <p>Bakery,Fast Food, Desserts</p>
                    <p>4.2 14MIN . Rs 250 FOR TWO</p>
                    <h6>50% OFF|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>
            <div>
                <div>
                    <img src="./haldiram.webp"/>
                </div>
                <div>
                    <h4>Haldiran's Resturants</h4>
                    <p>NOrth indians,South Indian,Sweets,Chat, Snacks, Desserts</p>
                    <p>3.9  30 MIN . Rs 300 FOR TWO</p>
                    <h6>40% OFF|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>


            </div>

            <div>
                <div>
                    <img src="./gupta.webp"/>
                </div>
                <div>
                    <h4>Sandwich</h4>
                    <p>Bakery, Beverages, Snacks, Chat</p>
                    <p>4.6 28 MIN . Rs 400 FOR TWO</p>
                    <h6>40% OFF|Use TRYNEW</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
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
          
  )
}

export default Multiple