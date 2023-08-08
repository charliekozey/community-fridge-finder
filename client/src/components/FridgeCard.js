import React from "react";
import { Link } from 'react-router-dom';
function FridgeCard({ fridge, handleClick, deleteFridge, selectedFridge }) {

    return (
        <Link to={`/fridges/${fridge.id}`} onClick={() => handleClick(fridge)} >
            {selectedFridge ?
                <div className={fridge.id === selectedFridge.id ? "fridge-card-selected" : "fridge-card"} >
                    <div className="fridge-name">{fridge.location}</div>
                </div>
                :
                <div className="fridge-card">
                    <div className="fridge-name">{fridge.location}</div>
                </div>
            }
                {/* <div>
                    <button onClick={() => deleteFridge(fridge.id)}>delete</button>
                </div> */}
        </Link>
    )
}

export default FridgeCard;