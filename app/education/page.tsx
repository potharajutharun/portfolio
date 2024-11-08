"use client";
import { useState } from "react";

// Define types for Education and Certification
type Education = {
  title: string;
  degree: string;
  duration: string;
  grade: string;
  activities: string[];
  description: string;
};

type Certification = {
  title: string;
  certification: string;
  date: string; // Ensure date is always provided or optional
  link?: string;
  skills?: string;
};

// Define the steps array with union types
type Step = {
  title: string;
  content: (Education | Certification)[];
};

const steps: Step[] = [
  {
    title: "🎓 Education",
    content: [
      {
        title: "🏫 University College of Engineering, Kakatiya University, Kothagudem",
        degree: "Bachelor of Technology (B.Tech), Information Technology",
        duration: "Jul 2019 - May 2023",
        grade: "A",
        activities: [
          "Served as the liaison between students and faculty.",
          "Organized class events and promoted a positive learning environment.",
        ],
        description:
          "As a recent graduate, I have been exposed to computer science principles, algorithms, and programming languages. I'm eager to grow in the field.",
      },
      {
        title: "🏫 Krishnaveni Junior College",
        degree: "XII, MPC",
        duration: "Jun 2017 - May 2019",
        grade: "A",
        activities: [
          "Participated in music and cultural events.",
          "Completed my intermediate education with a focus on Mathematics, Physics, and Chemistry.",
        ],
        description:
          "Developed an interest in Mathematics, Physics, and Chemistry during my junior college years.",
      },
      {
        title: "🏫 Sri Harsha High School",
        degree: "X, SSC",
        duration: "Jun 2016 - May 2017",
        grade: "A",
        activities: [
          "Participated in sports and cultural events.",
          "Developed foundational skills for academic excellence and personal growth.",
        ],
        description:
          "The foundation of my academic journey started here, where I developed a love for learning and extracurricular activities.",
      },
    ],
  },
  {
    title: "🏅 Certifications",
    content: [
      {
        title: "TestDome",
        certification: "SQL",
        date: "Issued Dec 2023", // Ensure date is provided
        link: "https://www.testdome.com/certificates/5ecbb6bc069f49179e6d06b1d4eb2cee",
      },
      {
        title: "Great Learning",
        certification: "Core Java",
        date: "Issued 2023", // Ensure date is provided
      },
      {
        title: "Solar Secure Solutions",
        certification: "Front-End Developer",
        date: "Issued 2023", // Ensure date is provided
        skills: "HTML, CSS, JavaScript, Responsive Web Design, SQL, GitHub",
      },
      {
        title: "TalentSprint",
        certification: "Java Full Stack Developer",
        date: "Issued 2023", // Ensure date is provided
        skills: "Servlets, Spring Boot, SQL, JSP, Angular, TypeScript",
      },
      {
        title: "TalentSprint",
        certification: "MERN Stack Developer",
        date: "Issued 2023", // Ensure date is provided
        skills: "React.js, Node.js, Express.js, MongoDB, Redux, JavaScript, CSS",
      },
      {
        title: "Kaggle",
        certification: "Python",
        date: "Issued 2023", // Ensure date is provided
      },
    ],
  },
];

export default function Education() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4" style={{marginTop:'40px'}}>
      {/* Stepper Container */}
      <div className="flex">
        {/* Vertical Line with Numbers */}
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
        <h4 style={{fontSize:'30px'}} className='text-center my-2'>Education & Certifications</h4>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 mb-8 border-l-4 pl-6 ${index === activeStep ? 'bg-blue-50' : 'bg-white'} 
                shadow-lg rounded-xl overflow-hidden transition-all duration-500 ease-in-out`}
            >
              <div className="flex justify-between items-center">
                <div className={`text-2xl font-semibold ${index === activeStep ? 'text-blue-600' : 'text-gray-700'}`}>
                  {step.title}
                </div>
                {index === steps.length - 1 && activeStep === steps.length - 1 && (
                  <span className="text-sm text-gray-500">Last step</span>
                )}
              </div>

              {index === activeStep && (
                <div className="mt-4 text-sm text-gray-600">
                  {/* Render Education or Certifications Content */}
                  {step.title === "🎓 Education" ? (
                    <>
                      {step.content.map((education, idx) => {
                        if ("degree" in education) {
                          // Education content
                          return (
                            <div key={idx} className="mb-6">
                              <h3 className="text-lg font-semibold">{education.title}</h3>
                              <p><strong>{education.degree}</strong></p>
                              <p><em>{education.duration}</em></p>
                              <p><strong>Grade:</strong> {education.grade}</p>
                              <p><strong>Activities & Societies:</strong> {education.activities.join(", ")}</p>
                              <p>{education.description}</p>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </>
                  ) : (
                    <>
                      {step.content.map((cert, idx) => {
                        if ("certification" in cert) {
                          // Certification content
                          return (
                            <div key={idx} className="mb-6">
                              <h3 className="text-lg font-semibold">{cert.title}</h3>
                              <p><strong>{cert.certification}</strong></p>
                              <p><em>{cert.date}</em></p>
                              {cert.link && (
                                <p>
                                  Credential ID: <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                                </p>
                              )}
                              {cert.skills && <p><strong>Skills:</strong> {cert.skills}</p>}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex space-x-4 mt-6">
                    {index < steps.length - 1 && (
                      <button
                        onClick={handleNext}
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                      >
                        {index === steps.length - 1 ? "Finish" : "Next"}
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
                onClick={() => setActiveStep(0)}
                className="mt-4 bg-gray-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
