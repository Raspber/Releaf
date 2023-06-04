import React from 'react'

const FlowerExtract = () => {

    const handleLearnMore = () => {
        const element = document.querySelector(".display-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: "smooth"
        })
    }

    const handleBuyNow = () => {
        const element = document.querySelector(".buynow-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left:0,
            behavior: "smooth"
            
        })
    }

    return (
        <div className='sound-section wrapper'>
            <div className='body'>
                <div className='sound-section-content content'>
                    <p className='text'>Flower Extract.</p>
                    <span className='description'>
                    We only produce high THC flower extract.
                    Grown in house under ideal conditions for 
                    the best possible flower.
                    </span>
                    <ul className='links'>
                        <li>
                            <button className='button' onClick={handleBuyNow}>Buy Now</button>
                        </li>
                        <li>
                            <a  className='link'onClick={handleLearnMore}>Learn More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FlowerExtract