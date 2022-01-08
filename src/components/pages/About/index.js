import './About.css'
import Bios from './Bios';
import Blurb from './Blurb';


/**
 * Construct the About page.
 */
function About() {
  return (
    <>
      <h1>University of Toronto Freelancers' Organization</h1>
      <Blurb />
      <Bios />
    </>
  );
}

export default About;