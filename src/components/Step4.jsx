import React from 'react';
import { useMultiStepFormContext } from '../context/MultiStepFormContext';

const Step4 = () => { // No props needed now
  const { goToNextStep, goToPrevStep, goToStep, currentValues, handleFieldChange } = useMultiStepFormContext();
  const planDetails = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  };

  const addOnsDetails = [
    { id: 'online-service', title: 'Online service', priceMonthly: 1, priceYearly: 10 },
    { id: 'larger-storage', title: 'Larger storage', priceMonthly: 2, priceYearly: 20 },
    { id: 'customizable-profile', title: 'Customizable Profile', priceMonthly: 2, priceYearly: 20 },
  ];

  const selectedPlanPrice = currentValues.yearly
    ? planDetails[currentValues.plan].yearly
    : planDetails[currentValues.plan].monthly;

  const totalAddOnPrice = currentValues.addOns.reduce((sum, addOnId) => {
    const addOn = addOnsDetails.find((a) => a.id === addOnId);
    return sum + (currentValues.yearly ? addOn.priceYearly : addOn.priceMonthly);
  }, 0);

  const total = selectedPlanPrice + totalAddOnPrice;

  return (
    <section className="flex flex-col">
      <h2 className="text-marine-blue text-2xl font-bold mb-2">Finishing up</h2>
      <p className="text-cool-gray mb-6">Double-check everything looks OK before confirming.</p>

      <article className="bg-alabaster rounded-md p-4 mb-6">
        <div className="flex items-center justify-between pb-4 border-b border-light-gray">
          <div>
            <h3 className="text-marine-blue font-bold">{currentValues.plan} ({currentValues.yearly ? 'Yearly' : 'Monthly'})</h3>
            <button
              onClick={() => goToStep(2)} // Allows changing plan directly
              className="text-cool-gray text-sm underline hover:text-purplish-blue"
              aria-label="Change plan"
            >
              Change
            </button>
          </div>
          <span className="text-marine-blue font-bold">
            ${selectedPlanPrice}/{currentValues.yearly ? 'yr' : 'mo'}
          </span>
        </div>

        {currentValues.addOns.length > 0 && (
          <ul className="pt-4">
            {currentValues.addOns.map((addOnId) => {
              const addOn = addOnsDetails.find((a) => a.id === addOnId);
              return (
                <li key={addOnId} className="flex justify-between items-center mb-2">
                  <span className="text-cool-gray text-sm">{addOn.title}</span>
                  <span className="text-marine-blue text-sm">
                    +${currentValues.yearly ? addOn.priceYearly : addOn.priceMonthly}/{currentValues.yearly ? 'yr' : 'mo'}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </article>

      <div className="flex justify-between items-center p-4">
        <span className="text-cool-gray">Total (per {currentValues.yearly ? 'year' : 'month'})</span>
        <span className="text-purplish-blue text-xl font-bold">
          ${total}/{currentValues.yearly ? 'yr' : 'mo'}
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto">
        <button
          onClick={goToPrevStep}
          className="text-cool-gray py-2 px-4 rounded-md hover:text-marine-blue transition-colors duration-200"
        >
          Go Back
        </button>
        <button
          onClick={goToNextStep}
          className="bg-purplish-blue text-white py-2 px-4 rounded-md hover:bg-pastel-blue transition-colors duration-200"
        >
          Confirm
        </button>
      </div>
    </section>
  );
};

export default Step4;
