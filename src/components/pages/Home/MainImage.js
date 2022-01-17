import mainImage from './../../../assets/main-image.svg';
import Slogan from './Slogan';
import './MainImage.css'

function MainImage() {

  return (
    <div className='main-image inner'>
      <img src={mainImage} alt='main' />
      <div className='title-wrapper' >
        <h1>
          <p className="uoft">University of Toronto</p>
          <p className="fo">Freelancer's<br/>Organization</p>
        </h1>
        <Slogan />
      </div>
    </div>
  );
}

export default MainImage;
