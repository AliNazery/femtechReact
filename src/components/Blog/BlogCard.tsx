import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Common/Loader";
import Pagination from "../Common/Pagination";
import BlogModal from "@/components/Modals/BlogModal"; 
import { useGetBlogListQuery } from "@/lib/features/apiSlice";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "@/lib/config/constant";
import { PostType } from "@/types/Index";


export default function BlogCard({ page_num = 1 }) {
  // Fetch the blog data using RTK Query
  const { data, error, isLoading } = useGetBlogListQuery({ page_num });
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const openModal = (post: any) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  if (isLoading) {
    return <Loader />; // Skeleton loader can go here
  }

  if (error) {
    toast.error("Error loading blogs...");
  }

  const blogPosts = data?.data || [];
  const currentPage = data?.current_page || 1;
  const lastPage = data?.last_page || 1;

  return (
    <>
      <div className="row gy-4 -mt-6">
        {blogPosts.map((post: PostType) => (
          <div
            key={post.id}
            data-aos="fade-up-sm"
            className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
          >
            <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
              <div
                className="inline-block h-full max-h-[270px] w-full overflow-hidden cursor-pointer"
                onClick={() => openModal(post)}
              >
                <img
                  alt="author"
                  loading="lazy"
                  width="408"
                  height="262"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={`${post.thumbnail}`}
                />
              </div>
              <div className="px-5 pb-12">
                <div className="-mt-[30px] mb-3 flex items-center">
                  <Link
                    className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                    title="Author"
                    to={`/author/${post.user_id}`}
                  >
                    <img
                      alt="Author"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="h-[40px] w-[40px] object-cover"
                      src={`${IMAGE_URL}/images/author/1.jpg`}
                    />
                  </Link>
                  <Link
                    className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                    to={`/author/${post.user_id}`}
                  >
                    Author Name
                  </Link>
                </div>
                <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                  <span
                    className="link-animation relative after:absolute after:inset-0 cursor-pointer"
                    onClick={() => openModal(post)}
                  >
                    {post.title}
                  </span>
                </h2>
                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        pageRoute="/blog"
      />

      {/* Blog Modal for Viewing More Details */}
      {selectedPost && (
        <BlogModal
          show={showModal}
          onClose={closeModal}
          title={selectedPost.title}
          description={selectedPost.description}
          content={selectedPost.content}
          thumbnail={selectedPost.thumbnail}
        />
      )}
    </>
  );
}

// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useGetBlogListQuery } from "@/lib/features/apiSlice"; // Assuming your api file is in services/api
// import { toast } from "react-toastify";
// import Loader from "../Common/Loader";
// import Pagination from "../Common/Pagination";

// export default function BlogCard({ page_num = 1 }) {

//   // Fetch the blog data using RTK Query
//   const { data, error, isLoading } = useGetBlogListQuery({ page_num });

//   if (isLoading) {
//     return <Loader/>; // Skeleton loader can go here
//   }

//   if (error) {
//     toast.error("Error loading blogs...");
//   }

//   const blogPosts = data?.data || [];
//   const currentPage = data?.current_page || 1; // Current page from the API response
//   const lastPage = data?.last_page || 1; // Last page from the API response

//   return (
//     <>
//       <div className="row gy-4 -mt-6">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             data-aos="fade-up-sm"
//             className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
//           >
//             <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
//               <Link
//                 className="inline-block h-full max-h-[270px] w-full overflow-hidden"
//                 href={`/blog/${post.id}`} // Assuming each blog has its own page
//               >
//                 <Image
//                   alt="author"
//                   loading="lazy"
//                   width="408"
//                   height="262"
//                   decoding="async"
//                   data-nimg="1"
//                   className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   src={`${post.thumbnail}`}
//                 />
//               </Link>
//               <div className="px-5 pb-12">
//                 <div className="-mt-[30px] mb-3 flex items-center">
//                   <Link
//                     className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
//                     title="Author"
//                     href={`/author/${post.user_id}`} // Link to author's page
//                   >
//                     <Image
//                       alt="Author"
//                       loading="lazy"
//                       width="40"
//                       height="40"
//                       decoding="async"
//                       data-nimg="1"
//                       className="h-[40px] w-[40px] object-cover"
//                       src="/images/author/1.jpg" // Placeholder for author image
//                     />
//                   </Link>
//                   <Link
//                     className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
//                     href={`/author/${post.user_id}`}
//                   >
//                     Author Name
//                   </Link>
//                 </div>
//                 <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
//                   <Link
//                     className="link-animation relative after:absolute after:inset-0"
//                     href={`/blog/${post.id}`}
//                   >
//                     {post.title}
//                   </Link>
//                 </h2>
//                 <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
//                   {new Date(post.created_at).toLocaleDateString()}{" "}
//                   {/* Format the date */}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Pagination currentPage={currentPage} lastPage={lastPage} pageRoute="/blog" />
//     </>
//   );
// }

// import React from 'react';
// import Image from 'next/image';
// import { blogPosts } from './BlogData';
// import Link from 'next/link';

// export default function BlogCard() {
//   return (
//     <>
//       <div className="row gy-4 -mt-6">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             data-aos="fade-up-sm"
//             className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
//           >
//             <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
//               <Link
//                 className="inline-block h-full max-h-[270px] w-full overflow-hidden"
//                 href={post.href}
//               >
//                 <Image
//                   alt="author"
//                   loading="lazy"
//                   width="408"
//                   height="262"
//                   decoding="async"
//                   data-nimg="1"
//                   className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   src={post.imgSrc}
//                 />
//               </Link>
//               <div className="px-5 pb-12">
//                 <div className="-mt-[30px] mb-3 flex items-center">
//                   <Link
//                     className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
//                     title={post.authorName}
//                     href={post.authorHref}
//                   >
//                     <Image
//                       alt={post.authorName}
//                       loading="lazy"
//                       width="40"
//                       height="40"
//                       decoding="async"
//                       data-nimg="1"
//                       className="h-[40px] w-[40px] object-cover"
//                       src={post.authorImgSrc}
//                     />
//                   </Link>
//                   <Link
//                     className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
//                     href={post.authorHref}
//                   >
//                     {post.authorName}
//                   </Link>
//                 </div>
//                 <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
//                   <Link
//                     className="link-animation relative after:absolute after:inset-0"
//                     href={post.href}
//                   >
//                     {post.title}
//                   </Link>
//                 </h2>
//                 <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
//                   {post.date}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
