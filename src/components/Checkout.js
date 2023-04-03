import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import StripeCheckout from "react-stripe-checkout";
import Error from './Error';
import Loading from './Loading';
import Success from './Success';

export default function Checkout({subtotal}) {
    const orderstate = useSelector((state)=>state.placeOrderReducer);
    const {loading,error,success} = orderstate;

    const dispatch = useDispatch();

    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal));
      }
  return (
    <div>
    {loading && <Loading />}
    {error && <Error error="Something went wrong" />}
    {success && <Success success="Your Order Placed Successfully"/>}

    <StripeCheckout
      amount={subtotal * 100}
      shippingAddress
      token={tokenHander}
      stripeKey="pk_test_51MrEHkSGautkidJ4gK4fX9zFUJCKPHkHmJ3qSJanvkUMWKtW5uUTsxnvPcbjHcl1XViREedASqWKkHuUlZZyqEeM00etfdsHei"
      currency="INR"
    >
      <button className="btn">Pay Now</button>
    </StripeCheckout>
  </div>
);
}