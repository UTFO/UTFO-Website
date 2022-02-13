import { useState } from 'react'
import Blurb from '../../About/Blurb';
import './AboutBlurb.css';
import TopQuote from '../../../../assets/top_quote.png';
import BottomQuote from '../../../../assets/bottom_quote.png';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export function AboutBlurb() {
	return (
		<div className="about-blurb">
			<p className="quote"><img src={TopQuote} alt="" /></p>
			<Blurb />
			<p className="quote"><img src={BottomQuote} alt="" /></p>
		</div>
	)
}

export function AboutLink() {
	const [showArrow, setShowArrow] = useState(false);

	return (
		<Link className="about-link" to="/about">
			<div onMouseEnter={() => setShowArrow(true)}
				onMouseLeave={() => setShowArrow(false)}>
				<span>More About<br/>Us</span>
				{showArrow ? <KeyboardArrowRightIcon fontSize='normal' /> : null}
			</div>
		</Link>
	)
}