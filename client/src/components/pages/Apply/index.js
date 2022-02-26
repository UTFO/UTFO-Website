import './Apply.css';
import WaveDivider from '../../../assets/wave-haikei.svg';
import Logo from '../../../assets/logo_transparent.png';
import Arrow from '../../../assets/long-arrow-right.png';
import Developer from '../../../assets/developer.png';
import Designer from '../../../assets/designer.png';
import ContentWriter from '../../../assets/contentwriter.png';

/**
 * Format a role.
 * @param {{
 * name: string
 * img: string
 * right: boolean
 * children: string
 * }} props The role name, icon, right-alignment, and description.
 */
function Role(props) {
  let text = (
    <div className={props.right ? "role right" : "role"}>
      <h1>{props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
  let img = (
    <img
      className={props.right ? "right" : ""}
      src={props.img} alt=""
    />
  );
  if (props.right) {
    return <>{text}{img}</>;
  } else {
    return <>{img}{text}</>;
  }
}

function App() {
  return (
    <div className="apply">
      <div className="apply intro">
        <div className="inner">
          <h1>Looking to get involved?</h1>
          <p>
            Short blurb about getting involved, gain experience with asjfda,
            all skill levels welcome! Members are expected to blah blah.
            According to all known laws of aviation, there is no way that a
            bee should be able to fly. Its wings are too small to get its fat
            little body off the ground. The bee, of course, flies anyways.
            Because bees don't care what humans think is impossible.
          </p>
        </div>
      </div>
      <img className="apply-wave" src={WaveDivider} alt="" />
      <div className="apply waved">
        <div className="join inner">
          <h1>Join the Team!</h1>
          <p>
            Sign up below to join the club as any of the three possible roles
            you can take on: developer, designer, and content writer.
          </p>
        </div>
        <div className="dash">-</div>
        <div className="roles inner">
          <Role name="Developers" img={Developer}>
            The techy kids that write the code and make the magic happen.
            Specific types include Software, Security, Mobile, Game Developer,
            Data Scientist, DevOps, Frontend, and Backend.
          </Role>
          <div className="role"></div>
          <Role name="Designers" img={Designer} right={true}>
            The artists who create designs for the developers to bring to life.
            They make the website layouts, the logos (?), the etc etc...
          </Role>
          <Role name="Content Writers" img={ContentWriter}>
            The writers that bring out the best of the clients.
            They are in charge of the text that users see and out UTFO articles!
          </Role>
        </div>
        <div className="dash">-</div>
        <div className="form inner">
          <div className="blurb">
            <div className="heading">
              <img className="logo" src={Logo} alt="UTFO Logo" />
              <h1>Become a Member!</h1>
            </div>
            <img className="arrow" src={Arrow} alt="Long rightwards arrow" />
            <p>
              Sign up through this form to become a member of the University
              of Toronto Freelancers' Organization! Further join details will
              be sent to your email. Our main platform of communication is
              Discord, which you will be invited to upon completion of this form.
            </p>
          </div>
          <div className="apply-form">
            <iframe
              title="Application form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSemasu3z-2L0qEe61qA8GmAnpc2k0qYaX3cUkVBYpValiFRYg/viewform?embedded=true"
              width="100%" height="100%"
              frameborder="0" marginheight="0" marginwidth="0"
            >Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
