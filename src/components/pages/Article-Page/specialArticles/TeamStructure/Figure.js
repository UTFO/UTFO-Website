import React from 'react'

const Figure = ({image, subheading, imageHeight, borderRadius}) => {
    return (
        <div className="articlePageFigure">
            <div className="articlePageFigureImage">
                <img src={image} alt="" style={{height: imageHeight, borderRadius: borderRadius}}/>
            </div>
            <div className="articlePageFigureSubheading">
                <p> { subheading } </p>
            </div>
        </div>
    )
}

export default Figure
