import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

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

        // Check if the response is okay and is JSON
        if (!response.ok) {
            const text = await response.text(); // Get the raw text response
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
        navigate(`/wishlist`);
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
      <Navbar />
      <div className="flex p-32">
        <div className="hidden lg:block lg:w-1/2">
          <img src="login.png" alt="Agricultural Sprayer" className="rounded-lg shadow-2xl m-auto w-3/4" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6">Welcome <span role="img" aria-label="waving hand">👋</span></h1>
            <p className="text-blackie pb-12">Enter your details below</p>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your email/phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border-b-2 border-gray-400/40 outline-none text-other-green"
                  required
                />
              </div>
              <div className="mb-4">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2 border-b-2 border-gray-400/40 outline-none text-other-green"
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
                  className="w-full p-2 border-b-2 border-gray-400/40 outline-none text-other-green"
                  required
                />
                <p className="grid grid-cols-2 gap-x-24 py-4 text-main-green">
                  Need Help Logging?
                  <Link to="/forget" className="text-green-600 hover:underline">Forgot Password?</Link>
                </p>
              </div>
              <button className="w-full bg-[#266937] text-white py-2 rounded-md font-semibold hover:bg-green-700" disabled={loading}>
                {loading ? 'Logging In...' : 'Log In'}
              </button>
            </form>
            <div className="text-center">
              <p className="w-full pt-4 text-main-green">
                Do not Have an Account Yet?
                <Link to="/register" className="text-green-600 font-medium px-2 underline underline-offset-2">Register Now</Link>
              </p>
            </div>
            <div className="border-2 flex items-center text-main-green border-main-green/50 p-4 text-center my-8">
              <img src="google.svg" alt="google" className="pl-24 pr-4 justify-center" />
              Sign In with Google
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
