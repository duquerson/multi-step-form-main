import React from 'react';
import { useMultiStepFormContext } from '../context/MultiStepFormContext';

const Step1 = () => { // No props needed now
  const { register, errors, goToNextStep } = useMultiStepFormContext(); // Get from context
  return (
    <section className="flex flex-col">
      <h2 className="text-marine-blue text-2xl font-bold mb-2">Personal info</h2>
      <p className="text-cool-gray mb-6">Please provide your name, email address, and phone number.</p>

      <div className="mb-4">
        <label htmlFor="name" className="block text-marine-blue text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${errors.name ? 'border-strawberry-red focus:ring-strawberry-red' : 'border-light-gray focus:ring-purplish-blue'}`}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="text-strawberry-red text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-marine-blue text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${errors.email ? 'border-strawberry-red focus:ring-strawberry-red' : 'border-light-gray focus:ring-purplish-blue'}`}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className="text-strawberry-red text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-marine-blue text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${errors.phone ? 'border-strawberry-red focus:ring-strawberry-red' : 'border-light-gray focus:ring-purplish-blue'}`}
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^\+?\d{10,15}$/, // Basic phone number pattern
              message: 'Invalid phone number',
            },
          })}
        />
        {errors.phone && <p className="text-strawberry-red text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div className="flex justify-end mt-auto">
        <button
          type="submit" // Triggers form submission and validation
          className="bg-marine-blue text-white py-2 px-4 rounded-md hover:bg-purplish-blue transition-colors duration-200"
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default Step1;
