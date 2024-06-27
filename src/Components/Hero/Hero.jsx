import React from 'react'
import './Hero.scss'
import Soat from './soat1.png'

const Hero = () => {
  return (
    <>
 <section id='hero'>
 <div className="hero container  ">

<div className="text ">
<h3>Discover <br /> Most Suitable <br /> Watches</h3>
   <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
  <div className="input">
  <input type="text"  placeholder='Find the best brands'/>
  <button>Search</button>
  </div>
</div>

<div className="soat">
   <img src= {Soat} alt="" />
</div>


</div>


 </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Hero