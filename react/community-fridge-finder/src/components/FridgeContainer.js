import React, { useEffect, useState } from "react";
import FridgeCard from "./FridgeCard";
// import ViewContainer from './ViewContainer'
import { Link } from "react-router-dom"

function FridgeContainer({fridges, handleClick, deleteFridge}) {

    
      
      const mapFridges = fridges.map(fridge => {
          return <FridgeCard key={fridge.id} fridge={fridge} handleClick={handleClick} deleteFridge={deleteFridge}/>
      })
      
      


    return (
        <div className="fridge-list">
            <div className="fridge-list-top">
                <h2>select a fridge</h2>
                <button id="add-fridge-button">
                    <Link to="/fridges/new">
                        Add New Fridge    
                    </Link>
                </button>
            </div>
            <div className="fridge-list-fridges">
                {mapFridges}
            </div>
        </div>
        
    )
}





export default FridgeContainer;