import React from "react";

const DisplaySection = () => {
    return (
        <div className="display-section wrapper">
            <p className="text">Ninja Turle.</p>
            <ul className="description">
                <li className="description-list">1 gram</li>
                <li className="description-list">2.25% terps</li>
                <li className="description-list">96.53% thc</li>
            </ul>
            <button className="button">Try Me!</button>
            <button className="back-button">Top</button>

            {/* left off at 1 hr and 06 minutes */}
        </div>
    );
};

export default DisplaySection;
