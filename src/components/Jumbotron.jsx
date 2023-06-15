import React from 'react'


const Jumbotron = () => {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        
        <div className='jumbotron-section wrapper'>
            <h2 className='title'>Releaf.</h2>
            <p className='text'>Premium Cannabis Extract</p>
            <ul className='links'>
                <li>
                    <a className='button' onClick={handleLearnMore}>Learn More</a>
                </li>
            </ul>
        </div>
    )
}

export default Jumbotron

