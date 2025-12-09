import React from 'react';
import IconArcade from '../assets/images/icon-arcade.svg';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';
import { useMultiStepFormContext } from '../context/MultiStepFormContext';

const Step2 = () => { // No props needed now
  const { register, errors, watch, setValue, goToNextStep, goToPrevStep, handleFieldChange } = useMultiStepFormContext();
  return (
    <section className="flex flex-col">
      <fieldset className="flex flex-col">
        <legend className="sr-only">Select your plan</legend> {/* Visually hidden legend */}
        <h2 className="text-marine-blue text-2xl font-bold mb-2">Select your plan</h2>
        <p className="text-cool-gray mb-6">You have the option of monthly or yearly billing.</p>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Arcade Plan Card */}
          <label
            htmlFor="arcade"
            className={`flex flex-1 flex-row md:flex-col items-center md:items-start p-4 border rounded-md cursor-pointer
            ${watch('plan') === 'arcade' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
          >
            <input
              type="radio"
              id="arcade"
              name="plan"
              value="arcade"
              className="hidden"
              {...register('plan', { required: 'Please select a plan' })}
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
            ${watch('plan') === 'advanced' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
          >
            <input
              type="radio"
              id="advanced"
              name="plan"
              value="advanced"
              className="hidden"
              {...register('plan', { required: 'Please select a plan' })}
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
            ${watch('plan') === 'pro' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
          >
            <input
              type="radio"
              id="pro"
              name="plan"
              value="pro"
              className="hidden"
              {...register('plan', { required: 'Please select a plan' })}
            />
            <img src={IconPro} alt="Pro Icon" className="mb-8 md:mb-10 w-10 h-10 mr-4 md:mr-0" />
            <div>
              <h3 className="text-marine-blue font-bold">Pro</h3>
              <p className="text-cool-gray text-sm">$15/mo</p>
            </div>
          </label>
        </div>
        {errors.plan && <p className="text-strawberry-red text-sm mt-1">{errors.plan.message}</p>}
      </fieldset>

      {/* Monthly/Yearly Toggle */}
      <div className="bg-alabaster p-3 rounded-md flex items-center justify-center gap-6 mb-8">
        <span className={`${!values.yearly ? 'text-marine-blue font-medium' : 'text-cool-gray'}`}>Monthly</span>
        <label htmlFor="billingToggle" className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="billingToggle"
            className="sr-only peer"
            aria-label="Toggle for monthly or yearly billing"
            {...register('yearly')}
          />
          <div className="w-10 h-5 bg-marine-blue peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
        </label>
        <span className={`${watch('yearly') ? 'text-marine-blue font-medium' : 'text-cool-gray'}`}>Yearly</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto">
        <button
          type="button" // Important not to submit the form
          onClick={goToPrevStep}
          className="text-cool-gray py-2 px-4 rounded-md hover:text-marine-blue transition-colors duration-200"
        >
          Go Back
        </button>
        <button
          type="button" // Important not to submit the form
          onClick={goToNextStep}
          className="bg-marine-blue text-white py-2 px-4 rounded-md hover:bg-purplish-blue transition-colors duration-200"
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default Step2;
