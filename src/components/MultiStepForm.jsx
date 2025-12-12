import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../lib/schema';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import useFormStore from '../store/formStore';
import Navigation from './Navigation';
import StepIndicator from './StepIndicator';
import bgMobile from '../assets/images/bg-sidebar-mobile.svg';
import bgDesktop from '../assets/images/bg-sidebar-desktop.svg';

const MultiStepForm = () => {
	const { currentStep, goToNextStep } = useFormStore();

	const methods = useForm({
		resolver: zodResolver(schema),
		mode: 'onTouched',
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			plan: 'arcade',
			yearly: false,
			addOns: [],
		},
	});

	const onSubmit = (data) => {
		console.log('Form data submitted:', data);
		goToNextStep();
	};

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return <Step1 />;
			case 2:
				return <Step2 />;
			case 3:
				return <Step3 />;
			case 4:
				return <Step4 />;
			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen md:flex md:items-center md:justify-center">
			{/* Mobile Background and Step Indicator */}
			<div className="md:hidden">
				<img
					src={bgMobile}
					alt=""
					className="absolute top-0 left-0 -z-10 h-44 w-full object-cover"
				/>
				<div className="absolute top-8 right-0 left-0 z-20">
					<StepIndicator />
				</div>
			</div>

			<FormProvider {...methods}>
				{/* The form needs to span the full height on mobile to contain the sticky footer */}
				<form onSubmit={methods.handleSubmit(onSubmit)} className="flex h-full flex-col md:h-auto">
					{/* Hidden submit button for accessibility */}
					<button type="submit" className="sr-only">
						Submit Form
					</button>
					{/* Main content area that holds the card */}
					<div className="flex-grow md:flex-grow-0">
						<div className="relative mx-4 mt-28 md:mx-0 md:mt-0">
							<div className="rounded-lg bg-white shadow-xl md:flex md:w-[940px] md:p-4">
								{/* Desktop Sidebar */}
								<aside className="relative hidden w-[274px] rounded-lg md:block">
									<img
										src={bgDesktop}
										alt=""
										className="absolute top-0 left-0 h-full w-full rounded-lg object-cover"
									/>
									<div className="relative z-10 p-8">
										<StepIndicator />
									</div>
								</aside>

								{/* Step Content */}
								<div className="flex flex-1 flex-col p-6 md:px-24 md:py-10">
									<div className="flex-grow">{currentStep < 5 ? renderStep() : <Step5 />}</div>

									{/* Desktop Navigation */}
									{currentStep < 5 && (
										<div className="mt-8 hidden md:block">
											<Navigation />
										</div>
									)}
								</div>
							</div>
						</div>
					</div>

					{/* Mobile Navigation */}
					{currentStep < 5 && (
						<footer className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg md:hidden">
							<Navigation />
						</footer>
					)}
				</form>
			</FormProvider>
		</div>
	);
};

export default MultiStepForm;
