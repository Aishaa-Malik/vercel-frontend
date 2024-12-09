import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const TeacherProfiles: React.FC = () => {
  const navigate = useNavigate();
  const teachers = [
    {
    
    name: "Palak Kothari",
    college: "IIT GUWAHATI (B.Tech)",
    rating: 5,
    weeklyFee: "₹200",
    monthlyFee: "₹399",
    img: "/palak.png",
    booked: true, // Added booked field
    services: [
      { name: "Doubt solving Maths(1 day)", price: 99 },
      { name: "Tricks to solve Qs in papers (3 sessions)", price: 149 },
      { name: "Doubt solving (monthly)", price: 999 },
      { name:"Help me identify my mistakes and understand where I lack (1 day)", price: 99 },
    ]
  },

  {
    name: "Nayan Patidar",
    college: "IIT JODHPUR (B.Tech)",
    rating: 5,
    weeklyFee: "499",
    monthlyFee: "999",
    img: "/nay.png",
    booked: false, // Added booked field
    services: [
      { name: "Doubt Solving (1 day)", price: 89 },
      { name: "Doubt Solving (Monthly)", price: 849 },
      { name: "1:1 mentorship(Weekly))", price: 299 },
      { name: "1:1 mentorship (Monthly)", price: 999 },
      { name: "Tips to master particular subject (Monthly)", price: 949 },
    ],
  },
  {
    name: "Ajaypal Singh",
    college: "IIT ROORKEE",
    rating: 5,
    weeklyFee: "499",
    monthlyFee: "999",
    img: "/ajay.png",
    booked: false, // Added booked field
    services: [
      { name: "Doubt Solving (1 day)", price: 99 },
      { name: "Doubt Solving (weekly)", price: 499 },
    ],
  },
  {
    name: "Vikas Yadav",
    college: "IIT JODHPUR",
    rating: 5,
    weeklyFee: "499",
    monthlyFee: "999",
    img: "/vikas.png",
    booked: false, // Added booked field
    services: [
      { name: "Doubt Solving Chemistry(1 day)", price: 89 },
      { name: "Tricks to solve Qs in papers (3 sessions)", price: 109 },
      { name: "1:1 Mentorship (monthly) ", price: 499 },
      { name: "Test Analysis with Mentor (weekly) ", price: 299 },
    ],
  },
  {
    name: "Priyanshu Kumar",
    college: "IIT BOMBAY (M sc)",
    rating: 5,
    weeklyFee: "499",
    monthlyFee: "999",
    img: "/priy-kum.png",
    booked: false, // Added booked field
    services: [
      { name: "Doubt Solving (1 day)", price: 1499 },
      { name: "Doubt Solving (weekly)", price: 18000 },
    ],
  },
  {
    name: "PRIYANSHU YADAV",
    college: "IIT ROORKEE (B.Tech)",
    rating: 5,
    weeklyFee: "499",
    monthlyFee: "999",
    img: "/pri.png",
    booked: false, // Added booked field
    services: [
      { name: "A quick discussion and planning meeting (1 hour)", price: 99 },
      { name: "1:1 Mentorship (1 week)", price: 399 },
      { name: "1:1 Mentorship (1 month)", price: 999 },
    ],
  },
    
    {
      name: "Prashant Shivhare",
      college: "IIT BOMBAY (B.Tech)",
      rating: 5,
      weeklyFee: "499",
      monthlyFee: "999",
      img: "/prashant.png",
      booked: true, // Added booked field
      services: [
        { name: "Doubt Solving (1 day)", price: 89 },
        { name: "Doubt Solving (weekly)", price: 499 },
        { name: "Doubt Solving (monthly)", price: 999 },
        { name: "Discuss 10 hard Qs with Mentor to know his thought process(1 day)", price: 199 },
        { name: "JEE paper solving by mentor (3 sessions)", price: 149 },
        { name: "Generate trick for you to learn BORING concept (5 sessions)", price: 199 },
      ],
    },
    
    
   
    {
      name: "Arham Tabish",
      college: "IIT BHUBNESWAR (B.Tech)",
      rating: 5,
      weeklyFee: "₹200",
      monthlyFee: "₹2200",
      img: "/arham.png",
      booked: true, // Added booked field
      services: [
        { name: "Doubt Solving (1 day)", price: 89 },
        { name: "Doubt solving Chemistry(1 day)", price: 99 },
        { name: "Tricks to solve Qs in papers (3 sessions)", price: 149 },
        { name: "1:1 Mentorship (monthly)", price: 999 },
        { name: "Test Analysis with Mentor (weekly)", price: 399 },
      ],
    },
    {
      name: "Manav",
      college: "IIT KHARAGPUR (B.Tech)",
      rating: 5,
      weeklyFee: "₹200",
      monthlyFee: "₹2200",
      img: "/manav.png",
      booked: true, // Added booked field
      services: [
        { name: "Doubt Solving (1 day)", price: 89 },
        { name: "Help me identify my mistakes and understand where I lack (1 day)", price: 99 },
        { name: "Tricks to solve Qs in papers (5 sessions)", price: 199 },
        { name: "1:1 Mentorship (monthly)", price: 999 },
      ],
    },
    {
      name: "Vinayak",
      college: "BITS PILANI (B.Tech)",
      rating: 5,
      weeklyFee: "₹200",
      monthlyFee: "₹2200",
      img: "/vin.png",
      booked: true, // Added booked field
      services: [
        { name:"Help me identify my mistakes and understand where I lack (1 day)", price: 99 },
        { name: "Tricks to solve Qs in papers (5 sessions)", price: 149 },
        { name: "Test Analysis with Mentor (monthly)", price: 499 },
        { name: "1:1 Mentorship (monthly)", price: 999 },
      ],
    },
    {
      name: "Pramiti",
      college: "IIT GUWAHATI (B.Tech)",
      rating: 5,
      weeklyFee: "₹200",
      monthlyFee: "₹399",
      img: "",
      booked: true, // Added booked field
      services: [
        { name: "Help me identify my mistakes and understand where I lack (1 day)", price: 99 },
        { name: "Tricks to solve Qs in papers (5 sessions)", price: 149 },
        { name: "1:1 Mentorship (monthly)", price: 999 },
      ],
    },
  
    
    {
      name: "Rishabh Sharma",
      college: "NIT Jaipur (B.Tech)",
      rating: 5,
      weeklyFee: "₹200",
      monthlyFee: "₹2200",
      img: "/rishabh2.png",
      services: [
        { name:"Help me identify my mistakes and understand where I lack (1 day)", price: 149 },
        { name: "Tricks to solve Qs in papers (5 sessions)", price: 499 },
        { name: "Test Analysis with Mentor (monthly)", price: 599 },
        { name: "1:1 Mentorship (monthly)", price: 1599 },
      ],
    },
    // {
    //   name: "Aisha",
    //   college: "NIT Jaipur (B.Tech)",
    //   rating: 5,
    //   weeklyFee: "₹200",
    //   monthlyFee: "₹2200",
    //   img: "/aisha3.png",
    //   services: [
    //     { name: "Generate trick for you to learn BORING concept (weekly)", price: 399 },
    //     { name: "1:1 Mentorship (15 days)", price: 499 },
    //   ],
    // },

    {
      name: "Priyanshu Kansal",
      college: "NIT Jaipur (B.Tech)",
      rating: 5,
      weeklyFee: "₹200",
      monthlyFee: "₹2200",
      img: "/prik.png",
      booked: true,
      services: [
        { name: "Test Analysis with Mentor (monthly)", price: 599 },
        { name: "1:1 Mentorship (monthly)", price: 1599 },
      ],
    },
    {
      name: "Shashwat",
      college: "NIT Jaipur (B.Tech)",
      rating: 5,
      weeklyFee: "₹200",
      monthlyFee: "₹2200",
      img: "/sh.png",
      services: [
        { name: "Doubt Solving (weekly)", price: 999 },
        { name: "Generate trick for you to learn BORING concept (weekly)", price: 899 },
        { name: "1:1 Mentorship (15 days)", price: 1999 },
        
      ],
    },
    
  ];

  const [selectedServices, setSelectedServices] = useState<{ [mentorName: string]: { name: string; price: number }[] }>({});

  const loadRazorpayScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckboxChange = (
    mentorName: string,
    service: { name: string; price: number },
    isChecked: boolean
  ) => {
    setSelectedServices((prev) => {
      const mentorServices = prev[mentorName] || [];
      if (isChecked) {
        return {
          ...prev,
          [mentorName]: [...mentorServices, service],
        };
      } else {
        return {
          ...prev,
          [mentorName]: mentorServices.filter((s) => s.name !== service.name),
        };
      }
    });
  };

  const calculateTotal = (mentorName: string) => {
    const mentorServices = selectedServices[mentorName] || [];
    return mentorServices.reduce((total, service) => total + service.price, 0);
  };

  const handleBookNow = async (mentorName: string) => {

    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      // Redirect to login page
      navigate("/login", { state: { redirectTo: "/mentors", mentorName } });
      return;
    }

    const totalPrice = calculateTotal(mentorName);
    if (totalPrice > 0) {
      // Redirect to QR code page or show modal with QR code
  //   navigate(`/payment/qr?mentor=${mentorName}&amount=${totalPrice}`);
  //   return;
  // } else {
  //   alert(`Please select at least one service for ${mentorName}.`);
  // }
      const isScriptLoaded = await loadRazorpayScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!isScriptLoaded) {
        alert("Failed to load payment gateway. Please try again.");
        return;
      }

     // Create order from backend
      const response = await fetch("http://crackiit-env.eba-vwz5sgzx.ap-south-1.elasticbeanstalk.com:8080/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }),
      });

      const { orderId } = await response.json();
      if (!orderId) {
        alert("Failed to create Razorpay order. Please try again.");
        console.log("Failed to create Razorpay order. Please try again.");

        throw new Error('Order ID not found in response');
      }

      // Razorpay options
      const options = {
        key: "rzp_live_5ru2zEaMJjJWQ5", // Replace with Razorpay Key ID 
        amount: totalPrice * 100, // Convert to paisa
        currency: "INR",
        name: "Doubt Support Platform",
        description: `Payment for ${mentorName}'s services`,
        order_id: orderId,
        handler: function (response: any) {
          console.log('Payment successful:', response);


           // Fixed Calendly link
        const calendlyLink = "https://calendly.com/aisha-faang"; // Replace this with your fixed Calendly link
        window.location.href = calendlyLink;

          // Find the mentor's Calendly link
        // const mentor = teachers.find((t) => t.name === mentorName);
        // if (mentor?.calendlyLink) {
        //   // Redirect to Calendly scheduling page
        //   window.location.href = mentor.calendlyLink;
        // } else {
        //   alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        //  }
        },
        prefill: {
          name: "CrackIIT", // Replace with dynamic user name if available
          email: "", // Replace with dynamic user email if available
          contact: "", // Replace with dynamic user contact if available
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } else {
      alert(`Please select at least one service for ${mentorName}.`);
    }
  };

  return (
    
    <div className="min-h-screen py-12 px-6 relative">

       {/* Background Video */}
       <div className="fixed top-0 left-0 w-full h-full -z-10">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src="/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>


      <h1 className="text-center text-4xl font-extrabold text-white mb-8">
        Meet Your Mentors
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-32 h-32 rounded-full border-4 border-purple-500"
              />

              <div>
                <h2 className="pricing-title text-xl font-extrabold text-purple-900">
                  {teacher.name}
                </h2>
                <h2 className="pricing-title text-xl font-extrabold text-purple-900">{teacher.college}</h2>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              {teacher.services.map((service, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm border border-purple-300"
                >
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(teacher.name, service, e.target.checked)
                      }
                    />
                    <span className="text-purple-800 font-extrabold">
                      {service.name}
                    </span>
                  </label>
                  <span className="text-purple-900 font-extrabold">₹{service.price}</span>
                </div>
              ))}
            </div>
            {/* Disable the Book Now button if booked */}
            <button
              onClick={() => handleBookNow(teacher.name)}
              disabled={teacher.booked} // Disable the button if the mentor is booked
              className={`mt-4 py-2 px-4 rounded-lg hover:bg-purple-900 transition ${
                teacher.booked ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-700 text-white'
              }`}
            >
              {teacher.booked ? "Booked" : "Book Now"}
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherProfiles;
