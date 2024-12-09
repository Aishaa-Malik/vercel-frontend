// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// // Load your Stripe public key
// const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// const PaymentPage: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const location = useLocation();
//   const { amount = 19 } = location.state || {}; // Default to $19 if no amount is passed

//   const handlePayment = async () => {
//     if (!stripe || !elements) {
//       return; // Stripe.js has not yet loaded
//     }

//     // Create payment intent on the backend or use Stripe Elements client-side approach
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       console.error('Payment failed: ', error);
//       alert('Payment failed. Please try again.');
//     } else {
//       console.log('Payment method: ', paymentMethod);
//       alert('Payment successful! Payment method ID: ' + paymentMethod.id);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-6">Subscribe to AI Job Application Premium</h2>
//         <div className="mb-4">
//           <span className="text-3xl font-bold">${amount.toFixed(2)}</span>
//           <span className="text-gray-500 ml-2">/ month</span>
//         </div>
//         <div className="mb-4">
//           {/* Stripe's CardElement is used to capture card details */}
//           <CardElement />
//         </div>
//         <button
//           onClick={handlePayment}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Pay ${amount.toFixed(2)}
//         </button>
//       </div>
//     </div>
//   );
// };

// // Wrap PaymentPage with Elements provider for Stripe context
// const PaymentPageWrapper = () => (
//   <Elements stripe={stripePromise}>
//     <PaymentPage />
//   </Elements>
// );

// export default PaymentPageWrapper;
