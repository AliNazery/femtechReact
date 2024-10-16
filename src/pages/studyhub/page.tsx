import { useState } from "react";
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import { IntegOneSvg, IntegTwoSvg } from "@/components/Common/PagesSvg";
import Loader from "@/components/Common/Loader";
import StudyHubModal from "@/components/Modals/StudyHubModal"; // Assuming the Modal component is in this path
import { useGetStudyHubListQuery } from "@/lib/features/apiSlice";
import { toast } from "react-toastify";
import { BASE_URL } from "@/lib/config/constant";
import { StudyhubType } from "@/types/Index";
import { Link } from "react-router-dom";

export default function StudyHub() {
  const { data, error, isLoading } = useGetStudyHubListQuery({
    page_num: 1,
    page_size: 12,
    order_by: "id",
    order_direction: "desc",
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedHub, setSelectedHub] = useState<any>(null);

  const openModal = (hub: any) => {
    setSelectedHub(hub);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedHub(null);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    toast.error("Error Loading Data");
  }

  const studyHubData = data?.data || [];

  return (
    <main>
      <PageHeader title="Study Hubs" currentPage="Study Hubs" description="" />
      <section className="section-md relative mt-[-25rem] overflow-hidden md:mt-[-25rem] pb-40">
        <div className="container relative z-20">
          <div className="flex flex-wrap gap-6 mx-auto">
            {studyHubData.length === 0 ? (
              <p>No study hubs available.</p>
            ) : (
              studyHubData.map((hub : StudyhubType) => (
                <div
                  key={hub.id}
                  data-aos="fade-up-sm"
                  className="w-full md:w-1/2 lg:w-[32%]"
                >
                  <div className="shadow-default overflow-hidden rounded-xl bg-white p-6 flex flex-col h-full">
                    <img
                      alt={hub.title}
                      loading="lazy"
                      width={200}
                      height={120}
                      decoding="async"
                      className="rounded-xl w-full object-cover h-[200px]"
                      src={BASE_URL + hub.thumbnail || "/default-thumbnail.jpg"}
                    
                    />
                    <div className="flex flex-col flex-grow justify-between mt-4">
                      <h3 className="mb-4 font-primary text-xl font-semibold text-dark sm:text-2xl">
                        <Link to={hub.media_url}>{hub.title}</Link>
                      </h3>
                      <p className="mb-4">{hub.description}</p>
                      <button
                        onClick={() => openModal(hub)}
                        className="btn btn-outline-primary py-[10px] px-[12px] mt-4 self-start"
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
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <IntegOneSvg />
          <IntegTwoSvg />
        </div>
      </section>

      {/* Modal for viewing more details */}
      {selectedHub && (
        <StudyHubModal
          show={showModal}
          onClose={closeModal}
          title={selectedHub.title}
          description={selectedHub.description}
          content={selectedHub.content}
          thumbnail={BASE_URL + selectedHub.thumbnail || "/default-thumbnail.jpg"}
        />
      )}
    </main>
  );
}
















// import React from 'react'
// import Image from 'next/image'
// import PageHeader from '@/components/Common/PageHeader/PageHeader';
// import { IntegOneSvg, IntegTwoSvg } from '@/components/Common/PagesSvg';
// import { cardsData } from './cardsData';

// export default function Integration() {
//   return (
//     <main>
//       <main>
//         <PageHeader
//           title="How To Integrate With Spydea"
//           currentPage="Integration"
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
