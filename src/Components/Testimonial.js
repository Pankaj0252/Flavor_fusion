import React from 'react';
import ProfilePic from '../Assets/user.jpg';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className='testimonial-section-wrapper'>
      <div className='testimonial-section-top'>
        <h1 className='primary-heading'>What Our Customers Are Saying</h1>
        <p className='primary-text'>
          Hear from our satisfied customers who have experienced the delicious
          meals and exceptional service at Flavoufusion.
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt='John Doe' className='profile-pic' />
        <p className='testimonial-text'>
          "Flavoufusion has completely transformed the way we enjoy meals at
          home. The variety and quality of the dishes are unparalleled. Delivery
          is always prompt and the food is always fresh. Highly recommend!"
        </p>
        <div className='testimonials-stars-container'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2 className='customer-name'>Mr Martin</h2>
      </div>
    </div>
  );
};

export default Testimonial;
