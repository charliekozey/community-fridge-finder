import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "./components/Header"
import FridgeContainer from './components/FridgeContainer';
import ViewContainer from './components/ViewContainer';

function App() {

  const [fridges, setFridges] = useState([])
  const [selectedFridge, setSelectedFridge] = useState()
  const [user, setUser] = useState()
  const params = useParams()

  useEffect(() => {
   fetch("https://nyc-fridge-finder.onrender.com/refrigerators")
      .then(res => res.json())
      .then(data => setFridges(data))

   fetch("https://nyc-fridge-finder.onrender.com/users/3")
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
  }, [])

  function getFridge(id) {
    fridges.find(fridge => fridge.id === id)
  }

  function removeFood(foodId) {
   fetch(`https://nyc-fridge-finder.onrender.com/foods/${foodId}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        const removedFoodList = selectedFridge.foods.filter(food => {
          return food.id !== data.id
        })
        setSelectedFridge(selectedFridge => ({ ...selectedFridge, foods: removedFoodList }))
        setFridges(fridges.map(fridge => {
          if (fridge.id === data.fridge.id) {
            return { ...fridge, foods: removedFoodList }
          }
          return fridge
        }))
      })
  }

  function addNewFood(food, fridge_id) {
   fetch("https://nyc-fridge-finder.onrender.com/foods", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: food.name,
        quantity: food.quantity,
        fridge_id: fridge_id,
        user_id: user.id
      })
    })
      .then(res => res.json())
      .then(body => {
        setSelectedFridge(selectedFridge => ({ ...selectedFridge, foods: [...selectedFridge.foods, body] }))
        setFridges(fridges.map(fridge => {
          if (fridge.id === body.fridge_id) {
            const newFoods = [...fridge.foods, body];
            return { ...fridge, foods: newFoods }
          }
          return fridge
        }))
      })

  }

  function submitNew(newFridgeLocation) {
   fetch("https://nyc-fridge-finder.onrender.com/refrigerators", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: newFridgeLocation,
        user_id: user.id
      })
    }
    )
      .then(res => res.json())
      .then(data => setFridges(fridges => [...fridges, data]))
  }

  function editFridgeLocation(updatedLocation, fridge_id) {
   fetch(`https://nyc-fridge-finder.onrender.com/refrigerators/${fridge_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: updatedLocation,
      })
    }
    )
      .then(res => res.json())
      .then(data => {
        setFridges(fridges.map(fridge => {
          if (fridge.id === data.id) {
            return { ...fridge, location: updatedLocation }
          }
          else {
            return fridge
          }
        }))
        setSelectedFridge(data)
      })
  }

  function editFood(food, food_id) {
   fetch(`https://nyc-fridge-finder.onrender.com/foods/${food_id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: food.name,
        quantity: food.quantity
      })
    })
      .then(res => res.json())
      .then(data => {
        const editFoodList = selectedFridge.foods.map(food => {
          if (food.id === food_id) {
            return data
          } else {
            return food
          }
        })
        setSelectedFridge(selectedFridge => ({ ...selectedFridge, foods: editFoodList }))
        setFridges(fridges.map(fridge => {
          if (fridge.id === data.fridge_id) {
            return { ...fridge, foods: editFoodList }
          }
          else {
            return fridge
          }
        }))
      })
  }


  function deleteFridge(fridgeId) {
   fetch(`https://nyc-fridge-finder.onrender.com/refrigerators/${fridgeId}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        setFridges(fridges.filter(fridge => fridgeId !== fridge.id))
      }
      )
  }

  return (
    <div id="encloses-main">
      <div>
        <Header user={user} />
      </div>
      <div className="main">
        <ViewContainer setSelectedFridge={setSelectedFridge} removeFood={removeFood} selectedFridge={selectedFridge} addNewFood={addNewFood} submitNew={submitNew} editFood={editFood} editFridgeLocation={editFridgeLocation} />
        <FridgeContainer selectedFridge={selectedFridge} fridges={fridges} handleClick={setSelectedFridge} deleteFridge={deleteFridge} />
      </div>
    </div>

  )
}

export default App;
