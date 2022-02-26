import mainImage from './../../../assets/main-image.svg';
import './MainImage.css';
import { AboutLink } from './Blurbs/AboutBlurb';

function MainImage() {

  return (
    <div className='main-image inner'>
      <img src={mainImage} alt='main' />
      <div className='text' >
        <h1 className='title-wrapper'>
          <p className="uoft">University of Toronto</p>
          <p className="fo">Freelancer's<br/>Organization</p>
        </h1>
        <AboutLink />
      </div>
    </div>
  );
}

export default MainImage;
