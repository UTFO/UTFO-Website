import "./WhoWeAre.css";
import Character1 from "../../../../assets/character1.png";
import Character2 from "../../../../assets/character2.png";
import Character3 from "../../../../assets/character3.png";
import SpearMan from "../../../../assets/logo_spearman_char.png";

export function WhoWeAre() {
  return (
    <>
      <div className="title">
        <p>Who Are We?</p>
      </div>

      <div className="blurb">
        <p>
          Think of us like an{" "}
          <span className="purple">outsourcing company</span> for your
          website...except we’re <span className="purple">FREE</span>!
        </p>
      </div>

      <div className="conversation">
        <span className="vertical">BUILD</span>
        <div className="character">
          <img src={Character1} alt="" />
        </div>
        <div className="stack">
          <span className="speech-bubble sbPurple sbLeft">
            "I’d like a personal website/portfolio!"
          </span>
          <span className="speech-bubble sbGray sbRight">
            "No problem! Let’s meet this weekend for details"
          </span>
        </div>
        <div className="character">
          <img src={SpearMan} alt="" />
        </div>
      </div>

      <div className="line"></div>

      <div className="conversationAlt">
        <span className="vertical">FIX</span>
        <div className="character">
          <img src={Character2} alt="" />
        </div>
        <div className="stack">
          <span className="speech-bubble sbPurple sbRightAlt">
            "The submission form for club applicants is broken on my site!"
          </span>
          <span className="speech-bubble sbGray sbLeftAlt">
            "I’ll get a team of backend specialists to fix that ASAP!"
          </span>
        </div>
        <div className="characterFlipped">
          <img src={SpearMan} alt="" />
        </div>
      </div>

      <div className="line"></div>

      <div className="conversation">
        <span className="vertical">DESIGN</span>
        <div className="character">
          <img src={Character3} alt="" />
        </div>
        <div className="stack">
          <span className="speech-bubble sbPurple sbLeft">
            "Our website doesn’t look very good..."
          </span>
          <span className="speech-bubble sbGray sbRight">
            "Don’t worry! Our designers do wonderful work!"
          </span>
        </div>
        <div className="character">
          <img src={SpearMan} alt="" />
        </div>
      </div>
    </>
  );
}
