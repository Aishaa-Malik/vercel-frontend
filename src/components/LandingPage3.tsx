import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const HtmlLoader: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    fetch("/LandingPage3.html") // File should be in the `public` directory
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  }, []);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const sentenceRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sentenceRefs.findIndex((ref) => ref.current === entry.target);
          setHighlightedIndex(index);
        }
      });
    }, observerOptions);

    sentenceRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sentenceRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sentenceRefs]);

  return (
    <>
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          className="w-full h-full object-cover"
          src="/herosection.mp4" // Replace with the correct path to your video
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="container mx-auto px-4 py-116 relative">
        <main className="container mx-auto px-4 py-6">
          {/* Hero Section */}
          <section className="text-center mb-5">
            <h1 className="text-xl md:text-5xl font-bold mb-4 text-white">
              YOUR IIT GAME CHANGER
            </h1>
            <p className="text-lg md:text-xl text-white mb-4">
              Finally, no more waiting to get the help you need!
            </p>
          </section>

          {/* Social Paws UI Element */}
          <div className="relative flex justify-center items-center mb-16">
            <div className="relative z-10 w-96 h-116 rounded-full flex items-center justify-center">
              <img
                src="/social-paws.png" // Ensure this path is correct
                alt="Cool dog with sunglasses"
                className="rounded-full"
              />
            </div>

            {/* Cards */}
            <div className="absolute left-0 top-0 max-w-xs">
              <div className="bg-[#2A1245] rounded-xl p-6">
                <h3 className="text-[#9747FF] font-bold text-lg mb-2">EXPERT SUPPORT</h3>
                <p className="text-white text-sm leading-relaxed">
                  Ask as many questions as you like, to as many teachers as you like. Work the problem with the teacher until you understand.
                </p>
              </div>
            </div>

            <div className="absolute right-0 top-0 max-w-xs">
              <div className="bg-[#2A1245] rounded-xl p-6">
                <h3 className="text-[#9747FF] font-bold text-lg mb-2">1:1 DISCUSSIONS WITH MENTORS</h3>
                <p className="text-white text-sm leading-relaxed">
                  Your mentor will guide you like your elder brother.
                </p>
              </div>
            </div>

            <div className="absolute left-0 bottom-0 max-w-xs">
              <div className="bg-[#2A1245] rounded-xl p-6">
                <h3 className="text-[#9747FF] font-bold text-lg mb-2">PAPER SOLVING STRATEGY</h3>
                <p className="text-white text-sm leading-relaxed">
                  Live JEE paper solving by IITians.
                </p>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 max-w-xs">
              <div className="bg-[#2A1245] rounded-xl p-6">
                <h3 className="text-[#9747FF] font-bold text-lg mb-2">Discover your study buddy</h3>
                <p className="text-white text-sm leading-relaxed">
                  Find new aspirants. Connect, ask doubts & study with each other.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll-based Highlight Section */}
<section className="text-center my-24">
  {sentenceRefs.map((ref, index) => (
    <p
      key={index}
      ref={ref}
      className={`text-2xl mb-4 transition-colors duration-500 ${
        highlightedIndex === index ? "text-yellow-300 font-bold" : "text-white"
      }`}
    >
      {index + 1}:{" "}
      {index === 0
        ? "Empowering your journey to success!"
        : index === 1
        ? "Achieve your IIT dream with dedicated support."
        : "Get ahead with extra Grease from our support."}
    </p>
  ))}
</section>

          {/* Comparison Chart Section */}
          {/* Comparison Chart Section */}
<section className="mb-24">
  <h2 className="text-3xl font-bold mb-8 text-center text-white">
    Feature Comparison
  </h2>
  <div className="overflow-x-auto">
    <table className="w-full text-left text-white">
      <thead>
        <tr className="border-b border-white">
          <th className="p-4 text-white">Feature</th>
          <th className="p-4 text-white">Free Resources</th>
          <th className="p-4 text-white">Other Courses</th>
          <th className="p-4 text-white">Our Platform</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            feature: "Academic Doubts solving support",
            free: false,
            other: true,
            our: true,
          },
          {
            feature: "Affordable and Efficient",
            free: false,
            other: false,
            our: true,
          },
          {
            feature: "Test Analysis with mentor",
            free: false,
            other: false,
            our: true,
          },
          {
            feature: "Find your Study Buddy",
            free: false,
            other: false,
            our: true,
          },
          {
            feature: "Tricks to solve Tricky Qs from Mentor",
            free: false,
            other: false,
            our: true,
          },
        ].map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : ""}>
            <td className="p-4 text-white">{row.feature}</td>
            <td className="p-4 text-white">{row.free ? "✓" : "✗"}</td>
            <td className="p-4 text-white">{row.other ? "✓" : "✗"}</td>
            <td className="p-4 text-white">{row.our ? "✓" : "✗"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

        </main>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

    </>
  );
};

export default HtmlLoader;
