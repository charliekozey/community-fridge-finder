import React, { useEffect, useState } from "react";
import FridgeCard from "./FridgeCard";
// import ViewContainer from './ViewContainer'
import { Link } from "react-router-dom"

function FridgeContainer({fridges, handleClick, deleteFridge, selectedFridge}) {

    const mapFridges = fridges.map(fridge => {
        return <FridgeCard key={fridge.id} fridge={fridge} handleClick={handleClick} deleteFridge={deleteFridge} selectedFridge={selectedFridge} />
    })
      
    return (
        <div className="fridge-list">
            <div className="fridge-list-fridges">
                {mapFridges}
            </div>
            <div className="fridge-buttons">
                <button id="new-fridge-button">
                    <Link to="/refrigerators/new">
                        Add New Fridge    
                    </Link>
                </button>
            </div>
        </div>
        
    )
}

export default FridgeContainer;