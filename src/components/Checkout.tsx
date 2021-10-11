import React from 'react';
import Subtotal from '../components/Subtotal';
import '../css/checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { IProductProps } from '../interfaces';

const Checkout: React.FC = () => {
  const [{ basket,user }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          className='checkout__ad'
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your shopping Basket</h2>
          {basket.map((item: IProductProps) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal basket={basket} />
      </div>
    </div>
  );
};

export default Checkout;
