import React from 'react';
import { useFormContext } from 'react-hook-form';
import useFormStore from '../store/formStore';

const Navigation = () => {
	const { currentStep, goToNextStep, goToPrevStep } = useFormStore();
	const { trigger } = useFormContext();

	const handleNext = async () => {
		const fieldsToValidate = {
			1: ['name', 'email', 'phone'],
			2: ['plan'],
			3: [],
		}[currentStep];

		const isValid = await trigger(fieldsToValidate);
		if (isValid) {
			goToNextStep();
		}
	};

	return (
		<div className={`flex w-full ${currentStep > 1 ? 'justify-between' : 'justify-end'}`}>
			{/* "Go Back" button: shown on steps 2, 3, 4 */}
			{currentStep > 1 && (
				<button
					type="button"
					onClick={goToPrevStep}
					className="text-cool-gray hover:text-marine-blue cursor-pointer rounded-lg px-6 py-3 font-medium transition-colors duration-200"
				>
					Go Back
				</button>
			)}

			{/* "Next Step" / "Confirm" button */}
			{currentStep < 4 ? (
				<button
					type="button"
					onClick={handleNext}
					className="bg-marine-blue hover:bg-purplish-blue cursor-pointer rounded-lg px-6 py-3 text-white transition-colors duration-200"
				>
					Next Step
				</button>
			) : (
				<button
					type="submit"
					className="bg-purplish-blue hover:bg-pastel-blue cursor-pointer rounded-lg px-6 py-3 text-white transition-colors duration-200"
				>
					Confirm
				</button>
			)}
		</div>
	);
};

export default Navigation;
