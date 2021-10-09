import React from 'react';
import '../css/product.css';

interface ProductProps {
  title?: string;
  image?: string;
  price?: number;
  rating?: number;
  id?: number;
}

const Product: React.FC<ProductProps> = ({ title, image, price, rating }) => {
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

      <img
        src={image}
        alt=''
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
