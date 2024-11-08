"use client";
import { useState } from 'react';

const steps = [
  {
    label: 'Social Media Application',
    description: `🚀 Developed a full-stack social media application similar to Instagram, utilizing HTML, CSS, JavaScript, MongoDB, React, Node.js, and Bootstrap.`,
    association: 'University College of Engineering, Kakatiya University, Kothagudem 🎓',
    duration: 'Jan 2023 - May 2023',
    features: [
      'Responsive Design using Bootstrap',
      'Secure User Authentication with JWT',
      'Customizable User Profiles',
      'Photo Sharing, Likes, and Comments',
    ],
    skills: 'JavaScript, React.js, MongoDB, Node.js, Bootstrap'
  },
  {
    label: 'Unified Health Interface',
    description: '🏥 Designed and developed a user-friendly platform for healthcare services.',
    association: 'University College of Engineering, Kakatiya University, Kothagudem 🎓',
    duration: 'Jan 2023 - May 2023',
    features: [
      'User Authentication & Role-based Authorization',
      'Appointment Scheduling with Real-time Notifications',
      'Electronic Health Records (EHR) System',
      'Responsive Design with Bootstrap',
    ],
    skills: 'JavaScript, TypeScript, Angular, Java, Spring Boot, Node.js'
  },
  {
    label: 'Online Banking System',
    description: '💻 Developed a responsive online banking platform for seamless customer interaction.',
    association: 'University College of Engineering, Kakatiya University, Kothagudem 🎓',
    duration: 'Jan 2023 - May 2023',
    features: [
      'Responsive Design for All Devices',
      'User-Centric Interface for Easy Navigation',
      'Comprehensive Banking Solutions (Account Management, Fund Transfers, etc.)',
      'Enhanced Security for User Transactions',
    ],
    skills: 'JavaScript, HTML5, CSS, Bootstrap, Node.js, SQL, Git'
  },
];

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 flex" style={{marginTop:'40px'}}>
      
      <div className="relative flex-none w-16 mr-8">
      
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-px h-full"></div>
        
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute left-1/2 transform -translate-x-1/2 
              ${index <= activeStep ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-600'}
              rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-all duration-300 ease-in-out
              ${index === activeStep ? 'scale-110' : ''}`}
            style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Stepper Content */}
      <div className="flex-1">
      <h4 style={{fontSize:'30px'}} className='text-center my-2'>Projects</h4>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 mb-8 border-l-4 pl-6 ${index === activeStep ? 'bg-blue-50' : 'bg-white'} 
              shadow-lg rounded-xl overflow-hidden transition-all duration-500 ease-in-out`}
          >
            <div className="flex justify-between items-center">
              <div className={`text-2xl font-semibold ${index === activeStep ? 'text-blue-600' : 'text-gray-700'}`}>
                {step.label}
              </div>
              {index === steps.length - 1 && activeStep === steps.length - 1 && (
                <span className="text-sm text-gray-500">Last step</span>
              )}
            </div>

            {index === activeStep && (
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-semibold text-gray-800"><strong>Associated with:</strong> {step.association}</p>
                <p><strong>Duration:</strong> {step.duration}</p>
                <p className="mt-2">{step.description}</p>

                {/* Key Features */}
                <p className="mt-4 font-semibold text-gray-800">Key Features:</p>
                <ul className="list-disc pl-5 space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">{feature}</li>
                  ))}
                </ul>

                {/* Skills */}
                <p className="mt-4 font-semibold text-gray-800"><strong>Skills:</strong> {step.skills}</p>

                {/* Navigation Buttons */}
                <div className="flex space-x-4 mt-6">
                  {index < steps.length - 1 && (
                    <button
                      onClick={handleNext}
                      className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Next'}
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      onClick={handleBack}
                      className="bg-gray-300 text-gray-700 py-3 px-6 rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
                    >
                      Back
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Completion */}
        {activeStep === steps.length && (
          <div className="mt-6 p-6 bg-green-50 rounded-xl shadow-md">
            <div className="text-2xl font-semibold text-green-600">All steps completed - youre finished</div>
            <button
              onClick={handleReset}
              className="mt-4 bg-gray-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
