import { useForm } from 'react-hook-form';
import { useState } from 'react';

const useMultiStepForm = (defaultValues) => {
  const { register, handleSubmit, control, formState: { errors }, watch, setValue } = useForm({ defaultValues });
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => setCurrentStep((prev) => prev + 1);
  const goToPrevStep = () => setCurrentStep((prev) => prev - 1);
  const goToStep = (stepNum) => setCurrentStep(stepNum); // To allow direct jump to step (e.g., from Step4 "Change" button)

  return {
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
  };
};

export default useMultiStepForm;
