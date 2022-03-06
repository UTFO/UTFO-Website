import React from 'react'
import Heading from './Heading.js';
import Slideshow from './Slideshow.js';
import Figure from './Figure.js';
import './articleUTOPH.css';

import MainImage from './images/mainImage.png';
import UTOPHBefore from './images/utophBefore.png';
import UTOPHAfter from './images/utophAfter.png';
import AfterArrow from './images/afterArrow.png';
import OldTeam from './images/oldTeam.png';
import OldMain from './images/oldMain.png';
import Development from './images/development.png';

const index = () => {
  return (
    <div className="articleUTOPH">

        <h1 class="articlePage-title">Redesign of UTOPH's Website</h1>

        <div class="articlePage-tag-holder">
            <div class="articlePage-tags">Project</div>
        </div>

        <div class="articlePage-post-details">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liliumbulbiferumflowertop.jpg/220px-Liliumbulbiferumflowertop.jpg" alt="" class="articlePage-user-icon"></img>
            <p>Jennifer Wu | February 26, 2022</p>
        </div>
        <div id="articleUTOPHMainImage">
            <Figure image={MainImage} subheading="The creation of UTOPH's website through HTML, Javascript, and CSS (Front-End)" imageHeight="36vw" borderRadius="1.5vw"/>
        </div>

        <p class="articlePage-main-text">
            Are you interested in reading one of our first projects? In this article, we explain the process of how UTFO, our organization, redesigned and coded one of the
            University of Toronto's club—UTOPH (University of Toronto Project Holodeck)—website. Please feel free to look through what UTOPH is about and our, brainstorming, 
            design, and development process! 
        </p>

        <Heading heading="About UTOPH"/>

        <div className="articleUTOPHAbout">
            <Slideshow/>

            <div className="articleUTOPHAboutBlurb">
                <p>
                    UTOPH is one of many design teams created by students from the Skule community. 
                    Its purpose is to cater to those interested in using virtual reality projects. 
                <br/><br/>
                    UTFO reached out to UTOPH to increase traction to their site by improving the appearance while keeping old aspects of their previous web design. 
                    The team assigned to the project work process included three main areas: brainstorming, design and coding, all of which were iterative.
                </p>
                <a href="http://www.utoph.com/" target="_blank" rel="noreferrer">
                    <div className="articleUTOPHAboutRead">
                        <p>
                            Read More!
                        </p>
                    </div>
                </a>
            </div>

        </div>

        <Heading heading="Brainstorming/Wireframing"/>

        <div className="articleUTOPHBrainstorming">
            <p>
            Before designing and implementing the code, the team thoroughly looked into the original site. 
            The team collectively found areas requiring change through general layout inspection, 
            how well it fits with the page's overall design, and how the site was affected when it was minimized or maximized on the user's desktop. 
            </p>

            <div className="articleUTOPHBrainstormingImages">
                <Figure image={OldMain} subheading="The Main Page of the old UTOPH website" imageHeight="22.5vw"/>
                <Figure image={OldTeam} subheading="The Team Page of the old UTOPH website" imageHeight="22.5vw"/>
            </div>
            
            <p style={{padding: "0 10vw"}}>
            Although each page displayed its message across, some aspects required reorganizing to change the flow of the website. 
            Some notable areas the team found were the main banner of the site, the navigation bar, and the colour scheme. 
            With a list of things to fix from the site, the designers began brainstorming ideas to bring the team's ideas to life.
            </p>
        </div>

        <Heading heading="Design"/>

        <div className="articleUTOPHDesign">
            <p>
            In the next step of the project, the team's designers used the method of trial and error with the combination of voting and individual 
            opinions among the team on different design choices. 
            Each page was designed by an individual designer using Adobe Xd hence communication among the designers was crucial in maintaining the 
            theme and general format of the website. The designers also ensured that the visual aspects of images, fonts, and colours blended well together.
            </p>

            <div className="articleUTOPHDesignImages">
                <div id="articleUTOPHBeforeImage"><Figure image={UTOPHBefore} subheading="Old Project Page of UTOPH" imageHeight="30vw" borderRadius="0.5vw"/></div>
                <img id="articleUTOPHArrow" src={AfterArrow} alt="" style={{borderStyle: 'none'}}/>
                <div id="articleUTOPHAfterImage"><Figure image={UTOPHAfter} subheading="Our Project Page Design for UTOPH" imageHeight="30vw" borderRadius="0.5vw"/></div>
            </div>

            <p>
            Initially, the designers came upon a barrier when searching for a colour scheme that fit the virtual reality concept due to the possibility of 
            conflicting colour palettes. 
            The team resolved this issue by discussing it with the head designer and testing different tools and colours. 
            The team decided on a more simplistic design of gradients of blue/purple and white. 
            The designers used various tools such as stylized design (e.g. curves on the main page, tab-like feature for the project page), rounded edges of shapes, 
            and much more to prevent the design from being plain. 
            As the design portion was iterative, after completing a page, it was passed onto the developers; the designer began designing the next page of the site.
            </p>
        </div>

        <Heading heading="Development"/>

        <div className="articleUTOPHDevelopment">
            <div id="articleUTOPHDevelopmentImage">
                <Figure image={Development} subheading="The Icons of ReactJS, SVG, Canvas, and Git" imageHeight="30vw"/>
            </div>
            <p>
            After the developers are notified of a page design completion, they began working on implementing the ideas into the final product through code. 
            It was a learning journey for the developers as some of the software used was new to them, such as ReactJs, Scalable Vector Graphics (SVG), and Canvas API. 
            This opportunity allowed the developers to refresh their knowledge in other programming languages and methods (e.g. HTML, CSS, js). 
            Various approaches were used throughout the programming journeys to program the entire website as some developers used PC and others used mobile. 
            Overall, this project has allowed each member to gain new insights into different fields and interests while solving the team's obstacles using a collaborative 
            strategy.
            </p>
        </div>
    </div>
  )
}

export default index