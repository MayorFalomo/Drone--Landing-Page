import React, {useState} from 'react'
import "./Heropage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


export default function Heropage(props) {

  const [clicked, setClicked] = useState("false")

  
  const handleChange = () => {
    setClicked(!clicked);
     props.setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
    
  return (
<div className="main"> 

    <div className='Heropage'>

      <div className="container">

        <div className="flexItem">
          
          <img src='./images/Goodday.svg' alt="img" />
          
      <div className="best">
      <img src="./images/verify.svg" alt="img" />
        <h2 id='ball'>Best Drone Platform - World Record 2021</h2>
        </div>
          <h1>The <span>best<img className='lightening' src="./images/lightening.svg" alt="img" />
</span> view in the world from you site.</h1>
      <p>Look at the world with another way from the sky and enjoy with this view with our drone.</p>
      </div>

      <div className="buttons">
        <button className="browse">Browse all Products</button>
        <div className="play">
        <button className="faPlay"><FontAwesomeIcon icon={faCirclePlay} /></button>
          <p>See How it Works</p>
          </div>
        </div>
        
      </div>
      
      <div className="imagery">
        <img className="drone" src='./images/flyingDrone.svg' alt='img' />
        </div>
        
        <div className='toggler'>
          <div className="toggle">
                  
            <div className="toggleContain">

              <div className="togglebtn">
                <label htmlFor="yes"></label>
                
                <label htmlFor="no"></label>
               
                </div>
            </div>
            <div id='ball' onClick= {handleChange} className={clicked ? "ball active" : "ball"}></div>
          </div>
          </div>

      
      </div>
                <div className='socialMedia'>
                <div className='med'>Follow us</div>

          <div className='contact'>
        <div className="twitter"><img src='./images/twitter.svg' alt='img'/></div>
        <div className="facebook"><img src='./images/facebook.svg' alt='img'/></div>
        <div className='instagram'><img src='./images/instagram.svg' alt='img'/></div>
            <div className='linkedin'><img src='./images/LinkedIn.svg' alt='img' /></div>
                    </div>
                    </div>


      </div>
  )
}

