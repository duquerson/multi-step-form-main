import React from 'react';
import IconThankYou from '../assets/images/icon-thank-you.svg';

const Step5 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full p-6">
      <img src={IconThankYou} alt="Thank You Icon" className="mb-6 w-16 h-16" />
      <h2 className="text-marine-blue text-3xl font-bold mb-4">Thank you!</h2>
      <p className="text-cool-gray text-base">
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Step5;
