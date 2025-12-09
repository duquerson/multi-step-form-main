import React from 'react';

const Step3 = ({ register, errors, watch, setValue, goToNextStep, goToPrevStep, handleFieldChange }) => {
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
    <section className="flex flex-col">
      <fieldset className="flex flex-col">
        <legend className="sr-only">Pick add-ons</legend> {/* Visually hidden legend */}
        <h2 className="text-marine-blue text-2xl font-bold mb-2">Pick add-ons</h2>
        <p className="text-cool-gray mb-6">Add-ons enhance your gaming experience.</p>

        <div className="flex flex-col gap-4 mb-8">
        {addOns.map((addOn) => (
          <label
            key={addOn.id}
            htmlFor={addOn.id}
            className={`flex items-center justify-between p-4 border rounded-md cursor-pointer
              ${watch('addOns').includes(addOn.id) ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={addOn.id}
                value={addOn.id} // Important for react-hook-form with array of checkboxes
                className="w-5 h-5 mr-4 accent-purplish-blue"
                {...register('addOns')} // Register as array
                checked={watch('addOns').includes(addOn.id)} // Control checked state
                onChange={(e) => { // Manual change handler to update array using setValue
                  const currentAddOns = watch('addOns') || [];
                  const newAddOns = e.target.checked
                    ? [...currentAddOns, addOn.id]
                    : currentAddOns.filter((item) => item !== addOn.id);
                  handleFieldChange('addOns', newAddOns);
                }}
              />
              <div>
                <h3 className="text-marine-blue font-bold">{addOn.title}</h3>
                <p className="text-cool-gray text-sm">{addOn.description}</p>
              </div>
            </div>
            <span className="text-purplish-blue text-sm">
              +${watch('yearly') ? addOn.priceYearly : addOn.priceMonthly}/{watch('yearly') ? 'yr' : 'mo'}
            </span>
          </label>
        ))}
      </div>
      </fieldset>

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

export default Step3;
