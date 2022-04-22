import React from 'react'


const SearchCity = (prop) => {

    return (
        <>
        
         <input  type='search' className={prop.className} value={prop.value} onChange={prop.onChange} placeholder='Search City'/>
        </>
    )
}

export default SearchCity