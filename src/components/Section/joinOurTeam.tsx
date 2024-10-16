"use client";
import React, { useState } from "react";
import SectionMiddleTitle from "../Common/Title/SectionMiddleTitle";
import {
  AboutHourIcon,
  AboutLocationIcon,
  AboutRightArrowIcon,
} from "../Common/Icons/AboutIcon/AboutIcon";
import { AboutTeamOneSvg, AboutTeamTwoSvg } from "../Common/AboutSvg";
import { useGetJobListQuery } from "@/lib/features/apiSlice";
import { toast } from "react-toastify";
import Loader from "../Common/Loader";
import JobModal from "../Modals/JobsModal";


export default function JoinOurTeam() {
  // Fetch job list using RTK Query
  const { data, isError, isLoading } = useGetJobListQuery({
    page_num: 1,
    page_size: 12,
    order_by: "id",
    order_direction: "desc",
  });

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  // Open modal
  const openModal = (job: any) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  // Loading state
  if (isLoading) {
    return <Loader />;
  }

  // Error state
  if (isError) {
    toast.error("Failed to load job positions");
    return <p>Failed to load positions. Please try again later.</p>;
  }

  // Destructure the relevant data from API response
  const jobPositions = data?.data || [];

  return (
    <div>
      <section className="section-md relative z-30 overflow-hidden pt-0 pb-[100px] md:pb-[200px]">
        <div className="container relative px-4 sm:px-6">
          <SectionMiddleTitle
            subtitle="JOIN OUR TEAM"
            title="Fem Tech Open Positions"
            description="Join FemTech to empower women in tech. Collaborate and innovate to create opportunities and drive change in STEM."
          />
          <div className="row gy-4 relative justify-center -mt-6">
            {jobPositions.length === 0 ? (
              <p>No positions available at the moment.</p>
            ) : (
              jobPositions.map((position, index) => (
                <div
                  key={index}
                  data-aos="fade-up-sm"
                  className="md:w-8/12 lg:w-6/12 xl:w-5/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
                >
                  <div
                    className="shadow-default relative h-full rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-12"
                    onClick={() => openModal(position)} // Open modal on click
                  >
                    <h3 className="mb-6 text-xl font-semibold text-dark sm:text-2xl">
                      {position.title}
                    </h3>
                    <p className="text-zinc opacity-70">
                      {position.description.length > 100
                        ? `${position.description.substring(0, 100)}...`
                        : position.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-end justify-between gap-y-4">
                      <ul className="mr-4 inline-flex flex-wrap gap-x-4 gap-y-2 font-medium text-dark">
                        <li className="capitalize">
                          <AboutHourIcon />
                          Full-time
                        </li>
                        <li className="capitalize">
                          <AboutLocationIcon />
                          {position.location || "Location not specified"}
                        </li>
                      </ul>
                      <button className="font-semibold text-red-400">
                        Read More
                        <AboutRightArrowIcon />
                        <span className="sr-only">details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <AboutTeamOneSvg />
        </div>
        <AboutTeamTwoSvg />
      </section>

      {/* Modal for viewing more details */}
      {selectedJob && (
        <JobModal
          show={showModal}
          onClose={closeModal}
          title={selectedJob.title}
          description={selectedJob.description}
          content={selectedJob.content}
          thumbnail={selectedJob.thumbnail}
        />
      )}
    </div>
  );
}

// "use client";
// import React from "react";
// import SectionMiddleTitle from "../Common/Title/SectionMiddleTitle";
// import {
//   AboutHourIcon,
//   AboutLocationIcon,
//   AboutRightArrowIcon,
// } from "../Common/Icons/AboutIcon/AboutIcon";
// import Link from "next/link";
// import { AboutTeamOneSvg, AboutTeamTwoSvg } from "../Common/AboutSvg";
// import { useGetJobListQuery } from "@/lib/features/apiSlice"; // Assuming this is set up correctly for your RTK Query
// import { toast } from "react-toastify";
// import Loader from "../Common/Loader";

// export default function JoinOurTeam() {
//   // Fetch job list using RTK Query
//   const { data, isError, isLoading } = useGetJobListQuery({
//     page_num: 1,
//     page_size: 12,
//     order_by: "id",
//     order_direction: "desc",
//   });

//   // Loading state
//   if (isLoading) {
//     return <Loader/>;
//   }

//   // Error state
//   if (isError) {
//     toast.error("Failed to load job positions");
//     return <p>Failed to load positions. Please try again later.</p>;
//   }

//   // Destructure the relevant data from API response
//   const jobPositions = data?.data || [];

//   return (
//     <div>
//       <section className="section-md relative z-30 overflow-hidden pt-0 pb-[100px] md:pb-[200px]">
//         <div className="container relative px-4 sm:px-6">
//           <SectionMiddleTitle
//             subtitle="JOIN OUR TEAM"
//             title="Fem Tech Open Positions"
//             description="Join FemTech to empower women in tech. Collaborate and innovate to create opportunities and drive change in STEM."
//           />
//           <div className="row gy-4 relative justify-center -mt-6">
//             {jobPositions.length === 0 ? (
//               <p>No positions available at the moment.</p>
//             ) : (
//               jobPositions.map((position, index) => (
//                 <div
//                   key={index}
//                   data-aos="fade-up-sm"
//                   className="md:w-8/12 lg:w-6/12 xl:w-5/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
//                 >
//                   <Link href={`/job/${position.id}`}>
//                     <div className="shadow-default relative h-full rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-12">
//                       {/* Job Title */}
//                       <h3 className="mb-6 text-xl font-semibold text-dark sm:text-2xl">
//                         {position.title}
//                       </h3>

//                       {/* Job Description */}
//                       <p className="text-zinc opacity-70">
//                         {position.description.length > 100
//                           ? `${position.description.substring(0, 100)}...`
//                           : position.description}
//                       </p>

//                       <div className="mt-6 flex flex-wrap items-end justify-between gap-y-4">
//                         {/* Location and Job Type */}
//                         <ul className="mr-4 inline-flex flex-wrap gap-x-4 gap-y-2 font-medium text-dark">
//                           <li className="capitalize">
//                             <AboutHourIcon />
//                             Full-time
//                           </li>
//                           <li className="capitalize">
//                             <AboutLocationIcon />
//                             {position.location || "Location not specified"}
//                           </li>
//                         </ul>

//                         {/* Read More Button */}
//                         <button className="font-semibold text-red-400">
//                           Read More
//                           <AboutRightArrowIcon />
//                           <span className="sr-only">details</span>
//                         </button>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               ))
//             )}
//           </div>
//           <AboutTeamOneSvg />
//         </div>
//         <AboutTeamTwoSvg />
//       </section>
//     </div>
//   );
// }

// import React from "react";
// import SectionMiddleTitle from "../Common/Title/SectionMiddleTitle";
// import { AboutHourIcon, AboutLocationIcon, AboutRightArrowIcon } from "../Common/Icons/AboutIcon/AboutIcon";
// import Link from "next/link";
// import { AboutTeamOneSvg, AboutTeamTwoSvg } from "../Common/AboutSvg";

// const positions = [
//   {
//     href: "careers/position-1",
//     title: "Sr. React Native Developer",
//     description:
//       "Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte",
//     location: "San Francisco",
//   },
//   {
//     href: "careers/position-2",
//     title: "Lead UI/UX Designer",
//     description:
//       "Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte",
//     location: "San Francisco",
//   },
//   {
//     href: "careers/position-3",
//     title: "Head of Inbound Marketing",
//     description:
//       "Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte",
//     location: "San Francisco",
//   },
//   {
//     href: "careers/position-4",
//     title: "Lead Brand Designer",
//     description:
//       "Lorem ipsum dolor sit amet, cons dsec tetur adipi scing elit. Praesent sapien massa, convallis pelsle nte",
//     location: "San Francisco",
//   },
// ];

// export default function JoinOurTeam() {
//   return (
//     <div>
//       <section className="section-md relative z-30 overflow-hidden pt-0 pb-[100px] md:pb-[200px]">
//         <div className="container relative px-4 sm:px-6">
//           <SectionMiddleTitle
//             subtitle="JOIN OUR TEAM"
//             title="Fem Tech Open Positions"
//             description="Join FemTech to empower women in tech. Collaborate and innovate to create opportunities and drive change in STEM."
//           />
//           <div className="row gy-4 relative justify-center -mt-6">
//             {positions.map((position, index) => (
//               <div
//                 key={index}
//                 data-aos="fade-up-sm"
//                 className="md:w-8/12 lg:w-6/12 xl:w-5/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
//               >
//                 <Link href={position.href}>
//                   <div className="shadow-default relative h-full rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-12">
//                     <h3 className="mb-6 text-xl font-semibold text-dark sm:text-2xl">
//                       {position.title}
//                     </h3>
//                     <p className="text-zinc opacity-70">
//                       {position.description}
//                     </p>
//                     <div className="mt-6 flex flex-wrap items-end justify-between gap-y-4">
//                       <ul className="mr-4 inline-flex flex-wrap gap-x-4 gap-y-2 font-medium text-dark">
//                         <li className="capitalize">
//                           <AboutHourIcon />
//                           fulltime
//                         </li>
//                         <li className="capitalize">
//                           <AboutLocationIcon />
//                           {position.location}
//                         </li>
//                       </ul>
//                       <button className="font-semibold text-red-400">
//                         Read More
//                         <AboutRightArrowIcon />
//                         <span className="sr-only">details</span>
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//           <AboutTeamOneSvg />
//         </div>
//         <AboutTeamTwoSvg />
//       </section>
//     </div>
//   );
// }
