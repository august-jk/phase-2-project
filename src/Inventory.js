import React, { useState } from "react";
import Part from "./Part";
import Filter from "./Filter";

function Inventory({ parts, onSearch }) {
    const [markup, setMarkup] = useState(0)
    let updatedPrice;
    let markupPrice
    const renderList = parts.map(part => {
        if(markup === 0) {
            markupPrice = 0
        } else if (markup === 25) {
            markupPrice = part.price * 0.25
        } else{
            markupPrice = part.price * 0.3
        }
        updatedPrice = part.price + markupPrice
        return (
            <Part 
            key={part.id} 
            name={part.name} 
            partNumber={part.partNumber} 
            price={updatedPrice.toFixed(2)} 
            category={part.category}
            />)
})
    const handleMarkup = () => {
        if(markup === 0) {
            setMarkup(25)
        } else if (markup === 25) {
            setMarkup(30)
        } else {setMarkup(0)}
    }
    return (
        <div className="inventory">
            <h1>Inventory List</h1>
            <div className="container">
                <Filter parts={parts} onSearch={onSearch}/>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Price: <button onClick={handleMarkup}>Markup: {markup}%</button> </th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Inventory;