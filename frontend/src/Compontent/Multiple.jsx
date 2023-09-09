import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import "../Style/Multiple.css"

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
    <>
    <div id="screen-multiple">
    <div id="nvbar">
        <div>
             <img src="data:image/png;base64,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"/>
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
                <p onClick={()=> router('/addform')}>Filter</p>
            </div>
            
        </div>
        {/* <div id="productsT">

        </div> */}
 {products?.length? <div id="pic-multiple">
    {products.map((product)=>(
            <div>
                 <div>
                    <img src={product.image}/>

                 </div> 
                                
                    <div>
                <h4>{product.name}</h4>
                <p>Beverages,snaks</p>
                <p>.22 MINS .Rs {product.price} FOR TWO</p>
                <h6> 10% off | USE JUMBO</h6>
                </div>
                <div id="none">
                    <p>QUICK VIEW</p>
                </div>
            </div>
            ))}
            {/* <div>
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


            </div> */}


          
       
   
   </div> :<div>loading...</div>}
   <div id="footer-multiple">
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
   </>       
  )
}

export default Multiple