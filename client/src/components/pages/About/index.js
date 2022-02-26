import './About.css';
import Bios from './Bios';
import AboutSection from './About';


/**
 * Construct the About page.
 */
function About() {
  return (
    <div className="about-page">
      <AboutSection />
      <Bios />
    </div>
  );
}

export default About;