import React from 'react';

import foodimage from '../Assets/foodimage.jpg';
import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'></div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className='primary-text'>
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <p className='primary-text'>
            Enjoy a diverse menu of freshly prepared dishes delivered right to
            your door. Whether you're in the mood for a hearty dinner or a light
            lunch, we have something for everyone.
          </p>
        </div>
        <div className='home-image-section'>
          <img src={foodimage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Home;
