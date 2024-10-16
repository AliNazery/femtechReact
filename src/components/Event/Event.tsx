import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Common/Loader";
import Pagination from "../Common/Pagination";
import { useGetEventListQuery } from "@/lib/features/apiSlice";
import EventModal from "../Modals/EventsModal";

const BaseURL = "https://femstech.wamasolution.com/public";

interface EventData {
  title: string;
  description: string;
  content: string;
  date: string;
  time: string;
  location: string;
  deadline: string;
  thumbnail: string;
}


const Event = ({ page_num = 1 }) => {
  const pageSize = 3;
  const { data, isError, isLoading } = useGetEventListQuery({
    page_num,
    page_size: pageSize,
    order_by: "id",
    order_direction: "desc",
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const openModal = (event:any) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    toast.error("Failed to load events");
    return (
      <p className="text-center">
        Failed to load events. Please try again later.
      </p>
    );
  }

  if (!data || !data.data || data.data.length === 0) {
    toast.error("No events found");
    return <p className="text-center">No events found</p>;
  }

  const totalEvents = data.total;
  const lastPage = Math.ceil(totalEvents / pageSize);

  return (
    <>
      <section className="section-md relative mt-[-28rem] py-[100px] md:py-[200px] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-30 px-4 sm:px-6">
          <div className="row gy-4 -mt-6">
            {data.data.map((event:any, index:number) => (
              <div
                key={index}
                data-aos="fade-up-sm"
                className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
              >
                <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                  <div
                    className="inline-block h-full max-h-[270px] w-full overflow-hidden cursor-pointer"
                    onClick={() => openModal(event)}
                  >
                    <img
                      alt="author"
                      loading="lazy"
                      width="408"
                      height="262"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={
                        BaseURL + event.thumbnail ||
                        "/path/to/default/image.jpg"
                      }
                    />
                  </div>
                  <div className="px-5 pb-12">
                    <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                      {event.title}
                    </h2>
                    <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                      {new Date(event.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          currentPage={page_num}
          lastPage={lastPage}
          pageRoute="/events"
        />
      </section>

      {/* Modal for viewing event details */}
      {selectedEvent && (
        <EventModal
          show={showModal}
          onClose={closeModal}
          title={selectedEvent.title}
          description={selectedEvent.description}
          content={selectedEvent.content}
          date={selectedEvent.date}
          time={selectedEvent.time}
          location={selectedEvent.location}
          deadline={selectedEvent.deadline}
          thumbnail={
            BaseURL + selectedEvent.thumbnail || "/default-thumbnail.jpg"
          }
        />
      )}
    </>
  );
};

export default Event;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useGetEventListQuery } from "@/lib/features/apiSlice";
// import { toast } from "react-toastify";
// import Loader from "../Common/Loader";
// import Pagination from "../Common/Pagination";
// import EventModal from "../Modals/EventsModal";

// const BaseURL = "https://femstech.wamasolution.com/public";

// export default function Event({ page_num = 1 }) {
//   const pageSize = 3;
//   const { data, isError, isLoading } = useGetEventListQuery({
//     page_num,
//     page_size: pageSize,
//     order_by: "id",
//     order_direction: "desc",
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState<any>(null);

//   const openModal = (event: any) => {
//     setSelectedEvent(event);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedEvent(null);
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (isError) {
//     toast.error("Failed to load events");
//     return (
//       <p className="text-center">
//         Failed to load events. Please try again later.
//       </p>
//     );
//   }

//   if (!data || !data.data || data.data.length === 0) {
//     toast.error("No events found");
//     return <p className="text-center">No events found</p>;
//   }

//   const totalEvents = data.total;
//   const lastPage = Math.ceil(totalEvents / pageSize);

//   return (
//     <>
//       <section className="section-md relative mt-[-28rem] py-[100px] md:py-[200px] overflow-hidden md:mt-[-32rem]">
//         <div className="container relative z-30 px-4 sm:px-6">
//           <div className="row gy-4 -mt-6">
//             {data.data.map((event, index) => (
//               <div
//                 key={index}
//                 data-aos="fade-up-sm"
//                 className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
//               >
//                 <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
//                   <div
//                     className="inline-block h-full max-h-[270px] w-full overflow-hidden cursor-pointer"
//                     onClick={() => openModal(event)}
//                   >
//                     <Image
//                       alt="author"
//                       loading="lazy"
//                       width="408"
//                       height="262"
//                       decoding="async"
//                       className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                       src={
//                         BaseURL + event.thumbnail ||
//                         "/path/to/default/image.jpg"

//                       }
//                       unoptimized={true}

//                     />
//                   </div>
//                   <div className="px-5 pb-12">
//                     <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
//                       {event.title}
//                     </h2>
//                     <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
//                       {new Date(event.created_at).toLocaleDateString()}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Pagination
//           currentPage={page_num}
//           lastPage={lastPage}
//           pageRoute="/events"
//         />
//       </section>

//       {/* Modal for viewing event details */}
//       {selectedEvent && (
//         <EventModal
//           show={showModal}
//           onClose={closeModal}
//           title={selectedEvent.title}
//           description={selectedEvent.description}
//           content={selectedEvent.content}
//           date={selectedEvent.date}
//           time={selectedEvent.time}
//           location={selectedEvent.location}
//           deadline={selectedEvent.deadline}
//           thumbnail={
//             BaseURL + selectedEvent.thumbnail || "/default-thumbnail.jpg"
//           }
//         />
//       )}
//     </>
//   );
// }
