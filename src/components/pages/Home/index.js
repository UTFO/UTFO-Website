import Blurb from '../About/Blurb';
import MainImage from './MainImage'
import './Home.css';

function Home() {

  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
      else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className='home'>
      <>
        <MainImage />
        <div className='reveal accent' id='first-blurb'>
          <Blurb />
        </div>
        <div className='reveal'>
          {/* Blurb for article page */}
          <Blurb />
        </div>
        <div className='reveal accent'>
          {/* Blurb for contact page */}
          <Blurb />
        </div>
      </>
    </div>
  );
}

export default Home;