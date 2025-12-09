import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  const addOns = [
    {
      id: 'online-service',
      title: 'Online service',
      description: 'Access to multiplayer games',
      priceMonthly: 1,
      priceYearly: 10,
    },
    {
      id: 'larger-storage',
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      priceMonthly: 2,
      priceYearly: 20,
    },
    {
      id: 'customizable-profile',
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      priceMonthly: 2,
      priceYearly: 20,
    },
  ];

  return (
    <div className="flex flex-col">
      <h2 className="text-marine-blue text-2xl font-bold mb-2">Pick add-ons</h2>
      <p className="text-cool-gray mb-6">Add-ons enhance your gaming experience.</p>

      <div className="flex flex-col gap-4 mb-8">
        {addOns.map((addOn) => (
          <label
            key={addOn.id}
            htmlFor={addOn.id}
            className={`flex items-center justify-between p-4 border rounded-md cursor-pointer
              ${values.addOns.includes(addOn.id) ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={addOn.id}
                name={addOn.id}
                checked={values.addOns.includes(addOn.id)}
                onChange={() => {
                  const newAddOns = values.addOns.includes(addOn.id)
                    ? values.addOns.filter((item) => item !== addOn.id)
                    : [...values.addOns, addOn.id];
                  handleChange('addOns')({ target: { value: newAddOns } });
                }}
                className="w-5 h-5 mr-4 accent-purplish-blue"
              />
              <div>
                <h3 className="text-marine-blue font-bold">{addOn.title}</h3>
                <p className="text-cool-gray text-sm">{addOn.description}</p>
              </div>
            </div>
            <span className="text-purplish-blue text-sm">
              +${values.yearly ? addOn.priceYearly : addOn.priceMonthly}/{values.yearly ? 'yr' : 'mo'}
            </span>
          </label>
        ))}
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

export default Step3;
