import { useState } from 'react';
import MainImage from './MainImage';
import About from '../About/Blurb';
import Article from './ArticleBlurb';
import Contact from './ContactBlurb';
import ScrollIcon from './ScrollIcon';
import './Home.css';

function Home() {
  const [direction, setDirection] = useState('downwards');

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

  const scrollToNext = () => {
    const button = document.querySelector('#scroll-button');
    const blurbs = document.querySelectorAll('.reveal');
    const mainImage = document.querySelector('.main-image');

    const buttonLocation = button.getBoundingClientRect().bottom;

    const mainImageLocation = mainImage.getBoundingClientRect().bottom;

    const firstBlurbLocation = blurbs[0].getBoundingClientRect().bottom;
    const secondBlurbLocation = blurbs[1].getBoundingClientRect().bottom;
    const thirdBlurbLocation = blurbs[2].getBoundingClientRect().bottom;

    if (buttonLocation === mainImageLocation) {
      window.scrollBy({
        top: blurbs[0].scrollHeight,
        behavior: 'smooth'
      });
    }
    else if (buttonLocation === firstBlurbLocation) {
      window.scrollBy({
        top: blurbs[1].scrollHeight,
        behavior: 'smooth'
      });
    }
    else if (buttonLocation === secondBlurbLocation) {
      window.scrollBy({
        top: blurbs[2].scrollHeight,
        behavior: 'smooth'
      });
    }
    else if (buttonLocation === thirdBlurbLocation) {
      window.scrollBy({
        top: document.querySelector('.footer').scrollHeight,
        behavior: 'smooth'
      });
    }
    else if (buttonLocation > thirdBlurbLocation) {
      document.querySelector('.NavbarItems').scrollIntoView({behavior: 'smooth'});
    }
  }
  
  // A function to determine if the arrow icon should be upwards or downwards depending on the amount the user has scrolled
  // CURRENTLY DYSFUNCTIONAL
  const setArrowDirection = () => { 
    const blurbs = document.querySelectorAll('.reveal');
    const mainImage = document.querySelector('.main-image');
    const Navbar = document.querySelector('.NavbarItems');

    const height = Navbar.scrollHeight + mainImage.scrollHeight + blurbs[0].scrollHeight + 
      blurbs[1].scrollHeight + blurbs[2].scrollHeight;

    if (document.body.scrollTop >= height) {
      setDirection('upwards');
    }
    else if (document.body.scrollTop < height) {
      setDirection('downwards');
    }
  }

  window.addEventListener('scroll', () => {
    reveal();
    setArrowDirection();
  });

  return (
    <div className='home'>
      <MainImage />
      <div className='scrolldown-button-wrapper'>
        <button id='scroll-button' onClick={scrollToNext}>
            <ScrollIcon direction={direction}/>
        </button>
      </div>
      <div className='reveal accent'>
        <About />
      </div>
      <div className='reveal'>
        <Article />
      </div>
      <div className='reveal accent'>
        <Contact />
      </div>
    </div>
  );
}

export default Home;