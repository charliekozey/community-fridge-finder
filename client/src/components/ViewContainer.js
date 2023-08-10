import React from "react";
import { Route, Switch, useParams, Link } from "react-router-dom";
import FridgeDetail from './FridgeDetail';
import NewFridgeForm from './NewFridgeForm';
import EditFridgeForm from './EditFridgeForm';
import FridgeContainer from "./FridgeContainer";

function ViewContainer({ removeFood, setSelectedFridge, selectedFridge, addNewFood, submitNew, editFood, editFridgeLocation, fridges, deleteFridge }) {
    const params = useParams();

    return (
        <div className="view-container">
            <Switch>                
                <Route exact path="/refrigerators">
                    <FridgeContainer selectedFridge={selectedFridge} fridges={fridges} handleClick={setSelectedFridge} deleteFridge={deleteFridge} />
                </Route>
                <Route exact path="/refrigerators/new">
                    <NewFridgeForm submitNew={submitNew} />
                </Route>
                <Route exact path="/refrigerators/:id/edit">
                    <EditFridgeForm fridge={selectedFridge}/>
                </Route>
                <Route exact path="/refrigerators/:id">
                    <FridgeDetail setSelectedFridge={setSelectedFridge} editFood={editFood} removeFood={removeFood} fridge={selectedFridge} addNewFood={addNewFood} editFridgeLocation={editFridgeLocation} />
                </Route>
                <Route path="/about" >
                    <div className="view-container-message">
                        <p>Welcome to NYC Fridge Finder! Click on a fridge to see the food it contains.</p>
                        <p>Food lists rely on updates from volunteers, so they may not always be accurate. Please help out by updating food lists when you can.</p>
                        <p>Thank you for being part of the NYC fridge community!</p>
                    </div>
                </Route>
                <Route path="/">
                    <FridgeContainer selectedFridge={selectedFridge} fridges={fridges} handleClick={setSelectedFridge} deleteFridge={deleteFridge} />
                </Route>
            </Switch>
        </div>
    ) 
}




export default ViewContainer