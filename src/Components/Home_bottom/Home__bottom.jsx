import React from 'react'
import './Bottom.scss'
import Man from './img/man.svg'
import Man1 from './img/man1.svg'
import { Rating} from '@mui/material';
import Soat from './img/soat.svg'

const Home__bottom = () => {
  return (
   <>
   <div className="home_bottom container">
        <p id='bpi'>Here are our some of the best clients.</p>
        <h2 id='bhi'>What People Say About Us</h2>

        <div className="person_cart container">
            <div className="cart_person ">
                <div className="imgb">
                    <img src= {Man} alt="" />
                </div>
                <div className="textb">
                        <h3>Hamza Faizi</h3>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                       <span><Rating/></span>

                </div>
            </div>
            <div className="cart_person ">
                <div className="imgb">
                    <img src= {Man1} alt="" />
                </div>
                <div className="textb">
                        <h3>Hamza Faizi</h3>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                       <span><Rating/></span>
 
                </div>
            </div>
        </div>

        <div className="text_soat container">
            <div className="txxt">
                <h3>Subscribe To Newsletter</h3>
                <p>Get free guide about smart watches daily. </p>
                <div className="input">
                    <input type="text" 
                     placeholder='Enter Email Address'
                     />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="img">
                <img src= {Soat} alt="" />
            </div>




        </div>








   </div>
   <div className="line">
            <p>Copyright @ 2022 | Mohid</p>
        </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Home__bottom