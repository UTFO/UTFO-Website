import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import mainImage from './main-image.svg';
import './MainImage.css'

function MainImage() {
  
  const scrollToNext = () => { 
    if (document.documentElement.scrollTop <= 0) {
      // element which needs to be scrolled to
      const element = document.querySelector("#first-blurb");

      // scroll to element
      element.scrollIntoView({behavior: 'smooth'});
    }
  };  
      
  return (
      <div className='main-image'>
          <img src={mainImage} alt='main' />
          <div className='title-wrapper' >
              <h1>University of Toronto Freelancer's Organization</h1>
          </div>
          <div className='scrolldown-button-wrapper'>
              <button onClick={scrollToNext} >
                  {<KeyboardArrowDownIcon fontSize='large'/>}
              </button>
          </div>
      </div>
  );
}

export default MainImage;
