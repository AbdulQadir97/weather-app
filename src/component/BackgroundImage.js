import React from 'react'

const BackgroundImage = (prop) => {
    return (
        <>
            <img src={prop.image}  className={prop.className} alt={prop.alt} />
        </>
    )
}

export default BackgroundImage