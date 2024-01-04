import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecomm-app-kv6q.vercel.app/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Contact form submitted successfully!');
        // You can redirect or perform any other action here.
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An error occurred while submitting the contact form.');
    }
  };

  return (
    <div className="max-w-[830px] w-11/12 mx-auto mb-4">
      <h1 className='text-5xl text-slate-950 font-bold mt-3 text-center'>Contact Us</h1>
      <form onSubmit={handleSubmit}
        className='flex flex-col mt-10 justify-center border-[1px] border-slate-500 rounded-md p-6 md:p-10 space-y-3'
      >
        <label htmlFor="name" className='text-2xl font-semibold text-slate-800'>Name:
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
            className='bg-slate-200 p-1 border my-2 md:my-0 md:ml-5'
          />
        </label>

        <label htmlFor="email" className='text-2xl font-semibold text-slate-800'>Email:
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
            className='bg-slate-200 p-1 border my-2 md:my-0 md:ml-5'
          />
        </label>

        <label htmlFor="phoneNumber" className='text-2xl font-semibold text-slate-800'>Phone:
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
            className='bg-slate-200 p-1 border my-2 md:my-0 md:ml-5'
          />
        </label>

        <label htmlFor="message" className='text-2xl font-semibold text-slate-800'>Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
          className='bg-slate-200 p-1 border my-2 md:my-0 md:ml-5 w-full md:w-2/3'
        ></textarea>

        <button type="submit" className='text-2xl font-semibold bg-slate-800 w-fit flex items-center justify-center mx-auto px-3 py-1 mt-6 text-white rounded-md'>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;