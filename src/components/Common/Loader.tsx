import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader">
        <style >{`
          .loader {
            border: 8px solid #ececec;
            border-radius: 50%;
            border-top: 8px solid deepPink; /* Change color as needed */
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
              <p className="pl-2">Loading...</p>
    </div>
  );
};

export default Loader;
