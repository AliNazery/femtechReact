// "use client"


// import Image from "next/image";
// import React from "react";
// import { InnovativeOneSvg, InnovativeTwoSvg } from "../Common/svg";
// import SectionTitleTwo from "../Common/Title/SectionTitleTwo";
// import { useGetSingleStoryQuery } from "@/lib/features/apiSlice";

// export default function Innovative() {
//   // Replace '1' with the desired story ID as needed
//   const { data, error, isLoading } = useGetSingleStoryQuery(1);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching story.</p>;

//   // Destructure the data from the query response
//   const { title, description, thumbnail } = data;

//   return (
//     <section className="section-lg feature triangle-up pb-0 relative z-20 overflow-hidden pt-[100px] lg:pt-[200px] xl:pt-[300px] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-bgo1Color after:content-[''] after:clip-path-Innovative-polygon">
//       <div className="container relative z-20 px-4 sm:px-6">
//         <div className="row flex flex-wrap gy-4 items-center -mt-6 -mx-3">
//           <div data-aos="fade-left-sm" className="lg:w-7/12 order-1 px-3 mt-6">
//             <div className="feature-clip-path-1 relative">
//               <Image
//                 alt="feature image"
//                 loading="lazy"
//                 width="630"
//                 height="613"
//                 decoding="async"
//                 data-nimg="1"
//                 className="mx-auto block xl:mx-auto"
//                 src={thumbnail} // Use the thumbnail from the story data
//               />

//               <InnovativeOneSvg />
//               <InnovativeTwoSvg />
//             </div>
//           </div>
//           <SectionTitleTwo
//             className="lg:w-5/12 order-2 px-3 mt-6"
//             subtitle="Our Student Story"
//             title={title} // Use the title from the story data
//             description={description} // Use the description from the story data
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from 'next/image';
// import React from 'react'
// import { InnovativeOneSvg, InnovativeTwoSvg } from '../Common/svg';
// import SectionTitleTwo from '../Common/Title/SectionTitleTwo';
// import { useGetSingleStoryQuery } from '@/lib/features/apiSlice';

// export default function Innovative() {

//   return (
//     <>
//       <section className="section-lg feature triangle-up pb-0 relative z-20 overflow-hidden pt-[100px] lg:pt-[200px] xl:pt-[300px] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-bgo1Color after:content-[''] after:clip-path-Innovative-polygon">
//         <div className="container relative z-20 px-4 sm:px-6">
//           <div className="row flex flex-wrap gy-4 items-center -mt-6 -mx-3">
//             <div
//               data-aos="fade-left-sm"
//               className="lg:w-7/12 order-1 px-3 mt-6"
//             >
//               <div className="feature-clip-path-1 relative  ">
//                 <Image
//                   alt="feature image"
//                   loading="lazy"
//                   width="630"
//                   height="613"
//                   decoding="async"
//                   data-nimg="1"
//                   className="mx-auto block xl:mx-auto opacity- "
//                   src="/images/innovative/story.jpeg"
//                 />

//                 <InnovativeOneSvg />
//                 <InnovativeTwoSvg />
//               </div>
//             </div>
//             <SectionTitleTwo
//               className="lg:w-5/12 order-2 px-3 mt-6"
//               subtitle="Our Student Story"
//               title="Meena Has participated at our courses"
//               description="One of our inspiring students shares her experience with Fems Tech, highlighting our commitment to Afghan girls' education. She expresses gratitude for the support and resources that have empowered her to pursue a brighter future. Her story reflects the transformative power of education and the impact of Fems Tech!"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
