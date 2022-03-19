import React from 'react'
import Heading from './Heading.js';
import Figure from './Figure.js';
import './TeamStructure.css';

import workflowImg from './images/workflow.png';
import communicationImg from './images/communication.png';

const TeamStructure = () => {
    return (
        <div class="articlePage">
            <h1 class="articlePage-title">Team Structure</h1>
            <div class="articlePage-tag-holder">
                <div class="articlePage-tags">Announcement</div>
            </div>
            <div class="articlePage-post-details">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liliumbulbiferumflowertop.jpg/220px-Liliumbulbiferumflowertop.jpg" alt="" class="articlePage-user-icon"></img>
                <p>Leonid Nediak | February 26, 2022</p>
            </div>
            <Figure image={""} subheading="Lorem Ipsum" imageHeight="36vw" borderRadius="1.5vw"/>
            <p style={{marginTop: "1vw"}}>The current team structure of the University of Toronto Freelancer's Organization (UTFO) was designed to reflect how typical professional web development teams are structured.</p>
            <Heading heading="Description" />
            <div id="artTeamStrSec1">
                <div id="artTeamStrSec1-1">
                    <p>Each team consists of five members, each of whom are given one or more roles.</p>
                    <ul>
                        <li>
                        The <em>Team Lead</em> is responsible for the progress of the project, and reports to the Executive Manager. They also communicate the needs of the client to the team, resolve conflicts between team members, schedule meetings, and manage the main git branch.
                        </li>
                        <li>
                        A <em>UI/UX Designer</em> is responsible for designing the layout and choosing the style, fonts and colour scheme.
                        </li>
                        <li>
                        A <em>Front-end Developer</em> is responsible for implementing the designs specified by the UI/UX Designer in code, and can choose the web framework and libraries to do so.
                        </li>
                        <li>
                        A <em>Back-end Developer</em> is responsible for connecting the site to a database, storing and organizing data, developing APIs, and/or providing the data for dynamically generated content in the front-end.
                        </li>
                        <li>
                        A <em>Content Writer</em> could typically be anyone on the team, and might be assigned as a secondary role. They are responsible for writing/designing and organizing the text and images to appear on the site.
                        </li>
                    </ul>
                </div>
                <Figure image={communicationImg} subheading="Communication and hierarchy between personnel in the project" imageHeight="25vw" />
            </div>
            <Heading heading="Workflow" />
            <div id="artTeamStrSec2">
                <Figure image={workflowImg} subheading="A workflow diagram constructed in JIRA for UTFO made by Tyler Wong" imageHeight="25vw" />
                <div id="artTeamStrSec2-1">
                    <p>Each week the developers are given tasks to be completed that week. Initially, each task is conceptualized by the team lead, and then passed to the UI/UX Designer for a design to be created, if relevant. After these are complete, the details of the task, together with the design, are assigned to the developers. Once they complete the task, it is merged into the main branch by the Team Lead, and the designer verifies that the implementation of the task matches their design. After the designer's approval, the task is tested by the Team Lead (and any others they may assign) to ensure that its functionality works as required and that it interacts properly with the rest of the website, and with their approval, the task is complete.</p>
                </div>
            </div>
        </div>
    )
}

export default TeamStructure
