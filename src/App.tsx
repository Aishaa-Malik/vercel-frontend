import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage3 from './components/LandingPage3.tsx'
// import LandingPage from './components/LandingPage.tsx'
import PricingPage from './components/PricingPage.tsx'
import LoginPage from './components/LoginPage.tsx'
//import PaymentPage from './components/PaymentPage.tsx'
import Header from './components/Header.tsx'
import Mentors from './components/Mentors.tsx'
import StudyBuddy from './components/StudyBuddy.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'


const App: React.FC = () => {
  return (
  <Router>
  <div className="min-h-screen bg-gradient-to-br">
    <Header />
    <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/" element={<LandingPage3 />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/studybuddy" element={<StudyBuddy />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Routes>
  </div>
</Router>
  );
};

export default App