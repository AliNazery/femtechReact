import { useEffect } from "react";
import React from "react";

interface StudyHubModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    description: string;
    thumbnail: string;
    content: string
}



const StudyHubModal: React.FC<StudyHubModalProps> = ({ show, onClose, title, description, content, thumbnail }) => {

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
          <div className="flex h-full ">
            <div style={{ flex: 1, alignItems: "center" }} className="h-full">
              <img
                src={thumbnail}
                alt={title}
                className="w-full  object-cover mt-10 border rounded-md"
              />
            </div>
            <div style={{ flex: 2 }} className="p-4 overflow-y-auto">
              <h2 className="text-2xl font-bold my-4">{title}</h2>
              <p
                className="text-lg text-gray-700 mb-6"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>

              <div
                className="prose prose-lg max-w-full mb-8"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default StudyHubModal;
