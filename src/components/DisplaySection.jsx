import React from "react";


const DisplaySection = () => {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
    }

    const handleBuyNow = () => {
        
        window.scrollTo({
            top: 4000,
            left:0,
            behavior: "smooth"
        })
        console.log(element?.getBoundingClientRect().bottom)
        console.log(window.pageYOffset)
    }

    return (
        <div className="display-section wrapper">
            <p className="text">Ninja Turle.</p>
            <ul className="description">
                <li className="description-list">1 gram</li>
                <li className="description-list">2.25% terps</li>
                <li className="description-list">96.53% thc</li>
            </ul>
            <button className='button' onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
};

export default DisplaySection;
