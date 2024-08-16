import React from 'react';
import AboutBackground from '../Assets/about-background.png';

import AboutBackgroundImage from '../Assets/foodimage2.jpg';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'></div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt='' />
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>About</p>
        <h1 className='primary-heading'>
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className='primary-text'>
          At Flavoufusion, we believe that food is more than just
          sustenance—it's an experience. Our passion for cooking and commitment
          to quality ingredients ensures that every meal is a celebration of
          flavor.
        </p>
        <p className='primary-text'>
          From our locally sourced produce to our meticulously crafted recipes,
          every dish tells a story. Whether you're here for a casual meal or a
          special occasion, we promise to deliver an unforgettable dining
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
