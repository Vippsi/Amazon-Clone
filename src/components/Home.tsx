import React from 'react';
import slide1 from '../imgs/amazon_slide1.jpg';
import '../css/home.css';
import Product from '../components/Product';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={slide1} alt='' />

        <div className='home__row'>
          <Product
            title='RTX 3090'
            image='https://m.media-amazon.com/images/I/81-GWj0nEkL._AC_SL1500_.jpg'
            price={200.0}
            rating={3}
          />
          <Product
            title='USB Microphone, EPTISON 192kHZ/24bit Professional PC Podcast Streaming Cardioid Condenser Microphone Kit with Boom Arm, Shock Mount, Pop Filter, for Gaming, Recording, YouTube, Voice Over, Meeting'
            image='https://m.media-amazon.com/images/I/715P7ODgxGL._AC_SL1500_.jpg'
            price={37.99}
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            title="VAMJAM Men's Socks Sneakers Slip On Lightweight Breathable Comfortable Fashion Walking Shoes"
            image='https://m.media-amazon.com/images/I/61UJinS9EML._AC_UY500_.jpg'
            price={28.99}
            rating={5}
          />
          <Product
            title='Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition'
            image='	https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg'
            price={20.99}
            rating={5}
          />
          <Product
            title='New Beats Studio Buds – True Wireless Noise Cancelling Earbuds – Compatible with Apple & Android, Built-in Microphone, IPX4 Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones - Black'
            image='https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_SL1500_.jpg'
            price={124.95}
            rating={2}
          />
        </div>
        <div className='home__row'>
          <Product
            title='TP-Link WiFi 6 AX3000 Smart WiFi Router (Archer AX50) – 802.11ax Router, Gigabit Router, Dual Band, OFDMA, MU-MIMO, Parental Controls, Built-in HomeCare,Works with Alexa
            '
            image='https://m.media-amazon.com/images/I/61RwCe6KexL._AC_SL1500_.jpg'
            price={114.95}
            rating={3}
          />
          <Product
            title='SHASHIBO Shape Shifting Box - Award-Winning, Patented Fidget Cube w/ 36 Rare Earth Magnets - Extraordinary 3D Magic Cube – Shashibo Cube Magnet Fidget Toy Transforms Into Over 70 Shapes (Spaced Out)'
            image='https://m.media-amazon.com/images/I/71QlPgolYMS._AC_SL1000_.jpg'
            price={21.25}
            rating={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
