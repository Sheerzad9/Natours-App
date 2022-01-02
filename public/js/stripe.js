/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

// We will get the "tourId" from our index.js page where we have set the "data-tour-id" value inside html
export const bookTour = async tourId => {
  const stripe = Stripe(
    'pk_test_51KCmQiCKKzrvuCuGbEvhebfVx27RtzGLB5GmQHhi1lLuYGo0TKG0eWf4NaUiYKzDMKUZCSthNQsOmKJrAgXxirvy00kSdZ74Ff'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge the credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
