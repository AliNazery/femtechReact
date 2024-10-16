import React, { useEffect } from "react";

interface EventModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  description: string;
  content: string;
  date: string;
  time: string;
  location: string;
  deadline: string;
  thumbnail: string;
}

const EventModal: React.FC<EventModalProps> = ({
  show,
  onClose,
  title,
  description,
  content,
  date,
  time,
  location,
  deadline,
  thumbnail,
}) => {
  useEffect(() => {
    if (show) {
      // Disable background scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore background scrolling when modal is closed
      document.body.style.overflow = "";
    }

    // Cleanup on unmount or when modal closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-7xl h-[90%] relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-3xl text-black pr-4 pl-4 hover:bg-red-600"
        >
          &times;
        </button>
        <div className="flex h-full">
          <div style={{ flex: 1, alignItems: "center" }} className="h-full">
            <img
              src={thumbnail}
              alt={title}
              className="w-full object-cover mt-10 border rounded-md"
            />
          </div>
          <div style={{ flex: 2 }} className="p-4 overflow-y-auto">
            <h2 className="text-2xl font-bold my-4">{title}</h2>
            <p
              className="text-lg text-gray-700 mb-6"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>

            <div className="prose prose-lg max-w-full mb-8">
              <div dangerouslySetInnerHTML={{ __html: content }}></div>

              <p className="text-lg font-semibold">
                Date: {new Date(date).toLocaleDateString()}
              </p>
              <p className="text-lg font-semibold">Time: {time}</p>
              <p className="text-lg font-semibold">Location: {location}</p>
              <p className="text-lg font-semibold">
                Deadline: {new Date(deadline).toLocaleDateString()}
              </p>
            </div>

            {/* Registration Button */}
            {/* <div className="mt-8">
              <a
                href="#"
                className="inline-block px-6 py-3 bg-pink text-neutral-800 font-semibold rounded-lg hover:bg-deepPink"
              >
                Register Now
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;

// import { useEffect } from "react";
// import React from "react";
// import Link from "next/link";

// interface EventModalProps {
//   show: boolean;
//   onClose: () => void;
//   title: string;
//   description: string;
//   content: string;
//   date: string;
//   time: string;
//   location: string;
//   deadline: string;
//   thumbnail: string;
// }

// const EventModal: React.FC<EventModalProps> = ({
//   show,
//   onClose,
//   title,
//   description,
//   content,
//   date,
//   time,
//   location,
//   deadline,
//   thumbnail,
// }) => {
//   useEffect(() => {
//     if (show) {
//       // Disable background scrolling when modal is open
//       document.body.style.overflow = "hidden";
//     } else {
//       // Restore background scrolling when modal is closed
//       document.body.style.overflow = "";
//     }

//     // Cleanup on unmount or when modal closes
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [show]);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-8 w-full max-w-7xl h-[90%] relative overflow-auto">
//         <button
//           onClick={onClose}
//           className="absolute top-0 right-0 text-3xl text-black pr-4 pl-4 hover:bg-red-600"
//         >
//           &times;
//         </button>
//         <div className="flex h-full ">
//           <div style={{ flex: 1, alignItems: "center" }} className="h-full">
//             <img
//               src={thumbnail}
//               alt={title}
//               className="w-full object-cover mt-10 border rounded-md"
//             />
//           </div>
//           <div style={{ flex: 2 }} className="p-4 overflow-y-auto">
//             <h2 className="text-2xl font-bold my-4">{title}</h2>
//             <p
//               className="text-lg text-gray-700 mb-6"
//               dangerouslySetInnerHTML={{ __html: description }}
//             ></p>

//             <div className="prose prose-lg max-w-full mb-8">
//               <div dangerouslySetInnerHTML={{ __html: content }}></div>

//               <p className="text-lg font-semibold">
//                 Date: {new Date(date).toLocaleDateString()}
//               </p>
//               <p className="text-lg font-semibold">Time: {time}</p>
//               <p className="text-lg font-semibold">Location: {location}</p>
//               <p className="text-lg font-semibold">
//                 Deadline: {new Date(deadline).toLocaleDateString()}
//               </p>
//             </div>

//             {/* Registration Button */}
//             {/* <div className="mt-8">
//               <Link
//                 href="#"
//                 className="inline-block px-6 py-3 bg-pink text-neutral-800 font-semibold rounded-lg hover:bg-deepPink"
//               >
//                 Register Now
//               </Link>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventModal;

// import { useEffect } from "react";
// import React from "react";

// interface EventModalProps {
//   show: boolean;
//   onClose: () => void;
//   title: string;
//   description: string;
//   thumbnail: string;
//   date: string;
//   authorName: string;
// }

// const EventModal: React.FC<EventModalProps> = ({
//   show,
//   onClose,
//   title,
//   description,
//   thumbnail,
//   date,
//   authorName,
// }) => {
//   useEffect(() => {
//     if (show) {
//       // Disable background scrolling when modal is open
//       document.body.style.overflow = "hidden";
//     } else {
//       // Restore background scrolling when modal is closed
//       document.body.style.overflow = "";
//     }

//     // Cleanup on unmount or when modal closes
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [show]);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-8 w-full max-w-7xl h-[90%] relative overflow-auto">
//         <button
//           onClick={onClose}
//           className="absolute top-0 right-0 text-3xl text-black pr-4 pl-4 hover:bg-red-600"
//         >
//           &times;
//         </button>
//         <div className="flex h-full">
//           <div style={{ flex: 1, alignItems: "center" }} className="h-full">
//             <img
//               src={thumbnail}
//               alt={title}
//               className="w-full object-cover mt-10 border rounded-md"
//             />
//           </div>
//           <div style={{ flex: 2 }} className="p-4 overflow-y-auto">
//             <h2 className="text-2xl font-bold my-4">{title}</h2>
//             <p className="text-gray-700 mb-2">By: {authorName}</p>
//             <p className="text-gray-700 mb-6">Date: {date}</p>
//             <p
//               className="text-lg text-gray-700 mb-6"
//               dangerouslySetInnerHTML={{ __html: description }}
//             ></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventModal;
