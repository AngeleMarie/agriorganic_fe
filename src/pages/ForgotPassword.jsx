import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleCancel = () => {
    setSuccess(false);
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate passwords
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('https://ecommerce-kpd4.onrender.com/api/v1/users/auth/reset', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword }), // This aligns with your backend's expectations
      });      
    

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || 'Failed to reset password.');
      } else {
        setSuccess(true); // Trigger the success modal
      }
    } catch (err) {
      console.error('Error resetting password:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex p-32 relative">
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="register.png"
          alt="Agricultural Sprayer"
          className="rounded-lg shadow-2xl m-auto w-3/4"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/login" className="flex text-other-green py-2 font-medium hover:underline underline-offset-2">
            <ChevronLeft />
            Back
          </Link>
          <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
          <p className="text-blackie/70 pb-4">
            Enter your registered email address. We will send you a code to reset your password.
          </p>
          {error && <p className="text-red-600">{error}</p>}
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label htmlFor="email" className="text-other-green text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border-2 border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="newPassword" className="text-other-green text-sm">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name='newPassword'
                value={newPassword}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border-2 border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
                required
              />
              {newPassword && newPassword.length < 8 && (
                <p className="text-red-600 text-sm">
                  Password must be at least 8 characters long.
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="text-other-green text-sm">
                Re-enter Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border-2 border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
              />
              {confirmPassword && newPassword !== confirmPassword && (
                <p className="text-red-600 text-sm">Passwords do not match</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#266937] text-white py-3 rounded-md font-semibold hover:bg-green-700"
              disabled={loading}
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {success && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-md shadow-lg text-center w-1/3 p-8">
        <img src="tick.svg" alt="tick" className="mx-auto my-2" />
        <h2 className="text-xl font-bold mb-4 text-main-green">
          One way to go 🎉
        </h2>
        <p className="text-main-green font-regular pb-4">
          ✨ Next Step: Check your email for a verification code.
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
  );
}
