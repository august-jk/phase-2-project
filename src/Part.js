import React from "react";

function Part({ name, partNumber, price, category }) {
   
    return (
        <>
            <tr>
                <td>{name}</td>
           
                <td>{partNumber}</td>
            
                <td>$ {price}</td>
           
                <td>{category}</td>
            </tr>
        </> 
    )
}
export default Part;

