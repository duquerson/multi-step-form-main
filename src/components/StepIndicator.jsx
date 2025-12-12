import React from 'react';
import useFormStore from '../store/formStore';

const StepIndicator = () => {
	const { currentStep, goToStep } = useFormStore();
	// Using an object to store step info including title
	const steps = [
		{ number: 1, title: 'YOUR INFO' },
		{ number: 2, title: 'SELECT PLAN' },
		{ number: 3, title: 'ADD-ONS' },
		{ number: 4, title: 'SUMMARY' },
	];

	// A safe navigation that only allows going back to previous steps (for desktop sidebar)
	// For mobile, the buttons are disabled if they are future steps
	const handleStepChange = (step) => {
		// On desktop, allow navigating to any visited step, but don't jump ahead unless it's step 1.
		// For simplicity, we'll allow jumping back to any previous step.
		// Jumping forward will still be handled by the form's 'Next Step' button with validation.
		if (step < currentStep) {
			goToStep(step);
		}
	};

	return (
		<nav
			aria-label="Form Steps"
			className="flex items-center justify-center space-x-4 md:flex-col md:items-start md:space-y-6 md:space-x-0 md:p-8"
		>
			<ol className="flex items-center justify-center space-x-4 md:flex-col md:items-start md:space-y-6 md:space-x-0">
				{steps.map((step) => (
					<li key={step.number} className="flex items-center md:w-full">
						<button
							type="button"
							onClick={() => handleStepChange(step.number)}
							disabled={step.number >= currentStep} // Disable future steps for mobile and general
							aria-label={`Go to step ${step.number}`}
							className={`flex h-8 w-8 items-center justify-center rounded-full border border-white text-sm font-bold transition-colors duration-200 ${
								currentStep === step.number
									? 'bg-light-blue text-marine-blue border-light-blue'
									: 'text-white'
							} ${step.number < currentStep ? 'cursor-pointer' : 'cursor-not-allowed'} md:h-9 md:w-9 md:text-base`}
						>
							{step.number}
						</button>
						<div className="ml-4 hidden text-left md:block">
							<p className="text-cool-gray text-xs">STEP {step.number}</p>
							<p className="text-sm font-bold tracking-wide text-white uppercase">{step.title}</p>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default StepIndicator;
