import React from 'react';
import '../css/subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';

interface BasketProvider {
  price: number;
  title: string;
  image: string;
  rating?: number;
  id: number;
}
interface SubtotalProps {
  basket: Array<BasketProvider>;
}


const Subtotal: React.FC<SubtotalProps> = ({ basket }) => {

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): {''}
              <strong>{`${value}`}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
