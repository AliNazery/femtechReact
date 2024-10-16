import PageHeader from "@/components/Common/PageHeader/PageHeader";
import Event from "@/components/Event/Event";

export default function Events() {
  return (
    <main>
      <PageHeader
        title="Discover Women's Tech Events"
        currentPage="Events"
        description=""
      />
      <Event />
    </main>
  );
}





























// "use client"
// import React from 'react'
// import Image from 'next/image'
// import PageHeader from '@/components/Common/PageHeader/PageHeader';
// import { IntegOneSvg, IntegTwoSvg } from '@/components/Common/PagesSvg';
// import { cardsData } from './cardsData';
// import { PlusSvg } from '@/components/Common/svg';
// import { useGetEventListQuery } from '@/lib/features/apiSlice';
// import { toast } from 'react-toastify';

// export default function Integration() {
//   const { data, isError, isLoading } = useGetEventListQuery({
//     page_num : 1,
//     page_size : 12,
//     order_by : "id",
//     order_direction : "desc",
//   });

//   if (data) {console.log(data);
//   }
//   if (!data || !data.data || data.data.length === 0) {
//     toast.error("No Events found");
//   }
//    const { title, description, content, date,  } = data.data[0];
//   return (
//     <main>
//       <main>
//         <PageHeader
//           title="Discover Women's Tech Events"
//           currentPage="Events"
//           description=""
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
//                     {/* Event Thumbnail */}
//                     <Image
//                       alt={card.title}
//                       loading="lazy"
//                       width={600} // Larger image size to showcase event
//                       height={300}
//                       decoding="async"
//                       className="w-full h-[200px] object-cover rounded-xl mb-4"
//                       src={card.thumbnail}
//                     />
//                     {/* Event Title */}
//                     <h3 className="mb-2 font-primary text-xl font-semibold text-dark sm:text-2xl">
//                       <a href={card.link}>{card.title}</a>
//                     </h3>
//                     {/* Event Description */}
//                     <p className="text-gray-600 mb-4">
//                       {card.description.length > 100
//                         ? `${card.description.substring(0, 100)}...`
//                         : card.description}
//                     </p>
//                     {/* Event Date, Time, and Location */}
//                     <div className="mb-4">
//                       <p className="text-sm text-gray-500">
//                         <strong>Date:</strong> {card.date}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         <strong>Time:</strong> {card.time}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         <strong>Location:</strong> {card.location}
//                       </p>
//                     </div>
//                     {/* Register Button */}
//                     <div className="flex justify-between items-center">
//                       <a
//                         href="#"
//                         className="btn btn-outline-primary py-[10px] px-[20px]"
//                       >
//                         Register Now
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

{
  /* <section className="section-md relative mt-[-25rem] overflow-hidden md:mt-[-25rem] pb-40">
          <div className="container relative z-20">
            <div className="flex flex-wrap gap-6 mx-auto">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  data-aos="fade-up-sm"
                  className="w-full md:w-1/2 lg:w-[32%]"
                >
                  <div className="shadow-default overflow-hidden rounded-xl bg-white p-10">
                    <div className="flex flex-wrap justify-between items-center">
                      <Image
                        alt="icon"
                        loading="lazy"
                        width={72}
                        height={72}
                        decoding="async"
                        className="rounded-xl"
                        src={card.imageSrc}
                      />
                      <a
                        href="#"
                        className="btn btn-outline-primary py-[13px] px-[28px]"
                      >
                        <PlusSvg/>
                        register
                      </a>
                    </div>
                    <h3 className="mb-4 font-primary text-xl font-semibold text-dark sm:text-2xl">
                      <a href={card.link}>{card.title}</a>
                    </h3>
                    <p>{card.description}</p>

                  </div>
                </div>
              ))}
            </div>
            <IntegOneSvg />
            <IntegTwoSvg />
          </div>
        </section> */
}
//       </main>
//     </main>
//   );
// }
