import React from 'react'
import Logo from '../assets/images/logo.png'
import Search from '../assets/images/search.svg'

const Navbar = () => {
    const handleBuyNow = () =>{
        const element = document.querySelector(".buynow-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left:0,
            behavior: "smooth"
            
        })
    }
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <ul className='list-styled'>
                    <li className='centerWrapper'>
                        <img className='navlogo' src={Logo} alt="Releaf Logo"/>
                    </li>
                    <div className='rightWrapper'>
                    <li className='centerWrapper'>
                        <button className='nav-button' onClick={handleBuyNow}>Buy Now</button>
                    </li>
                    <li className='centerWrapper nav-search'>
                        <img className='searchLogo' src={Search} alt="Search" />
                        <input className='nav-search' type="text" />
                    </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar