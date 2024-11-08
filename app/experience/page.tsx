"use client";

import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // For icons
import Image from 'next/image'; // For image handling (Next.js Image component)

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto p-6" style={{marginTop:'40px'}}>
      {/* Experience Section */}
      <div className="py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Experience</h2>

        {/* Experience Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border-l-4 border-blue-600">
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6">
            {/* Company Logo */}
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0">
              <Image 
                src="/gaurav-consultancy-logo.png" 
                alt="Gaurav Consultancy Services Logo"
                width={64}
                height={64}
                objectFit="cover"
              />
            </div>

            {/* Experience Details */}
            <div className="flex-1">
              <div className="text-2xl font-semibold text-blue-600 mb-2">
                Jr Web Developer 🌐
              </div>
              <div className="flex items-center text-lg text-gray-600 mb-2">
                <FaBuilding className="mr-2 text-gray-500" />
                <span>Gaurav Consultancy Services</span>
              </div>
              <div className="flex items-center text-lg text-gray-600 mb-2">
                <FaCalendarAlt className="mr-2 text-gray-500" />
                <span>Jul 2024 - Present · 5 months</span>
              </div>
              <div className="flex items-center text-lg text-gray-600 mb-2">
                <FaMapMarkerAlt className="mr-2 text-gray-500" />
                <span>Hyderabad, Telangana, India · On-site</span>
              </div>

              <p className="mt-4 text-gray-600">
                Currently working as a Jr Web Developer at Gaurav Consultancy Services (GCS), where I am gaining hands-on experience in front-end and back-end web development. I focus on technologies like HTML, CSS, JavaScript (JSX), and other modern web development practices.
              </p>

              <div className="mt-4">
                <strong>Skills:</strong>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>HTML</li>
                  <li>CSS (Cascading Style Sheets)</li>
                  <li>JavaScript eXtension (JSX)</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                  <li>Git & GitHub</li>
                  <li>Responsive Web Design</li>
                  <li>Version Control (Git)</li>
                  <li>Agile Methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}