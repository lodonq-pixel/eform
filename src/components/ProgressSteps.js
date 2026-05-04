import React from 'react';
import { Check } from 'lucide-react';

function ProgressSteps({ currentStep, steps }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                index < currentStep
                  ? 'bg-green-600'
                  : index === currentStep
                    ? 'bg-red-600'
                    : 'bg-gray-300'
              }`}
            >
              {index < currentStep ? (
                <Check size={12} className="text-white" />
              ) : (
                <span
                  className={`text-xs font-medium ${
                    index === currentStep ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {step.number}
                </span>
              )}
            </div>
            {index >= currentStep && (
              <div className="flex items-center">
                <span
                  className={`ml-1 text-xs ${
                    index === currentStep ? 'text-red-600' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            )}
          </div>

          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 ${
                index < currentStep ? 'bg-green-600' : 'bg-gray-300'
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProgressSteps;
