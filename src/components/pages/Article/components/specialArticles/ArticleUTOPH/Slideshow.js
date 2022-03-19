import React from 'react';
import { useState } from 'react';

import { slideshowInfo } from './SlideshowInfo.js';

const Slideshow = () => {

    const [projectNum, setProjectNum] = useState(2);

  const projectSetNum = (left) => {
      let projectNumber = projectNum;

      left ? projectNumber-- : projectNumber++;

      if(projectNumber >= slideshowInfo.length)
          projectNumber = 0;
      else if (projectNumber < 0)
          projectNumber = slideshowInfo.length-1;
      
      setProjectNum(projectNumber);
  }
    return (
        <div className="articleUTOPHSlideshow">
            <div className="articleUTOPHSlideshowImage" style={{backgroundImage: "url("+slideshowInfo[projectNum].image+")"}}>
                <div id="articleUTOPHSlideshowLeftArrow" onClick={() => projectSetNum(true)}>
                    <p>〈</p>
                </div>
                <div id="articleUTOPHSlideshowRightArrow" onClick={() => projectSetNum(false)}>
                    <p>〉</p>
                </div>
                
            </div>
            <div id="articleUTOPHSlideshowDescription">
                    <h1>{slideshowInfo[projectNum].title}</h1>
                    <p>{slideshowInfo[projectNum].text}</p>
            </div>
            <div id="articleUTOPHSlideshowCircles">
                {slideshowInfo.map((project) => {
                return project.id === projectNum ? 
                  <svg width="2vw">
                    <circle cx="1vw" cy="1vw" r="0.75vw" stroke="rgb(0, 0, 0, 0.8)" stroke-width="0.1vw" fill="rgb(0, 0, 0, 0)"/>
                    <circle cx="1vw" cy="1vw" r="0.6vw" fill="rgb(0, 0, 0, 0.8)" />
                  </svg> : 
                  <svg width="2vw">
                    <circle cx="1vw" cy="1vw" r="0.5vw" stroke="rgb(0, 0, 0, 0.8)" stroke-width="0.1vw" fill="rgb(0, 0, 0, 0)"/>
                  </svg>
              })}
            </div>
        </div>
    )
}

export default Slideshow