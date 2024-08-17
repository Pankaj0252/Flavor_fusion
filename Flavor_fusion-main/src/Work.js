import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: 'Pick Your Favorite Meals',
      text: 'Explore our diverse menu and choose your favorite dishes. From delicious appetizers to hearty mains, we have something for everyone.',
    },
    {
      image: ChooseMeals,
      title: 'Customize Your Order',
      text: 'Select how often you want your meals delivered, and customize your order to fit your dietary preferences and schedule.',
    },
    {
      image: DeliveryMeals,
      title: 'Fast and Fresh Deliveries',
      text: 'Enjoy quick and reliable deliveries right to your doorstep. Our team ensures that your meals arrive fresh and on time every time.',
    },
  ];

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
          Discover how Flavoufusion makes meal planning easy and convenient. Our
          simple process ensures you get the best food with minimal effort.
        </p>
      </div>
      <div className='work-section-bottom'>
        {workInfoData.map((data) => (
          <div className='work-section-info' key={data.title}>
            <div className='info-boxes-img-container'>
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
