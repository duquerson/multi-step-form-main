import React, { createContext, useContext, useMemo } from 'react';
import useMultiStepForm from '../hooks/useMultiStepForm';

const MultiStepFormContext = createContext(undefined);

export const MultiStepFormProvider = ({ children }) => {
  const formHook = useMultiStepForm({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    yearly: false,
    addOns: [],
  });

  // This will be the function passed to children for form field changes
  const handleFieldChange = (name, value) => {
    formHook.setValue(name, value);
  };

  // This will be used for the final submission
  const onSubmit = (data) => {
    console.log(data); // Here you would handle form submission
    formHook.goToNextStep(); // Go to the thank you page
  };

  const contextValue = useMemo(() => ({
    ...formHook,
    handleFieldChange, // Pass this down
    onSubmit: formHook.handleSubmit(onSubmit), // Wrap onSubmit with handleSubmit
    currentValues: formHook.watch(), // Provide current form values
  }), [formHook, handleFieldChange, onSubmit]); // Recompute only if dependencies change

  return (
    <MultiStepFormContext.Provider value={contextValue}>
      {children}
    </MultiStepFormContext.Provider>
  );
};

export const useMultiStepFormContext = () => {
  const context = useContext(MultiStepFormContext);
  if (context === undefined) {
    throw new Error('useMultiStepFormContext must be used within a MultiStepFormProvider');
  }
  return context;
};
