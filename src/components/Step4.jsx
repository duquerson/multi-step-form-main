import React from 'react';

const Step4 = ({ nextStep, prevStep, handleChange, values }) => {
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

  const selectedPlanPrice = values.yearly
    ? planDetails[values.plan].yearly
    : planDetails[values.plan].monthly;

  const totalAddOnPrice = values.addOns.reduce((sum, addOnId) => {
    const addOn = addOnsDetails.find((a) => a.id === addOnId);
    return sum + (values.yearly ? addOn.priceYearly : addOn.priceMonthly);
  }, 0);

  const total = selectedPlanPrice + totalAddOnPrice;

  return (
    <div className="flex flex-col">
      <h2 className="text-marine-blue text-2xl font-bold mb-2">Finishing up</h2>
      <p className="text-cool-gray mb-6">Double-check everything looks OK before confirming.</p>

      <div className="bg-alabaster rounded-md p-4 mb-6">
        <div className="flex items-center justify-between pb-4 border-b border-light-gray">
          <div>
            <h3 className="text-marine-blue font-bold">{values.plan} ({values.yearly ? 'Yearly' : 'Monthly'})</h3>
            <button
              onClick={() => handleChange('step')({ target: { value: 2 } })} // Allows changing plan
              className="text-cool-gray text-sm underline hover:text-purplish-blue"
            >
              Change
            </button>
          </div>
          <span className="text-marine-blue font-bold">
            ${selectedPlanPrice}/{values.yearly ? 'yr' : 'mo'}
          </span>
        </div>

        {values.addOns.length > 0 && (
          <div className="pt-4">
            {values.addOns.map((addOnId) => {
              const addOn = addOnsDetails.find((a) => a.id === addOnId);
              return (
                <div key={addOnId} className="flex justify-between items-center mb-2">
                  <span className="text-cool-gray text-sm">{addOn.title}</span>
                  <span className="text-marine-blue text-sm">
                    +${values.yearly ? addOn.priceYearly : addOn.priceMonthly}/{values.yearly ? 'yr' : 'mo'}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center p-4">
        <span className="text-cool-gray">Total (per {values.yearly ? 'year' : 'month'})</span>
        <span className="text-purplish-blue text-xl font-bold">
          ${total}/{values.yearly ? 'yr' : 'mo'}
        </span>
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
          className="bg-purplish-blue text-white py-2 px-4 rounded-md hover:bg-pastel-blue transition-colors duration-200"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
