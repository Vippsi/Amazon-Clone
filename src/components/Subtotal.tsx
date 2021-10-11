import React from 'react';
import '../css/subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { IProductProps } from '../interfaces';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router-dom';

interface SubtotalProps {
  basket: Array<IProductProps>;
}

const Subtotal: React.FC<SubtotalProps> = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

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

      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
