import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('client'); // Default to client
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:7654/api/v1/users/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      if (!response.ok) {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          setError(data.error || 'An error occurred during login.');
        } catch {
          setError('Failed to parse response from server.');
        }
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('tokenExpiry', Date.now() + 60 * 60 * 1000);
      navigate(`/addNews`);
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkTokenExpiry = () => {
      const expiry = localStorage.getItem('tokenExpiry');
      if (expiry && Date.now() > expiry) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiry');
        navigate('/login');
      }
    };

    checkTokenExpiry();
    const interval = setInterval(checkTokenExpiry, 60 * 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section - Image */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center ">
          <img
            src="login.png"
            alt="Agricultural Sprayer"
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Right Section - Form */}
        <div className="flex w-full lg:w-1/2 items-center justify-center p-6">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6">Welcome <span role="img" aria-label="waving hand">👋</span></h1>
            <p className="text-blackie pb-6">Enter your details below</p>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your email/phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border-b-2 border-gray-400/40 outline-none text-other-green"
                  required
                />
              </div>
              <div className="mb-4">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-3 border-b-2 border-gray-400/40 outline-none text-other-green"
                  required
                >
                  <option value="">-- Select Your Role --</option>
                  <option value="client">Client</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border-b-2 border-gray-400/40 outline-none text-other-green"
                  required
                />
                <div className="flex justify-between items-center pt-4 text-main-green text-sm">
                  <p>Need Help Logging?</p>
                  <Link to="/forget" className="text-green-600 hover:underline">Forgot Password?</Link>
                </div>
              </div>
              <button
                className="w-full bg-[#266937] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300"
                disabled={loading}
              >
                {loading ? 'Logging In...' : 'Log In'}
              </button>
            </form>
            <div className="text-center mt-6">
              <p className="text-main-green">
                Do not Have an Account Yet?
                <Link to="/register" className="text-green-600 font-medium px-2 underline underline-offset-2">Register Now</Link>
              </p>
            </div>
            <div className="flex items-center justify-center border-2 text-main-green border-main-green/50 p-3 mt-6 cursor-pointer hover:shadow-md transition duration-300">
              <img src="google.svg" alt="google" className="w-6 h-6 mr-3" />
              Sign In with Google
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
