import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User info:", user);

      // Set authentication flag in localStorage
      localStorage.setItem("isAuthenticated", "true");

      // Redirect to the intended page or dashboard
      const redirectTo = location.state?.redirectTo || "/login";
      navigate(redirectTo, { state: location.state });
    } catch (error) {
      console.error("Google Sign-In error", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
