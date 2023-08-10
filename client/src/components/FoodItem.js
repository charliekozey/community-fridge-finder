import React, { useState } from "react"

function FoodItem({ food, removeFood, editFood }) {
    const [showEdit, setShowEdit] = useState(false)
    const [edit, setEdit] = useState({name: food.name, quantity: food.quantity})

    function handleEditSubmit(e){
        e.preventDefault();
        setShowEdit(false)
        editFood(edit, food.id)
        setEdit({name: '', quantity: 1});
      }

    return (
        <div className="food-item">
            <div className="food-info">
              <div className="food-quantity">{food.quantity} </div>
              <div className="food-name">{food.name} </div>
            </div>
            <br/>
            <div className="food-buttons">
              {!showEdit && <button className="edit-food-button" onClick={() => setShowEdit(true)}>edit</button>}
                  {showEdit && 
                    <form onSubmit={e => handleEditSubmit(e)}>
                      <label htmlFor="name">update food item:
                        <input 
                          onChange={e => setEdit({...edit, name: e.target.value})}
                          type="text" 
                          id="name" 
                          name="name" 
                          value={edit.name}/>
                      </label>
                      <label htmlFor="quantity">
                        <input 
                          type="number"
                          name="quantity"
                          id="quantity"
                          value={edit.quantity}
                          onChange={e => setEdit({...edit, quantity: e.target.value})}
                          min={1}
                        />
                      </label>
                      <input type="submit" value="Update food"/>
                    </form>
                  }
              <span> </span>
              <button onClick={() => removeFood(food.id)}>delete</button>
            </div>
        </div>
    )

}


export default FoodItem