import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBack from './GoBack';
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);

      // Redirect based on role
      if (data.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (data.role === 'user') {
        navigate('/cars'); // Direct users to the Cars page
      }
    } catch (error) {
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <GoBack/>
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-4">Please enter your login details</p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white text-sm font-medium rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-black font-semibold hover:underline">
            Sign up for free
          </a>
        </p>
        <div className="mt-6">
          <button className="w-full py-3 px-4 border border-gray-300 rounded-md text-gray-600 text-sm flex justify-center items-center hover:bg-gray-100">
            <img
              className="w-5 h-5 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Google_2015_logo.svg"
              alt="Google"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
