"use client";
import React from 'react'

const background = () => {
 
  return (
    <div className="max-w-3xl mx-auto py-20">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-white">Name</label>
          <input type="text" id="name" name="name" className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-1  text-white">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1  text-white">Email Address</label>
          <input type="email" id="email" name="email" className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1  text-white">Message</label>
          <textarea id="message" name="message" className="w-full border rounded-md px-3 py-2"  required />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default background;