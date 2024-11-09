"use client";

import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // For icons
import Image from 'next/image'; // For image handling (Next.js Image component)
import { useEffect, useState } from 'react';

export default function Experience() {
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const calculateDuration = () => {
      const startDate = new Date('2024-07-22'); // Start date: July 22, 2024
      const currentDate = new Date(); // Get today's date

      // Calculate the difference in milliseconds
      const diffInMs = currentDate.getTime() - startDate.getTime();  // Use getTime() for valid date difference

      // Convert milliseconds to days
      const daysInMs = 1000 * 60 * 60 * 24;
      const totalDays = Math.floor(diffInMs / daysInMs);

      // Calculate months and remaining days
      const months = Math.floor(totalDays / 30); // Approximate 30 days per month
      const remainingDays = totalDays % 30;

      // Set the formatted result in state
      setDuration(`${months} months and ${remainingDays} days`);
    };

    // Calculate the duration on component mount
    calculateDuration();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      {/* Experience Section */}
      <div className="py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Experience</h2>

        {/* Experience Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border-l-4 border-blue-600">
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6">
            {/* Company Logo */}
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0">
              <Image
                src="/gcs.jpg" // Ensure the image is in the public folder
                alt="Gaurav Consultancy Services Logo"
                width={64}
                height={64}
                className="object-cover"
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
                <span>{duration}</span>
              </div>
              <div className="flex items-center text-lg text-gray-600 mb-2">
                <FaMapMarkerAlt className="mr-2 text-gray-500" />
                <span>Hyderabad, Telangana, India · On-site</span>
              </div>

              <p className="mt-4 text-gray-600">
                Currently working as a Jr Web Developer at Gaurav Consultancy Services (GCS), where I am gaining hands-on experience in front-end and back-end web development. I focus on technologies like HTML, CSS, JavaScript (JSX), and other modern web development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
