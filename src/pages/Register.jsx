import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleGoogleSignup = () => {
    try {
      window.location.href = "https://ecommerce-kpd4.onrender.com/api/v1/users/auth/google";
    } catch (error) {
      setErrorMessage("Google signup failed. Please try again.");
    }
  };

  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasUppercase: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "password") {
      validatePassword(e.target.value);
    }
  };

  const validatePassword = (password) => {
    setPasswordValidations({
      length: password.length >= 8,
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
      setErrorMessage("All fields are required.");
      return;
    }
    try {
      await axios.post("https://ecommerce-kpd4.onrender.com/api/v1/users/auth/register", formData);
      setSuccessMessage("Registration successful!");
      setShowPopup(true);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Registration failed. Please try again.");
      setShowPopup(false);
    }
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <>
    
      <div className="flex p-32">
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="register.png"
            alt="Agricultural Sprayer"
            className="rounded-lg shadow-2xl m-auto w-3/4"
          />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6">Create An Account</h1>
            <p className="text-blackie pb-12">Enter your details below</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["fullName", "email", "phone", "password"].map((field) => (
                <div key={field} className="flex flex-col mb-4">
                  <label
                    htmlFor={field}
                    className="mb-1 text-gray-700 font-semibold"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1).replace("Name", " Name")}
                  </label>
                  <input
                    type={field === "password" ? "password" : "text"}
                    name={field}
                    id={field}
                    placeholder={`Enter Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-gray-400/40 outline-none text-other-green"
                  />
                </div>
              ))}

              {formData.password && (
                <div className="mt-2">
                  <p className={passwordValidations.length ? "text-green-600 " : "text-red-600 "}>
                    {passwordValidations.length ? "✓" : "✗"} At least 8 characters
                  </p>
                  <p className={passwordValidations.hasNumber ? "text-green-600" : "text-red-600 "}>
                    {passwordValidations.hasNumber ? "✓" : "✗"} Contains a number
                  </p>
                  <p className={passwordValidations.hasSpecialChar ? "text-green-600 " : "text-red-600 "}>
                    {passwordValidations.hasSpecialChar ? "✓" : "✗"} Special character
                  </p>
                  <p className={passwordValidations.hasUppercase ? "text-green-600" : "text-red-600 "}>
                    {passwordValidations.hasUppercase ? "✓" : "✗"} Uppercase letter
                  </p>
                </div>
              )}

              <button className="w-full bg-[#266937] text-white py-2 rounded-md font-semibold hover:bg-green-700">
                Create Account
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="py-2">
                Already Have An Account?
                <Link to="/login" className="text-green-600 px-2 font-medium underline underline-offset-4">
                  Login
                </Link>
              </p>
            </div>

            <div
              className="border-2 flex items-center text-main-green border-main-green/50 p-4 text-center my-8 cursor-pointer"
              onClick={handleGoogleSignup}
              aria-label="Sign up with Google"
            >
              <img src="google.svg" alt="google" className="pl-24 pr-4 justify-center" />
              Sign Up with Google
            </div>

            {successMessage && <div className="text-green-500">{successMessage}</div>}
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          </div>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white rounded-md shadow-lg text-center w-1/3 p-8">
                <img src="tick.svg" alt="tick" className="mx-auto my-2" />
                <h2 className="text-xl font-bold mb-4 text-main-green">
                  Registration Successful 🎉
                </h2>
                <p className="text-main-green font-regular pb-4">
                  ✨ Next Step: Check your email for a confirmation link.
                </p>
                <button className="bg-[#266937] text-white py-3 w-full rounded-md my-1 font-medium hover:bg-green-700">
                  <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                    Open Gmail
                  </a>
                </button>

                <button
                  className="bg-white border border-[#266937] my-1 text-[#266937] py-3 w-full rounded-md font-medium hover:underline underline-offset-2"
                  onClick={handleCancel}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}
