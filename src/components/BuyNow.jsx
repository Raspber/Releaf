import React from 'react'

const BuyNow = () => {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
    }

    return (
        <div className='buynow-section wrapper'>
            
                <div className='buynow-section-content content'>
                    <p className='title'>Limited Stock</p>
                    <span className='agewarning'>
                        MUST BE 18 OR OLDER TO PURCHASE
                    </span>
                    <ul className='links'>
                        <li>
                            <button className='button'>Pick-Up</button>
                        </li>
                        <li>
                            <button className='button'>Delivery</button>
                        </li>
                    </ul>
                </div>
            
            <button className="back-button" onClick={handleScrollToTop}>TOP</button>
        </div>
    )
}

export default BuyNow