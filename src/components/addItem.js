
import "../css/add.css"

function AddItem(){
    return(
        <div>
            <input placeholder="Enter item" />
            <input placeholder="Enter amount" />
        

         <select>
            <option value="Income" >Income </option>
            <option value="Expense">Expense </option>
         </select>

         <button id="btn">add</button>
         </div>
    )
}

export default AddItem;