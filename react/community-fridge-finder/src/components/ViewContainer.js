import React from "react";
import { Route, Switch, useParams, Link } from "react-router-dom";
import FridgeDetail from './FridgeDetail';
import NewFridgeForm from './NewFridgeForm';
import EditFridgeForm from './EditFridgeForm';

function ViewContainer({ removeFood, selectedFridge, addNewFood, submitNew, editFood, editFridgeLocation }) {
    const params = useParams();

    return (
        <div className="view-container">
            <Switch>
                {/* <Route exact path="/">
                    <div className="view-container-message">
                        <p>Welcome to Community Fridge Finder! Click on a fridge's magnets to see the food it contains.</p>
                        <p>Food lists rely on updates from volunteers, so they may not always be accurate. Please do your part by updating food lists when you can!</p>
                        <p>Thank you for being part of the NYC fridge community.</p>
                    </div>
                </Route> */}
                
                <Route exact path="/fridges/new">
                    <NewFridgeForm submitNew={submitNew} />
                </Route>
                <Route exact path="/fridges/:id/edit">
                    <EditFridgeForm fridge={selectedFridge}/>
                </Route>
                <Route exact path="/fridges/:id">
                    <FridgeDetail editFood={editFood} removeFood={removeFood} fridge={selectedFridge} addNewFood={addNewFood} editFridgeLocation={editFridgeLocation} />
                </Route>
                <Route path="/" >
                    <div className="view-container-message">
                        <p>Welcome to Community Fridge Finder! Click on a fridge's magnets to see the food it contains.</p>
                        <p>Food lists rely on updates from volunteers, so they may not always be accurate. Please help out by updating food lists when you can.</p>
                        <p>Thank you for being part of the NYC fridge community!</p>
                    </div>
                </Route>
            </Switch>
            
        </div>
    ) 
}




export default ViewContainer