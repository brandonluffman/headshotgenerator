import { useState } from 'react';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import ProgressBar from '../components/ProgressBar';
const dashboard = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 2; // Set this to the total number of steps

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div>
    <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    {currentStep === 1 && <StepOne onNextStep={nextStep} onPrevStep={prevStep} />}
    {currentStep === 2 && <StepTwo onNextStep={nextStep} onPrevStep={prevStep} />}
    {/* Repeat for additional steps, passing onPrevStep as needed */}
    </div>
  )
}

export default dashboard