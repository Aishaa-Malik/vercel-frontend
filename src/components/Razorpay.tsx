// import React from 'react';

// const RazorpayPayment = ({ amount }) => {
//   const loadRazorpayScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async () => {
//     // Load Razorpay script
//     const isScriptLoaded = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
//     if (!isScriptLoaded) {
//       alert('Failed to load payment gateway. Please try again.');
//       return;
//     }

//     // Create order from the backend
//     const response = await fetch('http://localhost:3001/create-order', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount }), // Amount in INR
//     });

//     const { orderId } = await response.json();

//     // Razorpay options
//     const options = {
//       key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
//       amount: amount * 100, // Convert INR to paisa
//       currency: 'INR',
//       name: 'Doubt Support Payment',
//       description: 'Mentorship Services',
//       order_id: orderId, // Order ID from Razorpay
//       handler: function (response) {
//         alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
//       },
//       prefill: {
//         name: 'Your Name', // Replace with dynamic user name if available
//         email: 'user@example.com', // Replace with dynamic user email if available
//         contact: '9999999999', // Replace with dynamic user contact if available
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-6">Payment</h2>
//         <div className="mb-4">
//           <span className="text-3xl font-bold">₹{amount.toFixed(2)}</span>
//         </div>
//         <button
//           onClick={handlePayment}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Pay ₹{amount.toFixed(2)}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RazorpayPayment;
