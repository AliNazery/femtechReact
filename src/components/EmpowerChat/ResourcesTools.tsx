import Link from 'next/link';
import React from 'react'

export default function ResourcesTools() {
  return (
    <>
      <div className="container mx-auto mt-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">Resources and Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Guide to Breaking into Tech
            </h3>
            <p className="text-gray-700 mt-2">
              Download our comprehensive guide on how to break into the tech
              industry as a woman.
            </p>
            {/* <Link
              href="/resources/guide"
              className="mt-4 inline-block px-4 py-2 bg-pink text-white rounded hover:bg-deepPink"
            >
              Download
            </Link> */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Mentorship Program</h3>
            <p className="text-gray-700 mt-2">
              Learn more about our mentorship program and connect with industry
              leaders.
            </p>
            {/* <Link
              href="/resources/mentorship"
              className="mt-4 inline-block px-4 py-2 bg-pink text-white rounded hover:bg-deepPink"
            >
              Learn More
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
