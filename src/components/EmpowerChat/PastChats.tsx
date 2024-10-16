import Link from 'next/link';
import React from 'react'
import { pastChats } from './ChatsData';

export default function PastChats() {
  return (
    <>
      <div className="container mx-auto mt-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">Past Empower Chats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastChats.map(({ id, title, description, link }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-700 mt-2">{description}</p>
              {/* <Link
                href={link}
                className="mt-4 inline-block px-4 py-2 bg-pink text-white rounded hover:bg-deepPink"
              >
                View Recording
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
