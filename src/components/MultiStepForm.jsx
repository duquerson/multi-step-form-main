import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade', // Default plan
    yearly: false, // Default billing cycle
    addOns: [], // Selected add-ons
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
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
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
