import React, { useState } from 'react';
import Step1 from './Step1'; // Will create this next

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // Add other form data here
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      // case 2:
      //   return <Step2 ... />;
      default:
        return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-magnolia p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 md:flex md:w-3/4 lg:w-1/2">
        {/* Sidebar/Step Indicator will go here later */}
        <div className="flex-1 p-4">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
