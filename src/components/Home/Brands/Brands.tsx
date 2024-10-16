
import { IMAGE_URL } from "@/Lib/config/constant";
import { brandImages } from "../Hero/Data"; 


export default function Brands() {
  return (
    <section className="md:py-28">
      <div className="shadow-default relative z-0 mx-3 max-w-[1440px] bg-white py-8 md:mx-6 md:py-16 lg:mx-auto">
        <div className="container">
          <div className="row justify-center flex flex-wrap gap-6">
            {brandImages.slice(0, 9).map(({ src, title }, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col items-center aos-init aos-animate p-4 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow duration-300"
              >
                {/* Image Wrapper for maintaining aspect ratio and fit */}
                <div className="flex items-center justify-center w-full h-32">
                  <img
                    src={IMAGE_URL + src}
                    alt={`Brand ${index + 1}`}
                    className="object-contain" // Ensures logo fits within bounds
                    style={{ width: "160px", height: "80px" }} // Adjust width and height as needed
                  />
                </div>
                {/* Title Below the Image */}
                <h3 className="mt-4 text-center text-lg font-semibold">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from 'react'
// import Image from 'next/image';
// import { brandImages } from '../Hero/Data';

// export default function Brands() {
//   return (
//     <section className="md:py-28 ">
//       <div className="shadow-default relative z-0 mx-3 max-w-[1440px] bg-white py-8 md:mx-6 md:py-16 lg:mx-auto">
//         <div className="container">
//           <div className="row justify-between flex flex-wrap gap-4">
//             {brandImages.map((src, index) => (
//               <div
//                 key={index}
//                 className="w-5/12 sm:w-1/4 lg:w-1/6 aos-init aos-animate aspect-[9/9]"
//               >
//                 <Image
//                   src={src}
//                   alt={`Brand ${index + 1}`}
//                   className="inline-block py-4 sm:mx-auto text-transparent object-cover"
//                   width={160} // Example width, adjust as needed
//                   height={60} // Example height, adjust as needed
//                   layout="responsive"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
