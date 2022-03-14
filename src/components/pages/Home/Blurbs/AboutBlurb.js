import "./AboutBlurb.css";
import TopQuote from "../../../../assets/top_quote.png";
import BottomQuote from "../../../../assets/bottom_quote.png";
import { Link } from "react-router-dom";

export function AboutBlurb() {
  return (
    <div className="about-blurb">
      <p className="quote">
        <img src={TopQuote} alt="" />
      </p>
      <p>
        Work with us and get your <span className="turquoise">dream site</span>{" "}
        now at no cost!
      </p>
      <p className="quote">
        <img src={BottomQuote} alt="" />
      </p>
    </div>
  );
}

export function AboutLink() {
  return (
    <Link className="about-link" to="/about">
      <div>
        <span>More About Us ►</span>
      </div>
    </Link>
  );
}
