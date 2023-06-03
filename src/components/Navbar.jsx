import React from 'react'
import Logo from '../assets/images/logo.png'
import Search from '../assets/images/search.svg'

const Navbar = () => {
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <ul className='list-styled'>
                    <li className='centerWrapper'>
                        <img className='logo' src={Logo} alt="Releaf Logo"/>
                    </li>
                    <div className='rightWrapper'>
                    <li className='centerWrapper'>
                        <button className='nav-button'>Buy Now</button>
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