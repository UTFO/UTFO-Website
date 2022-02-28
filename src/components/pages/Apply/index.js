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
            Do you want to be part of a fast, dynamic and friendly team? 
            Do you want to gain hands on development experience working for real clients?
            Do you want to get a glimpse of what development actually feels like?
            Are you someone that can understand what a client would want, and deliver exactly that?
            If you answered "Yes" to these questions, UTFO is definitely the right place for you.
            We will constantly increase the number and types of projects we do, taking on harder and bigger challenges in the process.
            Fill the application form at the bottom of this page, and come join us for all of this and beyond.
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
            <p>
              Sign up through the form below to become a member of the University
              of Toronto Freelancers' Organization! Further join details will
              be sent to your email. Our main platform of communication is
              Discord, which you will be invited to upon completion of this form.
            </p>
          </div>
          <div className="apply button">
          <span className='apply form'>
              <a href = "https://docs.google.com/forms/d/e/1FAIpQLSegAj-XyKDQT5x0AfKDoVap2mJKhG5cXl_HUBZe3eSo_k1N7A/viewform">
                CLICK HERE FOR THE APPLICATION FORM
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
