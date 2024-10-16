import PageHeader from "@/components/Common/PageHeader/PageHeader";
import { IntegOneSvg, IntegTwoSvg } from "@/components/Common/PagesSvg";
import Loader from "@/components/Common/Loader";
import {toast} from "react-toastify";
import { useGetAwardListQuery } from "@/lib/features/apiSlice";
import { Link } from "react-router-dom";


export default function Awards() {
  const { data, isLoading, error } = useGetAwardListQuery({
    page_num: 1,
    page_size: 12,
    order_by: "id",
    order_direction: "desc",
  });

  // Handle loading state
  if (isLoading) {
    return <Loader/> // You can replace this with a Loader component
  }

  // Handle error state
  if (error) {
      toast.error("Failed to load awards. Please try again later");      
  }
  

  // Extract award data
  const awards = data?.data || [];

  return (
    <main>
      <PageHeader
        title="Fem Tech Awards"
        currentPage="Awards"
        description="Celebrating innovation in women's health and technology, the Fem Tech Awards honor trailblazers making a global impact through cutting-edge solutions and research."
      />
      <section className="section-md relative mt-[-25rem] overflow-hidden md:mt-[-20rem] pb-40">
        <div className="container relative z-20">
          <div className="flex flex-wrap gap-6 mx-auto">
            {awards.map((award: any) => (
              <div
                key={award.id}
                data-aos="fade-up-sm"
                className="w-full md:w-1/2 lg:w-[32%]"
              >
                <div className="shadow-default overflow-hidden rounded-xl bg-white p-8">
                  <div className="flex flex-wrap justify-between items-center">
                    <img
                      alt="Award Thumbnail"
                      loading="lazy"
                      width={120}
                      height={50}
                      decoding="async"
                      className="rounded-xl w-full h-[200px] object-cover"
                      src={award.thumbnail}
                    />
                  </div>

                  <h3 className="mb-4 font-primary text-xl font-semibold text-dark sm:text-2xl">
                    {award.award_name}
                  </h3>
                  <p className="mb-2 text-gray-700">
                    {award.criteria.length > 120
                      ? `${award.criteria.substring(0, 120)}...`
                      : award.criteria}
                  </p>
                  <p className="text-gray-600">
                    {award.description.length > 120
                      ? `${award.description.substring(0, 120)}...`
                      : award.description}
                  </p>
                  <p className="mt-4 font-semibold">
                    Past Winner: {award.past_winners}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 mb-4">
                    Deadline: {award.deadline}
                  </p>
                  <Link
                    to={`/awards/${award.id}`}
                    className="btn btn-outline-primary py-[10px] px-[15px] transition duration-300 hover:bg-blue-600"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="mr-3 inline-block h-5 w-5 fill-current"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                    </svg>
                    View Award
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <IntegOneSvg />
          <IntegTwoSvg />
        </div>
      </section>
    </main>
  );
}

// import React from "react";
// import Image from "next/image";
// import PageHeader from "@/components/Common/PageHeader/PageHeader";
// import { IntegOneSvg, IntegTwoSvg } from "@/components/Common/PagesSvg";
// import { cardsData } from "./cardsData";

// export default function Integration() {
//   return (
//     <main>
//       <main>
//         <PageHeader
//           title="Fem Tech Awards"
//           currentPage="Awards"
//           description="Celebrating Innovation and Excellence in Women's Health and Technology. The Fem Tech Awards recognize outstanding contributions to the field of women's health and technology. Join us in honoring the trailblazers who are making a difference through innovative solutions, impactful research, and commitment to improving women's lives globally."
//         />
//         <section className="section-md relative mt-[-25rem] overflow-hidden md:mt-[-25rem] pb-40">
//           <div className="container relative z-20">
//             <div className="flex flex-wrap gap-6 mx-auto">
//               {cardsData.map((card, index) => (
//                 <div
//                   key={index}
//                   data-aos="fade-up-sm"
//                   className="w-full md:w-1/2 lg:w-[32%]"
//                 >
//                   <div className="shadow-default overflow-hidden rounded-xl bg-white p-10">
//                     <div className="flex flex-wrap justify-between items-center">
//                       <Image
//                         alt="icon"
//                         loading="lazy"
//                         width={72}
//                         height={72}
//                         decoding="async"
//                         className="rounded-xl"
//                         src={card.imageSrc}
//                       />
//                       <a
//                         href="#"
//                         className="btn btn-outline-primary py-[13px] px-[28px]"
//                       >
//                         <svg
//                           stroke="currentColor"
//                           fill="currentColor"
//                           strokeWidth="0"
//                           viewBox="0 0 448 512"
//                           className="mr-3 inline-block h-5 w-5 fill-current"
//                           height="1em"
//                           width="1em"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
//                         </svg>
//                         Install
//                       </a>
//                     </div>

//                     <h3 className="mb-4 font-primary text-xl font-semibold text-dark sm:text-2xl">
//                       <a href={card.link}>{card.title}</a>
//                     </h3>
//                     <p>{card.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <IntegOneSvg />
//             <IntegTwoSvg />
//           </div>
//         </section>
//       </main>
//     </main>
//   );
// }
