import React from "react";
import { useNavigate } from "react-router-dom";

const PricingPage: React.FC = () => {
  const navigate = useNavigate();

  const pricingOptions = [
    {
      title: "Essential",
      description: "For students aspiring to be a topper",
      price: 2999,
      period: "/3 months",
      discount: "Limited time 50% discount",
      features: [
        'Ask Doubts from mentor',
        'Tips n Tricks to solve Tricky Qs',
        '1:1 mentorship',
        'Live JEE paper solving by IITians',
        'Test discussion with mentor',
        'Ask Doubts from mentor on chat',
        'IITian Mentor Sessions on Study Transformation',
      ],
    },
    {
      title: "Elite",
      description: "For very serious IIT JEE Aspirants",
      price: 4999,
      period: "/3 months",
      discount: "Most Popular",
      features: [
        'Ask Doubts from IITian mentor',
        'Tips n Tricks to solve Tricky Qs',
        '1:1 mentorship',
        'Live JEE paper solving by IITians',
        'Test discussion with IITian mentor',
        'Ask Doubts from mentor on chat',
        'Access to Private Community & Study Groups',
        'IITian Mentor Sessions on Study Transformation',
      ]
    },
    {
      title: "Ultimate",
      description: "For the Pros",
      price: 4999,
      period: "/3 months",
      discount: "Premium services at the best price",
      features: [
        'Ask Doubts from mentor',
        'Tips n Tricks to solve Tricky Qs',
        '1:1 mentorship',
        'Live JEE paper solving by IITians',
        'Test discussion with mentor',
        'Ask Doubts from mentor on Video call & chat',
        'Access to Private Community & Study Groups',
        'IITian Mentor Sessions on Study Transformation',
      ],
    },
    {
      title: "Supreme",
      description: "For the Enthusiasts",
      price: 6999,
      period: "/3 months",
      discount: "Best Value",
      features: [
        'Ask Doubts from IITian mentor',
        'Tips n Tricks to solve Tricky Qs',
        '1:1 mentorship',
        'Live JEE paper solving by IITians',
        'Test discussion with IITian mentor',
        'Ask Doubts from mentor on Video call & chat',
        'IITian Mentor Sessions on Study Transformation',
        'Access to Private Community & Study Groups',
        'IITian Mentor Sessions on IIT JEE Preparation'
      ],
    },
  ];

  const handleStartNow = (price: number) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      // Redirect to Sign-In Page if not authenticated
      navigate("/login");
    } else {
      // Redirect to payment if authenticated
      processPayment(price);
    }
  };

  const processPayment = async (amount: number) => {
    // Load Razorpay Script
    const loadRazorpayScript = (src: string) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const isScriptLoaded = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!isScriptLoaded) {
      alert("Failed to load Razorpay. Please try again.");
      return;
    }

    // Call backend API to create order
    const response = await fetch("http://crackiit-env.eba-vwz5sgzx.ap-south-1.elasticbeanstalk.com:8080/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const { orderId } = await response.json();

    // Configure Razorpay Options
    const options = {
      key: "rzp_test_2rWNxgBeblQINX", // Replace with your Razorpay key
      amount: amount * 100 * 31 * 3, // Amount in paise
      currency: "INR",
      name: "Doubt Support Platform",
      description: "Payment for Pricing Plan",
      order_id: orderId,
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Redirect or handle post-payment actions
      },
      prefill: {
        name: "User Name", // Replace with dynamic user data
        email: "user@example.com", // Replace with dynamic user email
        contact: "", // Replace with dynamic user contact
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="relative">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/herosection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-20">
        <h4 className="pricing-title text-4xl font-bold text-center mb-12">
          Come...Lets Polish Your Journey Together!!! 
        </h4>
        <h2 className="pricing-title text-4xl font-bold text-center mb-12">
          Courses
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-purple-900 to-purple-600 p-8 rounded-3xl shadow-lg text-white"
              style={{
                borderImage: "linear-gradient(to right, #8a2be2, #4b0082) 1",
                borderWidth: "6px",
                borderStyle: "solid",
              }}
            >
              <h3 className="text-2xl font-bold mb-1 text-purple-300">
                {option.title}
              </h3>
              <p className="text-sm mb-4">{option.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold">₹{option.price}</span>
                <span className="text-sm">{option.period}</span>
              </div>
              <div
                className="bg-gradient-to-r from-indigo-400 to-purple-600 text-indigo-50 text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4"
                style={{ display: option.discount ? "inline-block" : "none" }}
              >
                {option.discount}
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleStartNow(option.price *31*3)}
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center transition duration-300"
              >
                Start now for ₹{option.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
