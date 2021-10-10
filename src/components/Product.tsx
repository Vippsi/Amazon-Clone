import React from 'react';
import '../css/product.css';
import { useStateValue } from '../StateProvider';
import { IProductProps } from '../interfaces';

const Product: React.FC<IProductProps> = ({
  title,
  image,
  price,
  rating,
  id,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div
      className='
    product'
    >
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill('⭐')
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
      </div>

      <img src={image} alt='' />
      <button
        onClick={() => {
          addToBasket();
        }}
      >
        Add to basket
      </button>
    </div>
  );
};

export default Product;
