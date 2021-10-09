import React from 'react';
import '../css/checkoutProduct.css';
import { useStateValue } from '../StateProvider';

interface ProductProps {
  title?: string;
  image?: string;
  price?: number;
  rating?: number;
  id?: number;
}

const CheckoutProduct: React.FC<ProductProps> = ({
  title,
  image,
  price,
  rating,
  id,
}) => {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        })
    }
  return (


    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill('⭐')
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
