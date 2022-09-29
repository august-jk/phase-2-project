import React, { useState } from "react";

function Form({ onAddPart }) {
    const [formData, setFormData] = useState({
        name: '',
        partNumber: '',
        price: 0,
        category: ''
})
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddPart(formData)
    }
    return (
        <div className="container">
            <h1>Add New Parts!</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                   Part Name: <input type='text' onChange={e => {setFormData({
                    name: e.target.value,
                    partNumber: formData.partNumber,
                    price: formData.price,
                    category: formData.category
                   })}}></input>
                   Part Number: <input type='text'
                   onChange={e => {setFormData({
                    name: formData.name,
                    partNumber: e.target.value,
                    price: formData.price,
                    category: formData.category
                   })}}></input>
                   Price: <input type='number' min='0' step='0.01' placeholder="$" 
                   onChange={e => {setFormData({
                    name: formData.name,
                    partNumber: formData.partNumber,
                    price: parseFloat(e.target.value),
                    category: formData.category
                   })}}></input>
                   Category: <input type='text' 
                   onChange={e => {setFormData({
                    name: formData.name,
                    partNumber: formData.partNumber,
                    price: formData.price,
                    category: e.target.value
                   })}}></input>
                   <input type='submit'></input>
                </form>
            </div>
        </div>
    )
}
export default Form;