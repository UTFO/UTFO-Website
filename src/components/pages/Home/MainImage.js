import mainImage from './../../../assets/main-image.svg';
import './MainImage.css'

function MainImage() {
     
  return (
    <div className='main-image inner'>
          <img src={mainImage} alt='main' />
          <div className='title-wrapper' >
              <h1>University of Toronto Freelancer's Organization</h1>
          </div>
      </div>
  );
}

export default MainImage;
