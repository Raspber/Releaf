import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.png'
import Search from '../assets/images/search.svg'

const Navbar = () => {
    
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <ul className='list-styled'>
                    <li className='centerWrapper'>
                        <Link to = "/">
                            <img className='navlogo' src={Logo} alt="Releaf Logo"/>
                        </Link>
                    </li>
                    <li className='centerWrapper'>
                        <Link to = '/'>
                            <button className='nav-button'>Home</button>
                        </Link>
                    </li>
                    <li className='centerWrapper'>
                        <Link to = '/products'>
                            <button className='nav-button'>Products</button>
                        </Link>
                    </li>
                    <div className='rightWrapper'>
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