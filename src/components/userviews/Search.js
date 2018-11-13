import React from 'react'

const Search = (props)=>{
    return(
        <div className="search">
            <input type="text" placeholder="search" onChange={props.handleSearch}/>
        </div>
    )
}

export default Search;