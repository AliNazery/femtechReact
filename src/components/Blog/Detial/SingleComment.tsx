import React from 'react'
import Image from 'next/image';
import { ReplySvg, SettingSvg } from '@/components/Common/svg';
import { useGetSingleCommentQuery } from '@/lib/features/apiSlice';
import {toast } from 'react-toastify';
import Link from 'next/link';

export default function SingleComment() {
    const { data, isError, isLoading } = useGetSingleCommentQuery(1);

    
  if (isLoading) return <p>Comment Loading</p>;
    if (isError){toast.error("Comment Load Failed")}
    const {message, created_at } = data;
  return (
    <>
      <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <Image
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie Green"
                width={24}
                height={24}
              />
              Bonnie Green
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time
                dateTime="2022-02-08"
                title="February 8th, 2022"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                {new Date(created_at).toLocaleDateString()}
              </time>
            </p>
          </div>
          <button
            id="dropdownComment3Button"
            data-dropdown-toggle="dropdownComment3"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <SettingSvg />
            <span className="sr-only">Comment settings</span>
          </button>

          <div
            id="dropdownComment3"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Remove
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          {/* The article covers the essentials, challenges, myths and stages the UX
          designer should consider while creating the design strategy. */}
          {message}
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
          >
            <ReplySvg />
            Reply
          </button>
        </div>
      </article>
      <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <Image
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                alt="Helene Engels"
                width={24}
                height={24}
              />
              Helene Engels
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time
                dateTime="2022-02-08"
                title="February 8th, 2022"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                {new Date(created_at).toLocaleDateString()}
              </time>
            </p>
          </div>
          <button
            id="dropdownComment4Button"
            data-dropdown-toggle="dropdownComment4"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>

          <div
            id="dropdownComment4"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <Link
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Remove
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </Link>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          {/* Thanks for sharing this. I do came from the Backend development and
          explored some of the tools to design my Side Projects. */}
                  {message}
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
          >
            <ReplySvg />
            Reply
          </button>
        </div>
      </article>
    </>
  );
}
