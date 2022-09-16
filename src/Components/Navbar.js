import React, {useState} from 'react'
import "./Navbar.css"

function Navbar() {

    const [click, setClick] = useState(false)

    const updateMenu = () => {
        setClick(!click);
    }


    return (
        <div className="NavContainer">
            <nav>
                <img className='logo' src="./images/Drone.svg" alt='img' />
                <ul id="navBars" className={click ? "links active" : "links"}>
                    <li>Home</li>
                    <li>Rent</li>
                    <li>Videos</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>
                <ul className="images">
                    <li><img className='cart' src='./images/cart.svg' alt='img' /></li>
                </ul>

                <div className="socials">
                    <div onClick={updateMenu} className='menugrid'  ><img src='./images/menubutton.svg' alt='img' /></div>
                 <div className='try'>
                <div className='media'>
                <div className='med'>Follow us</div>

          <div className='contact'>
        <div className="twitter"><img src='./images/twitter.svg' alt='img'/></div>
        <div className="facebook"><img src='./images/facebook.svg' alt='img'/></div>
        <div className='instagram'><img src='./images/instagram.svg' alt='img'/></div>
            <div className='linkedin'><img src='./images/LinkedIn.svg' alt='img' /></div>
                    </div>
                    </div>
                    </div>

                    </div>
                    </nav>
            </div>
  )
}

export default Navbar

