import { GitHub, LinkedIn, Roles } from './Socials';
import './Bios.css';
import TylerPic from './dev-pics/tyler.jpg';
import KenPic from './dev-pics/ken.png';
import AdamPic from './dev-pics/adam.jpg';

/**
 * Format a bio for a team member.
 * @param {{
 * name: string
 * pic: string
 * positions: JSX.Element[]
 * children: JSX.Element[]
 * }} props Name, picture, positions, and social links of the member.
 */
function Bio(props) {
	return (
		<div className="card">
			<img className="member-img" src={props.pic} alt={props.name} />
			<h2 className="member-name">{props.name}</h2>
			<h3 className="member-position">{props.positions}</h3>
			<ul className="socials">{props.children}</ul>
		</div>
	);
}

/**
 * Construct the Meet the Team section.
 */
function Bios() {
	return (
		<div className="dev-bios">
			<h2>Meet the Team</h2>
			<div className="row">
				<Bio
					name="Tyler Jon Wong" pic={TylerPic}
					positions={[Roles.founder, Roles.chiefExec]}
				>
					<GitHub>Tyler-Jon-Wong</GitHub>
					<LinkedIn>https://linkedin.com/in/tyler-jon-wong</LinkedIn>
				</Bio>
				<Bio
					name="Ken Hilton" pic={KenPic} positions={[Roles.frontend]}
				>
					<GitHub>Kenny2github</GitHub>
					<LinkedIn>https://linkedin.com/in/abyxdev</LinkedIn>
				</Bio>
				<Bio
					name="Adam Stechishin" pic={AdamPic} positions={[Roles.frontend]}
				>
					<GitHub>AdamS260</GitHub>
					<LinkedIn>https://linkedin.com/in/adam-stechishin-986329211</LinkedIn>
				</Bio>
			</div>
		</div>
	);
}

export default Bios;