import React from 'react';
import IconArcade from '../assets/images/icon-arcade.svg';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-marine-blue text-2xl font-bold mb-2">Select your plan</h2>
      <p className="text-cool-gray mb-6">You have the option of monthly or yearly billing.</p>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Arcade Plan Card */}
        <label
          htmlFor="arcade"
          className={`flex flex-1 flex-row md:flex-col items-center md:items-start p-4 border rounded-md cursor-pointer
            ${values.plan === 'arcade' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
        >
          <input
            type="radio"
            id="arcade"
            name="plan"
            value="arcade"
            checked={values.plan === 'arcade'}
            onChange={handleChange('plan')}
            className="hidden"
          />
          <img src={IconArcade} alt="Arcade Icon" className="mb-8 md:mb-10 w-10 h-10 mr-4 md:mr-0" />
          <div>
            <h3 className="text-marine-blue font-bold">Arcade</h3>
            <p className="text-cool-gray text-sm">$9/mo</p>
          </div>
        </label>

        {/* Advanced Plan Card */}
        <label
          htmlFor="advanced"
          className={`flex flex-1 flex-row md:flex-col items-center md:items-start p-4 border rounded-md cursor-pointer
            ${values.plan === 'advanced' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
        >
          <input
            type="radio"
            id="advanced"
            name="plan"
            value="advanced"
            checked={values.plan === 'advanced'}
            onChange={handleChange('plan')}
            className="hidden"
          />
          <img src={IconAdvanced} alt="Advanced Icon" className="mb-8 md:mb-10 w-10 h-10 mr-4 md:mr-0" />
          <div>
            <h3 className="text-marine-blue font-bold">Advanced</h3>
            <p className="text-cool-gray text-sm">$12/mo</p>
          </div>
        </label>

        {/* Pro Plan Card */}
        <label
          htmlFor="pro"
          className={`flex flex-1 flex-row md:flex-col items-center md:items-start p-4 border rounded-md cursor-pointer
            ${values.plan === 'pro' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
        >
          <input
            type="radio"
            id="pro"
            name="plan"
            value="pro"
            checked={values.plan === 'pro'}
            onChange={handleChange('plan')}
            className="hidden"
          />
          <img src={IconPro} alt="Pro Icon" className="mb-8 md:mb-10 w-10 h-10 mr-4 md:mr-0" />
          <div>
            <h3 className="text-marine-blue font-bold">Pro</h3>
            <p className="text-cool-gray text-sm">$15/mo</p>
          </div>
        </label>
      </div>

      {/* Monthly/Yearly Toggle */}
      <div className="bg-alabaster p-3 rounded-md flex items-center justify-center gap-6 mb-8">
        <span className={`${!values.yearly ? 'text-marine-blue font-medium' : 'text-cool-gray'}`}>Monthly</span>
        <label htmlFor="billingToggle" className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="billingToggle"
            className="sr-only peer"
            checked={values.yearly}
            onChange={() => handleChange('yearly')({ target: { value: !values.yearly } })}
          />
          <div className="w-10 h-5 bg-marine-blue peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
        </label>
        <span className={`${values.yearly ? 'text-marine-blue font-medium' : 'text-cool-gray'}`}>Yearly</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto">
        <button
          onClick={prevStep}
          className="text-cool-gray py-2 px-4 rounded-md hover:text-marine-blue transition-colors duration-200"
        >
          Go Back
        </button>
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

export default Step2;
