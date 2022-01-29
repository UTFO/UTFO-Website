import Blurb from './Blurb';
import UofT from '../../../assets/uoft_logo.png';

function About() {
	return (
		<div className="about">
			<h1><span>About</span> <span className="utfo">UTFO</span></h1>
			<div>
				<img src={UofT} alt="UofT logo" />
				<Blurb />
			</div>
		</div>
	);
}

export default About;