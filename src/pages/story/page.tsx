import Loader from "@/components/Common/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { toast } from "react-toastify";
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import { useGetStoryListQuery } from "@/lib/features/apiSlice";
import { StoryType } from "@/types/Index";

export default function Story() {
  const { data, isLoading, isError } = useGetStoryListQuery({
    page_num: 1,
    page_size: 12,
    order_by: "id",
    order_direction: "desc",
  });

  // Handle loading state
  if (isLoading) {
    return <Loader />;
  }

  // Handle error state
  if (isError) {
    toast.error("Failed to load stories");
    return <p>Failed to load stories. Please try again later.</p>;
  }

  // Demo stories until more are available from backend
  const demoStories = [
    {
      id: 1,
      title: "Empowering Women in Tech",
      description:
        "This story is about the journey of women breaking into the tech industry.",
      content: "Full story content goes here...",
      thumbnail: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      title: "Overcoming Challenges",
      description:
        "A remarkable tale of perseverance and success in the face of obstacles.",
      content: "Full story content goes here...",
      thumbnail: "https://picsum.photos/600/400?random=2",
    },
    {
      id: 3,
      title: "Tech for Good",
      description:
        "How women in tech are using their skills to solve global challenges.",
      content: "Full story content goes here...",
      thumbnail: "https://picsum.photos/600/400?random=3",
    },
    {
      id: 4,
      title: "Innovators of Tomorrow",
      description:
        "Meet the women leading innovation in the tech world, changing the future.",
      content: "Full story content goes here...",
      thumbnail: "https://picsum.photos/600/400?random=4",
    },
  ];

  // Extract story data or use demo stories
  const stories = data?.data?.length ? data.data : demoStories;

    return (
      <>
        <PageHeader title="Your Stories" currentPage={"Story"} description={"See the story of the bests"} />
        <div className="min-h-screen flex items-center justify-center bg-[#F4FDFF] mt-[-50px]">
          <section className="w-full max-w-2xl">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 7000, disableOnInteraction: false }} // Move to next story every 7 seconds
            >
              {stories.map((story : StoryType) => (
                <SwiperSlide key={story.id}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
                    {/* Story Thumbnail */}
                    <div className="relative w-full h-64">
                      <img
                        src={story.thumbnail}
                        alt={story.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Story Details */}
                    <div className="p-6 text-center">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                        {story.title}
                      </h2>
                      <p className="text-gray-600 mb-3">
                        {story.description.length > 120
                          ? `${story.description.substring(0, 120)}...`
                          : story.description}
                      </p>
                      <p className="text-gray-500 mb-6">
                        {story.content.length > 120
                          ? `${story.content.substring(0, 320)}...`
                          : story.content}
                      </p>
                      {/* <Link
                        href={`/story/${story.id}`}
                        className="mt-4 text-neutral-800 bg-pink p-3 rounded-xl font-medium hover:bg-deepPink"
                      >
                        Read Full Story
                      </Link> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </>
    );
}

// "use client";

// import React from "react";
// import { useGetStoryListQuery } from "@/lib/features/apiSlice";
// import Loader from "@/components/Common/Loader";
// import SectionMiddleTitle from "@/components/Common/Title/SectionMiddleTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules"; // Correct import for Navigation

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "react-toastify";

// export default function Story() {
//   const { data, isLoading, isError } = useGetStoryListQuery({
//     page_num: 1,
//     page_size: 12,
//     order_by: "id",
//     order_direction: "desc",
//   });

//   // Handle loading state
//   if (isLoading) {
//     return <Loader />;
//   }

//   // Handle error state
//   if (isError) {
//     toast.error("Failed to load stories");
//     return <p>Failed to load stories. Please try again later.</p>;
//   }

//   // Extract story data
//   const stories = data?.data || [];

//   return (
//     <div>
//       {/* Page Header */}
//       <section className="bg-gray-100 py-12">
//         <div className="container px-4 mx-auto">
//           <SectionMiddleTitle
//             subtitle="INSPIRING STORIES"
//             title="Discover Our Latest Stories"
//             description="Dive into powerful stories that inspire and uplift. These are the journeys and achievements of women in tech, brought to you by FemTech."
//           />
//         </div>
//       </section>

//       {/* Story Slideshow */}
//       <section className="container mx-auto py-12">
//         <Swiper
//           navigation={true} // Enables navigation (next/previous)
//           modules={[Navigation]} // Make sure you are passing modules array
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//         >
//           {stories.length === 0 ? (
//             <p className="text-center text-lg">No stories available.</p>
//           ) : (
//             stories.map((story) => (
//               <SwiperSlide key={story.id}>
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                   <div className="flex flex-col lg:flex-row">
//                     {/* Story Thumbnail */}
//                     <div className="w-full lg:w-1/2 relative">
//                       <Image
//                         src={story.thumbnail}
//                         alt={story.title}
//                         width={600}
//                         height={400}
//                         className="object-cover h-full w-full"
//                       />
//                     </div>

//                     {/* Story Details */}
//                     <div className="p-6 lg:p-12 w-full lg:w-1/2 flex flex-col justify-between">
//                       <div>
//                         <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                           {story.title}
//                         </h2>
//                         <p className="text-gray-600 mb-6">
//                           {story.description.length > 150
//                             ? `${story.description.substring(0, 150)}...`
//                             : story.description}
//                         </p>
//                       </div>
//                       <Link
//                         href={`/stories/${story.id}`}
//                         className="inline-block mt-6 bg-slate-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-600 transition duration-300"
//                       >
//                         Read Full Story
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))
//           )}
//         </Swiper>
//       </section>
//     </div>
//   );
// }

// "use client";

// import React from "react";
// import { useGetStoryListQuery } from "@/lib/features/apiSlice"; // Assuming this is the correct path
// import Loader from "@/components/Common/Loader";
// import SectionMiddleTitle from "@/components/Common/Title/SectionMiddleTitle"; // Assuming this is the correct path
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import Navigation  from "swiper";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "react-toastify";

// export default function Story() {
//   const { data, isLoading, isError } = useGetStoryListQuery({
//     page_num: 1,
//     page_size: 12,
//     order_by: "id",
//     order_direction: "desc",
//   });
// console.log(data);

//   // Handle loading state
//   if (isLoading) {
//     return <Loader />;
//   }

//   // Handle error state
//   if (isError) {
//     toast.error("Failed to load stories");
//     return <p>Failed to load stories. Please try again later.</p>;
//   }

//   // Extract story data
//   const stories = data?.data || [];

//   return (
//     <div>
//       {/* Page Header */}
//       <section className="bg-gray-100 py-12">
//         <div className="container px-4 mx-auto">
//           <SectionMiddleTitle
//             subtitle="INSPIRING STORIES"
//             title="Discover Our Latest Stories"
//             description="Dive into powerful stories that inspire and uplift. These are the journeys and achievements of women in tech, brought to you by FemTech."
//           />
//         </div>
//       </section>

//       {/* Story Slideshow */}
//       <section className="container mx-auto py-12">
//         <Swiper
//           navigation={true}
//           modules={[Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//         >
//           {stories.length === 0 ? (
//             <p className="text-center text-lg">No stories available.</p>
//           ) : (
//             stories.map((story) => (
//               <SwiperSlide key={story.id}>
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                   <div className="flex flex-col lg:flex-row">
//                     {/* Story Thumbnail */}
//                     <div className="w-full lg:w-1/2 relative">
//                       <Image
//                         src={story.thumbnail}
//                         alt={story.title}
//                         width={600}
//                         height={400}
//                         className="object-cover h-full w-full"
//                       />
//                     </div>

//                     {/* Story Details */}
//                     <div className="p-6 lg:p-12 w-full lg:w-1/2 flex flex-col justify-between">
//                       <div>
//                         <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                           {story.title}
//                         </h2>
//                         <p className="text-gray-600 mb-6">
//                           {story.description.length > 150
//                             ? `${story.description.substring(0, 150)}...`
//                             : story.description}
//                         </p>
//                       </div>
//                       <Link href={`/stories/${story.id}`}>
//                         <a className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-600 transition duration-300">
//                           Read Full Story
//                         </a>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))
//           )}
//         </Swiper>
//       </section>
//     </div>
//   );
// }
