import Blurb from '../About/Blurb';
import './AboutBlurb.css';
import TopQuote from '../../../assets/top_quote.png';
import BottomQuote from '../../../assets/bottom_quote.png';

export default function AboutBlurb() {
	return (
		<div className="about-blurb">
			<p className="quote"><img src={TopQuote} alt="" /></p>
			<Blurb />
			<p className="quote"><img src={BottomQuote} alt="" /></p>
		</div>
	)
}