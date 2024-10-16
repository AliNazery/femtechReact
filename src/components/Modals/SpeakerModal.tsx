import { BASE_URL } from "@/Lib/config/constant";
import React, { useEffect } from "react";

interface SpeakerModalProps {
  show: boolean;
  onClose: () => void;
  speaker: any; // Define speaker type more specifically if needed
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({
  show,
  onClose,
  speaker,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show || !speaker) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-5xl h-[90%] relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-3xl text-black pr-4 pl-4 hover:bg-red-600"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 mt-8">
          {/* Speaker Profile Image */}
          <div className="w-full md:w-1/3 text-center">
            <img
              alt={`${speaker.firstname} ${speaker.lastname}`}
              loading="lazy"
              width={250}
              height={250}
              decoding="async"
              className="rounded-full mx-auto"
              src={BASE_URL + speaker.profile}
            />
          </div>

          {/* Speaker Information */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-semibold text-gray-800">
              {`${speaker.firstname} ${speaker.lastname}`}
            </h2>

            {/* Speaker Bio */}
            <p className="text-gray-700 mt-4 mb-6 leading-relaxed">
              {speaker.bio ||
                "This speaker's bio is not available at the moment."}
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold text-gray-800">Email: </span>
                <a
                  href={`mailto:${speaker.Email}`}
                  className="ml-2 text-blue-600 hover:underline"
                >
                  {speaker.Email}
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-800">Phone: </span>
                <a
                  href={`tel:${speaker.Phone}`}
                  className="ml-2 text-blue-600 hover:underline"
                >
                  {speaker.Phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">
            More About {speaker.firstname}
          </h3>
          <p
            className="mt-4 text-gray-700"
            dangerouslySetInnerHTML={{
              __html:
                speaker.content ||
                "No additional content available for this speaker at the moment.",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
