import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Bios.css';
import Tyler from './dev-pics/tyler.jpg';
import Ken from './dev-pics/ken.png';
import Adam from './dev-pics/adam.jpg';

/**
 * Format a bio for a team member.
 * @param {{
 * name: string
 * pic: string
 * link: string
 * children: any
 * }} props Name, picture, LinkedIn, and bio of member, respectively.
 */
function Bio(props) {
	return (
		<div className="dev-bio">
			<div>
				<h3><a href={props.link}>{props.name}</a></h3>
				<p>{props.children}</p>
			</div>
			<img className="profile-pic" src={props.pic} alt={props.name} />
			<p style={{clear: 'both'}}></p>
		</div>
	);
}

/**
 * Construct the Meet the Team section.
 */
function Bios() {
	return (
		<>
			<h2>Meet the Team</h2>
			<Carousel showThumbs={false}>
				<Bio
					name="Tyler Jon Wong" pic={Tyler}
					link="https://linkedin.com/in/tyler-jon-wong"
				>
					Founder and Chief Executive. Now is the time for all good men
					to come to the aid of their party. This is an even longer
					sentence that should hopefully wrap now.
				</Bio>
				<Bio
					name="Ken Hilton" pic={Ken}
					link="https://linkedin.com/in/abyxdev"
				>
					Team 5 Developer.
				</Bio>
				<Bio
					name="Adam Stechishin" pic={Adam}
					link="https://linkedin.com/in/adam-stechishin-986329211"
				>
					Team 2 Developer.
				</Bio>
			</Carousel>
		</>
	);
}

export default Bios;