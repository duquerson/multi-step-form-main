import React from 'react';

const Step1 = ({ nextStep, handleChange, values }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-marine-blue text-2xl font-bold mb-2">Personal info</h2>
      <p className="text-cool-gray mb-6">Please provide your name, email address, and phone number.</p>

      <div className="mb-4">
        <label htmlFor="name" className="block text-marine-blue text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          className="w-full p-2 border border-light-gray rounded-md focus:outline-none focus:ring-1 focus:ring-purplish-blue"
          onChange={handleChange('name')}
          defaultValue={values.name}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-marine-blue text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          className="w-full p-2 border border-light-gray rounded-md focus:outline-none focus:ring-1 focus:ring-purplish-blue"
          onChange={handleChange('email')}
          defaultValue={values.email}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-marine-blue text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          className="w-full p-2 border border-light-gray rounded-md focus:outline-none focus:ring-1 focus:ring-purplish-blue"
          onChange={handleChange('phone')}
          defaultValue={values.phone}
        />
      </div>

      <div className="flex justify-end mt-auto">
        <button
          onClick={nextStep}
          className="bg-marine-blue text-white py-2 px-4 rounded-md hover:bg-purplish-blue transition-colors duration-200"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step1;
