import React from "react";

const DisplaySection = () => {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
    }

    const handleLearnMore = () => {
        const element = document.querySelector(".buynow-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="display-section wrapper">
            <p className="text">Ninja Turle.</p>
            <ul className="description">
                <li className="description-list">1 gram</li>
                <li className="description-list">2.25% terps</li>
                <li className="description-list">96.53% thc</li>
            </ul>
            <ul>
                <li>
                        <button className='button' onClick={handleLearnMore}>Buy Now</button>
                </li>
            </ul>
            <button className="back-button" onClick={handleScrollToTop}>TOP</button>
        </div>
    );
};

export default DisplaySection;
