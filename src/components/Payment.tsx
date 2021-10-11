import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/payment.css';
import { IProductProps } from '../interfaces';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios';
import { db } from '../firebase';

interface Props {
  clientSecret: string,
}

export const Payment: React.FC = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecrets, setClientSecrets] = useState<Props>({clientSecret: ''});

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();


  useEffect(() => {
    const getClientSecret = async () => {

      const response = await axios.post(
        `/payments/create?total=${
          getBasketTotal(basket) * 100
        }`
      )
      setClientSecrets(response?.data);
    };
    getClientSecret();
  }, [basket]);


  const handlePaymentSubmit = async (e: any) => {
    e.preventDefault();
    setProcessing(true);

      await stripe
      ?.confirmCardPayment(clientSecrets.clientSecret, {
        payment_method: {
          // @ts-ignore 
          card: elements?.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {

        db
        .collection('users')
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent?.id)
        .set({
          basket:basket,
          amount: paymentIntent?.amount,
          created: paymentIntent?.created
        })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/orders');

        dispatch({
          type: "EMPTY_BASKET"
        })
      });
  };

  const handlePaymentChange = (e: any) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'> {basket?.length} items</Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 The Cool Place</p>
            <p>New York, NY</p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
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
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <form>
              <CardElement onChange={handlePaymentChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button onClick={handlePaymentSubmit} disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
