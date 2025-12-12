import React from 'react';
import { useFormContext } from 'react-hook-form';
import IconArcade from '../assets/images/icon-arcade.svg';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';

const Step2 = () => {
	const {
		register,
		formState: { errors },
		watch,
	} = useFormContext();
	const isYearly = watch('yearly');

	return (
		<section className="flex flex-col">
			<fieldset className="flex flex-col">
				<legend className="sr-only">Select your plan</legend>
				<h1 className="text-marine-blue mb-2 text-2xl font-bold">Select your plan</h1>
				<p className="text-cool-gray mb-6">You have the option of monthly or yearly billing.</p>

				<div className="mb-6 flex flex-col gap-4 md:flex-row">
					<label
						htmlFor="arcade"
						className={`flex flex-1 cursor-pointer flex-row items-center rounded-md border p-4 md:flex-col md:items-start ${watch('plan') === 'arcade' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
					>
						<input
							type="radio"
							id="arcade"
							value="arcade"
							className="hidden"
							{...register('plan')}
						/>
						<img
							src={IconArcade}
							alt="Arcade Icon"
							className="mr-4 mb-8 h-10 w-10 md:mr-0 md:mb-10"
						/>
						<div>
							<h3 className="text-marine-blue font-bold">Arcade</h3>
							<p className="text-cool-gray text-sm">$9/mo</p>
							{isYearly && <p className="text-marine-blue mt-1 text-xs">2 months free</p>}
						</div>
					</label>

					<label
						htmlFor="advanced"
						className={`flex flex-1 cursor-pointer flex-row items-center rounded-md border p-4 md:flex-col md:items-start ${watch('plan') === 'advanced' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
					>
						<input
							type="radio"
							id="advanced"
							value="advanced"
							className="hidden"
							{...register('plan')}
						/>
						<img
							src={IconAdvanced}
							alt="Advanced Icon"
							className="mr-4 mb-8 h-10 w-10 md:mr-0 md:mb-10"
						/>
						<div>
							<h3 className="text-marine-blue font-bold">Advanced</h3>
							<p className="text-cool-gray text-sm">$12/mo</p>
							{isYearly && <p className="text-marine-blue mt-1 text-xs">2 months free</p>}
						</div>
					</label>

					<label
						htmlFor="pro"
						className={`flex flex-1 cursor-pointer flex-row items-center rounded-md border p-4 md:flex-col md:items-start ${watch('plan') === 'pro' ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
					>
						<input type="radio" id="pro" value="pro" className="hidden" {...register('plan')} />
						<img src={IconPro} alt="Pro Icon" className="mr-4 mb-8 h-10 w-10 md:mr-0 md:mb-10" />
						<div>
							<h3 className="text-marine-blue font-bold">Pro</h3>
							<p className="text-cool-gray text-sm">$15/mo</p>
							{isYearly && <p className="text-marine-blue mt-1 text-xs">2 months free</p>}
						</div>
					</label>
				</div>
				{errors.plan && <p className="text-strawberry-red mt-1 text-sm">{errors.plan.message}</p>}
			</fieldset>

			<div className="bg-alabaster mb-8 flex items-center justify-center gap-6 rounded-md p-3">
				<span className={`${!isYearly ? 'text-marine-blue font-medium' : 'text-cool-gray'}`}>
					Monthly
				</span>
				<label htmlFor="billingToggle" className="relative inline-flex cursor-pointer items-center">
					<input
						type="checkbox"
						id="billingToggle"
						className="peer sr-only"
						{...register('yearly')}
					/>
					<div className="bg-marine-blue peer h-5 w-10 rounded-full peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
				</label>
				<span className={`${isYearly ? 'text-marine-blue font-medium' : 'text-cool-gray'}`}>
					Yearly
				</span>
			</div>
		</section>
	);
};

export default Step2;
