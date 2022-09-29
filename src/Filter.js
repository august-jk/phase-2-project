import React from "react";

function Filter({ parts, onSearch }) {
    const handleSubmit = (e) => {e.preventDefault()}
    const handleFilter = (searchInput) => onSearch(searchInput)
    return (
        <div className="filter">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Filter Parts" onChange={(e) => handleFilter(e.target.value)}></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}
export default Filter;