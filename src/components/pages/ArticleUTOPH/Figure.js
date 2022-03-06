import React from 'react'

const Figure = ({image, subheading, imageHeight, borderRadius}) => {
    const rectWidth = "0.75vw";

  return (
    <div className="articleUTOPHFigure">
        <div className="articleUTOPHFigureImage">
            <img src={image} alt="" style={{height: imageHeight, borderRadius: borderRadius}}/>
        </div>

        <div className="articleUTOPHFigureSubheading">
            <p> { subheading } </p>
        </div>
       

    </div>
  )
}

export default Figure