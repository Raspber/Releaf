import React from 'react'

const BuyNow = () => {
    return (
        <div className='buynow-section wrapper'>
            <div className='body'>
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
            </div>

        </div>
    )
}

export default BuyNow