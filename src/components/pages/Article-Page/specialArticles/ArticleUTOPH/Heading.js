import React from 'react'

const Heading = ({ heading }) => {

    const rectWidth = "0.75vw";

    return (
        <div className="articleUTOPHHeading">
            
            <p> { heading } </p>
            
        </div>
    )
}

export default Heading