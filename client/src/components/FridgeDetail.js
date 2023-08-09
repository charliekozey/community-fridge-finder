import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodItem from './FoodItem';

export default function FridgeDetail({ removeFood, setSelectedFridge, fridge, addNewFood, editFood, editFridgeLocation }) {

  const params = useParams();
  const [showForm, setShowForm] = useState(false)
  const [newFood, setNewFood] = useState({ name: '', quantity: 1 })
  const [editLocation, setEditLocation] = useState(false)
  const [updatedLocation, setUpdatedLocation] = useState("")
  let foodList

  useEffect(() => {
    params.id &&
     fetch(`/api/fridges/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setSelectedFridge(data)
        })
  }, [])

  if (fridge) {
    foodList = fridge.foods.map(food => {
      return <FoodItem editFood={editFood} removeFood={removeFood} food={food} key={food.id} />
    })
  }

  function handleNewFoodSubmit(e) {
    e.preventDefault();
    setShowForm(false)
    addNewFood(newFood, fridge.id)
    setNewFood({ name: '', quantity: 1 });
  }

  function handleUpdateLocation(e) {
    e.preventDefault()
    setEditLocation(false)
    editFridgeLocation(updatedLocation, fridge.id)
    setUpdatedLocation("")
  }

  return (
    <div>
      {fridge ?
        <div className="view-display-box">
          <h1>{fridge.location}</h1>
          <div id="fridge-detail-button-box">
            {!showForm && <button id="new-food-button" onClick={() => setShowForm(true)}>Add Food</button>}
            {showForm &&
              <form onSubmit={e => handleNewFoodSubmit(e)}>
                <label htmlFor="quantity">What did you drop off?
                  <br />
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={newFood.quantity}
                    onChange={e => setNewFood({ ...newFood, quantity: e.target.value })}
                    min={1}
                  />
                </label>
                <label htmlFor="name">
                  <input
                    onChange={e => setNewFood({ ...newFood, name: e.target.value })}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. slices of pepperoni pizza"
                    value={newFood.name} />
                </label>
                <input type="submit" value="Add food" />
              </form>
            }
            {/* {!editLocation && <button onClick={() => setEditLocation(true)}>Edit fridge location</button>} */}
            {/* {editLocation &&
              <form onSubmit={e => handleUpdateLocation(e)}>
                <label htmlFor="name">Rename fridge:
                  <input
                    onChange={e => setUpdatedLocation(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    value={updatedLocation}
                  />
                </label>
              </form>
            } */}
          </div>
          {fridge && foodList.length ? foodList : <p>Nothing in this fridge right now</p>}
        </div>
        : <p className="view-container-message">Select a fridge to show its contents</p>
      }

    </div>
  )
}
