import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log('Signup successful');

        // Use the navigate function to go to the dashboard
        navigate('/home');
      } else {
        // Handle signup failure
        const errorData = await response.json();
        console.error('Signup failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='w-11/12 justify-center mx-auto '>
      <h2 className=" text-center text-2xl font-bold mb-4">Signup</h2>
      <form>
        <div className=" mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input type="text" id="name" className="mt-1 p-2 border-gray-900 border-[2px] rounded w-full" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input type="email" id="email" className="mt-1 p-2 border-gray-900 border-[2px]  rounded w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input type="password" id="password" className="mt-1 p-2 border-gray-900 border-[2px]  rounded w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;