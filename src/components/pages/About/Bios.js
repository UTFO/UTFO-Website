import { GitHub, Instagram, LinkedIn, Roles, Website } from './Socials';
import './Bios.css';
import TylerPic from './dev-pics/tyler.jpg';
import KenPic from './dev-pics/ken.png';
import AdamPic from './dev-pics/adam.jpg';
import IrwinPic from './dev-pics/irwin.png';
import KIAPic from './dev-pics/KIA.JPG';
import KrishnaPic from './dev-pics/Krishna.jfif';
import AravindPic from './dev-pics/aravind.jpg';
import ShreyPic from './dev-pics/shrey.png';

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
					name="Ken Hilton" pic={KenPic} positions={[Roles.frontend, Roles.backend]}
				>
					<Website>https://abyx.dev</Website>
					<GitHub>Kenny2github</GitHub>
					<LinkedIn>https://linkedin.com/in/abyxdev</LinkedIn>
				</Bio>
				<Bio
					name="Adam Stechishin" pic={AdamPic} positions={[Roles.frontend]}
				>
					<GitHub>AdamS260</GitHub>
					<LinkedIn>https://linkedin.com/in/adam-stechishin-986329211</LinkedIn>
				</Bio>
				<Bio
					name="Irwin Ngo" pic={IrwinPic} positions={[Roles.frontend, Roles.treasurer]}
				>
					<GitHub>Niwri</GitHub>
					<LinkedIn>https://linkedin.com/in/irwin-ngo-9b306980</LinkedIn>
				</Bio>
				<Bio
					name="Khondoker Intiser Alam" pic={KIAPic} positions={[Roles.secretary]}
				>
					<LinkedIn>https://linkedin.com/in/khondoker-intiser-alam-aa4417229</LinkedIn>
					<Instagram>khondokerintiser</Instagram>
				</Bio>
				<Bio
					name="Krishna Cheemalapati" pic={KrishnaPic} positions={[Roles.frontend, Roles.mobile]}
				>
					<GitHub>krishnacheemalapati</GitHub>
					<LinkedIn>https://linkedin.com/in/krishnacheemalapati</LinkedIn>
					<Instagram>krish_krishkrish</Instagram>
				</Bio>
				<Bio
					name="Aravind Subramanian" pic={AravindPic} positions={[Roles.frontend, Roles.backend]}
				>
					<GitHub>aravind987</GitHub>
					<LinkedIn>https://linkedin.com/in/aravind-subramanian-914704212</LinkedIn>
					<Instagram>_aravindsubramanian</Instagram>
				</Bio>
				<Bio
					name="Shreyansh Nair" pic={ShreyPic} positions={[Roles.founder, Roles.vp]}
				>
					<Website>https://shreyanshnair.wixsite.com/portfolio</Website>
					<LinkedIn>https://linkedin.com/in/shreyansh-nair</LinkedIn>
					<Instagram>shrey.nair</Instagram>
				</Bio>
			</div>
		</div>
	);
}

export default Bios;