import { useState } from "react";
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import { toast } from "react-toastify";
import Loader from "@/components/Common/Loader";
import Pagination from "@/components/Common/Pagination";
import SpeakerModal from "@/components/Modals/SpeakerModal";
import { useGetSpeakersListQuery } from "@/Lib/features/apiSlice";
import { BASE_URL, IMAGE_URL } from "@/Lib/config/constant";
import { SpeakerType } from "@/types/Index";

export default function Speaders() {
  const { data, isLoading, isError } = useGetSpeakersListQuery({
    page_num: 1,
    page_size: 12,
    order_by: "id",
    order_direction: "desc",
    activity_id: 1,
    activity_type: "EVENT",
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);

  const openModal = (speaker: any) => {
    setSelectedSpeaker(speaker);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSpeaker(null);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    toast.error("Failed to load speakers data");
    return <p>Error loading speakers. Please try again later.</p>;
  }

  const speakers = data?.data || [];

  return (
    <main>
      <PageHeader title="Speakers" currentPage="Speakers" description="" />
      <section className="section-md relative mt-[-25rem] overflow-hidden md:mt-[-25rem] pb-40">
        <div className="container relative z-20">
          <div className="row gy-4 -mt-6">
            {speakers.map((speaker: SpeakerType) => (
              <div
                key={speaker.id}
                data-aos="fade-up-sm"
                className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
              >
                <div
                  className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white cursor-pointer"
                  onClick={() => openModal(speaker)} // Open modal on click
                >
                  <div className="inline-block h-full max-h-[270px] w-full overflow-hidden">
                    <img
                      alt="author"
                      loading="lazy"
                      width="408"
                      height="262"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={BASE_URL + speaker.profile}
                    />
                  </div>
                  <div className="px-5 pb-12">
                    <div className="-mt-[30px] mb-3 flex items-center">
                      <img
                        alt="Author"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        className="h-[40px] w-[40px] object-cover rounded-full z-20"
                        src={`${IMAGE_URL}/images/author/1.jpg`}
                      />
                      <span className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70">
                        {`${speaker.firstname} ${speaker.lastname}`}
                      </span>
                    </div>
                    <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                      {speaker.firstname} {speaker.lastname}
                    </h2>
                    <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                      {new Date(speaker.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination currentPage={1} lastPage={4} pageRoute="#" />
        </div>
      </section>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          show={showModal}
          onClose={closeModal}
          speaker={selectedSpeaker}
        />
      )}
    </main>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link"; // Import Link for navigation
// import PageHeader from "@/components/Common/PageHeader/PageHeader";
// import { useGetSpeakersListQuery } from "@/lib/features/apiSlice"; // Assuming this is the correct path for your API slice
// import { toast } from "react-toastify";
// import Loader from "@/components/Common/Loader";
// import { BASE_URL } from "@/lib/config/constant";
// import Pagination from "@/components/Common/Pagination";

// export default function Integration() {
//   // Fetch speakers list using the useGetSpeakersListQuery hook
//   const { data, isLoading, isError } = useGetSpeakersListQuery({
//     page_num: 1,
//     page_size: 12,
//     order_by: "id",
//     order_direction: "desc",
//     activity_id: 1,
//     activity_type: "EVENT",
//   });

//   // Loading state
//   if (isLoading) {
//     return <Loader/>;
//   }

//   // Error state
//   if (isError) {
//     toast.error("Failed to load speakers data");
//     return <p>Error loading speakers. Please try again later.</p>;
//   }

//   // Destructure the relevant data from the API response
//   const speakers = data?.data || [];

//   return (
//     <main>
//       <PageHeader title="Speakers" currentPage="Speakers" description="" />
//       <section className="section-md relative mt-[-25rem] overflow-hidden md:mt-[-25rem] pb-40">
//         <div className="container relative z-20">
//           <div className="row gy-4 -mt-6">
//             {speakers.map((speaker) => (
//               <div
//                 key={speaker.id}
//                 data-aos="fade-up-sm"
//                 className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
//               >
//                 <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
//                   <Link
//                     className="inline-block h-full max-h-[270px] w-full overflow-hidden"
//                     href={`/speakers/${speaker.id}`} // Assuming each blog has its own page
//                   >
//                     <Image
//                       alt="author"
//                       loading="lazy"
//                       width="408"
//                       height="262"
//                       decoding="async"
//                       data-nimg="1"
//                       className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                       src={BASE_URL + speaker.profile}
//                     />
//                   </Link>
//                   <div className="px-5 pb-12">
//                     <div className="-mt-[30px] mb-3 flex items-center">
//                       <Link
//                         className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
//                         title="Author"
//                         href={`/speakers/${speaker.user_id}`} // Link to author's page
//                       >
//                         <Image
//                           alt="Author"
//                           loading="lazy"
//                           width="40"
//                           height="40"
//                           decoding="async"
//                           data-nimg="1"
//                           className="h-[40px] w-[40px] object-cover"
//                           src="/images/author/1.jpg" // Placeholder for author image
//                         />
//                       </Link>
//                       <Link
//                         className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
//                         href={`/speakers/${speaker.user_id}`}
//                       >
//                         Author Name
//                       </Link>
//                     </div>
//                     <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
//                       <Link
//                         className="link-animation relative after:absolute after:inset-0"
//                         href={`/speakers/${speaker.id}`}
//                       >
//                         {speaker.firstname}
//                         {speaker.lastname}
//                       </Link>
//                     </h2>
//                     <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
//                       {new Date(speaker.created_at).toLocaleDateString()}{" "}
//                       {/* Format the date */}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Pagination currentPage={1} lastPage={4} pageRoute="/blog" />
//         </div>
//       </section>
//     </main>
//   );
// }
