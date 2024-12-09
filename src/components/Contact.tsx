import React, { useState } from "react";
import axios from "axios";

const StudyBuddy: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    class: "",
    mockTestScore: "",
    coachingTestScore: "",
    email: "",
    discordProfile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://crackiit-env.eba-vwz5sgzx.ap-south-1.elasticbeanstalk.com:8080/api/studybuddy", formData);
      if (response.status === 200) {
        alert("Profile created successfully!");
        setFormData({
          name: "",
          phoneNo: "",
          class: "",
          mockTestScore: "",
          coachingTestScore: "",
          email: "",
          discordProfile: "",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="relative">
      {/* Video background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/herosection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Contact Us Section */}
      <div className="max-w-lg mx-auto text-center text-white mb-8 mt-8">
        <p className="text-xl font-bold">Contact Us</p>
        <p className="text-lg">Wanna connect as mentor or have any questions, feel free to reach out to us at: </p>
        <a
          href="mailto:hello@69kelvin.com"
          className="text-purple-600 underline text-lg"
        >
          hello@69kelvin.com
        </a>
      </div>

      {/* Form Section */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg opacity-90 z-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Class</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudyBuddy;
