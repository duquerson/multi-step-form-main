import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { useMultiStepFormContext } from '../context/MultiStepFormContext';

const MultiStepForm = () => {
  const {
    register,
    handleSubmit,
    control,
    errors,
    watch,
    setValue,
    currentStep,
    goToNextStep,
    goToPrevStep,
    goToStep,
    handleFieldChange, // From context
    onSubmit: contextOnSubmit, // Use onSubmit from context
    currentValues, // Current form values from watch()
  } = useMultiStepFormContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            register={register}
            errors={errors}
            goToNextStep={goToNextStep}
          />
        );
      case 2:
        return (
          <Step2
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
            goToNextStep={goToNextStep}
            goToPrevStep={goToPrevStep}
            handleFieldChange={handleFieldChange}
          />
        );
      case 3:
        return (
          <Step3
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
            goToNextStep={goToNextStep}
            goToPrevStep={goToPrevStep}
            handleFieldChange={handleFieldChange}
          />
        );
      case 4:
        return (
          <Step4
            currentValues={currentValues} // Pass current form values for summary
            goToNextStep={contextOnSubmit} // Call onSubmit from context
            goToPrevStep={goToPrevStep}
            goToStep={goToStep}
          />
        );
      case 5:
        return <Step5 />;
      default:
        return (
          <Step1
            register={register}
            errors={errors}
            goToNextStep={goToNextStep}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-magnolia p-4">
      <form aria-label="Multi-step form for subscription" onSubmit={contextOnSubmit} className="bg-white rounded-lg shadow-xl p-6 md:flex md:w-3/4 lg:w-1/2">
        {/* Sidebar/Step Indicator will go here later */}
        <div className="flex-1 p-4">
          {renderStep()}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
