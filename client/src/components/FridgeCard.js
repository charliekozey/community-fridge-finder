import React from "react";
import { Link } from 'react-router-dom';
function FridgeCard({ fridge, handleClick, deleteFridge, selectedFridge }) {

    return (
        <div className="fridge-card">
            <li className="fridge-name">
                <Link to={`/refrigerators/${fridge.id}`} onClick={() => handleClick(fridge)} >
                    {fridge.location}
                </Link>
            </li>
            {/* <div>
                    <button onClick={() => deleteFridge(fridge.id)}>delete</button>
                </div> */}
        </div>
    )
}

export default FridgeCard;