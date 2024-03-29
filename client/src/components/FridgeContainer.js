import React, { useEffect, useState } from "react";
import FridgeCard from "./FridgeCard";
// import ViewContainer from './ViewContainer'
import { Link } from "react-router-dom"

function FridgeContainer({fridges, handleClick, deleteFridge, selectedFridge}) {
    const [searchInput, setSearchInput] = useState("")
    const filteredFridges = fridges.filter(fridge => {
        return fridge.location.toLowerCase().includes(searchInput.toLowerCase())
    })
    const mapFridges = filteredFridges.map(fridge => {
        return <FridgeCard key={fridge.id} fridge={fridge} handleClick={handleClick} deleteFridge={deleteFridge} selectedFridge={selectedFridge} />
    })
      
    return (
        <div className="fridge-list">
            {/* <button name="search-by-fridge">Search by Fridge Name</button> */}
            {/* <button name="search-by-food">Search by Food</button> */}
            <input id="fridge-search" type="text" placeholder="search by fridge name..." value={searchInput} onChange={e => setSearchInput(e.target.value)}></input>
            {/* <input id="food-search" type="text" placeholder="search for a food..." value={searchInput} onChange={e => setSearchInput(e.target.value)}></input> */}
            <ul className="fridge-list-fridges">
                {mapFridges}
            </ul>
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