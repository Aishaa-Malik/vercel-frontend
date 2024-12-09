import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{ position: "relative" }}
    >
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

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
  <img
    src="/Aisha Best photo.jpg" // Replace with your founder's image path
    alt="Founder"
    className="rounded-lg shadow-lg w-80 h-80 lg:w-120 lg:h-120 object-cover"
  />
</div>


          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About the Founder
            </h1>
            <p className="text-lg mb-4 leading-relaxed">
              <span className="font-semibold">ex Software Engineer @ AMAZON |  NIT JAIPUR Alum </span> |
              Engineering Intern @ Amazon, DRDO | Serial Entrepreneur 
            </p>
            <p className="text-md mb-6 leading-relaxed">
              Hi 👋, I’m <span className="font-semibold">Aisha</span>,
              an ex Software Engineer @ AMAZON, NIT JAIPUR Alum. I am deeply passionate
              about influencing and guiding students through the rigorous
              journey of JEE preparation. Drawing from my own experiences, I
              understand the challenges and the value of having a mentor during
              this critical phase.
            </p>
            <p className="text-md leading-relaxed">
              Through my content and personal mentorship, I aim to help
              students achieve their academic goals and succeed in their
              endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
