import React from "react";
import { Link } from 'react-router-dom';
function FridgeCard({fridge, handleClick, deleteFridge}) {

    return (
        <div className="fridge-card">

            <div className="fridge-name">{fridge.location}</div>

            <div className="fridge-door">
                <Link 
                    to={`/fridges/${fridge.id}`}
                    onClick={() =>handleClick(fridge)}
                >
                    <div className="magnets">
                        <div>
                            <span>s</span><span>e</span><span>e</span>
                        </div> 
                        <div>
                            <span>m</span><span>o</span><span>r</span><span>e</span><span>!</span>
                        </div>
                    </div>
                </Link>

                <div>
                    <button onClick={() => deleteFridge(fridge.id)}>delete</button>
                </div>

            </div>
        </div>
        
    )
}







export default FridgeCard;