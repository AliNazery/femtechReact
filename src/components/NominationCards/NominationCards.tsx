import { nominees } from "./NomineeData";
import { BlogIconOne, BlogIconTwo } from "../Common/Icons/BlogIcon/BlogIcon";
import NominateForm from "./NominateForm";
import Pagination from "../Common/Pagination";

export default function NominationCards() {
  const currentPage = 1;
  const lastPage = 1;

  return (
    <>
      <section className="section-md relative mt-[-28rem] py-[100px] md:py-[200px] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-30 px-4 sm:px-6">
          <div className="row gy-4 -mt-6">
            {nominees.map((nominee) => (
              <div
                key={nominee.id}
                data-aos="fade-up-sm"
                className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
              >
                <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                  <a
                    className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                    href="#"
                  >
                    <img
                      alt="Nominee thumbnail"
                      loading="lazy"
                      width="408"
                      height="262"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={nominee.thumbnail}
                    />
                  </a>
                  <div className="px-5 pb-12">
                    <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                      <a
                        className="link-animation relative after:absolute after:inset-0"
                        href="#"
                      >
                        {nominee.name}
                      </a>
                    </h2>
                    <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                      {nominee.position}
                    </span>
                    <p className="mt-2 text-gray-700">{nominee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BlogIconOne />
        <BlogIconTwo />
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          pageRoute="/nominations"
        />
      </section>
      <NominateForm />
    </>
  );
}

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function NominationPage() {
//   return (
//     <>
//       {/* Header Section */}
//       <section className="header-section py-12 bg-lightGray">
//         <div className="container">
//           <h1 className="text-4xl font-bold text-center">
//             Nominate a Woman Shaping the Future of Tech
//           </h1>
//           <p className="mt-4 text-center text-gray-600">
//             Fems Tech is dedicated to recognizing exceptional women who are
//             driving innovation, fostering growth, and shaping the future of the
//             tech industry. Help us celebrate their contributions by submitting a
//             nomination.
//           </p>
//         </div>
//       </section>

//       {/* Previous Nominees Section (optional, inspired by guest page) */}
//       <section className="nominees-section py-12">
//         <div className="container">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Previous Nominees
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {previousNominees.map((nominee, index) => (
//               <div
//                 key={index}
//                 className="nominee-card p-4 bg-white rounded-lg shadow-md"
//               >
//                 <h3 className="text-xl font-semibold">{nominee.name}</h3>
//                 <p className="text-gray-600 mt-2">{nominee.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Nomination Form Section (inspired by contact page) */}
//       <section className="form-section py-12 bg-lightGray">
//         <div className="container max-w-xl mx-auto">
//           <h2 className="text-3xl font-bold text-center">Nominate Now</h2>
//           <form className="mt-8">
//             {/* Nominator's Information */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Your Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded-lg"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Your Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border rounded-lg"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             {/* Nominee's Information */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Nominee's Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded-lg"
//                 placeholder="Enter nominee's name"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Nominee's Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border rounded-lg"
//                 placeholder="Enter nominee's email"
//                 required
//               />
//             </div>

//             {/* Nomination Reason */}
//             <div className="mb-6">
//               <label className="block text-gray-700">
//                 Why are you nominating this person?
//               </label>
//               <textarea
//                 className="w-full px-4 py-2 border rounded-lg"
//                 rows={5}
//                 placeholder="Describe the nominee's contributions"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
//             >
//               Submit Nomination
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Call to Action (CTA) */}
//       <section className="cta-section py-12 bg-pink-500 text-white text-center">
//         <div className="container">
//           <h3 className="text-2xl font-semibold">
//             Help Us Celebrate More Women in Tech
//           </h3>
//           <p className="mt-4">
//             Your nomination can inspire others and highlight impactful work in
//             the tech industry.
//           </p>
//           <Link
//             href="/nominate"
//             className="mt-6 inline-block bg-white text-pink-500 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
//           >
//             Nominate Now
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }

// // Example Nominees Data
// const previousNominees = [
//   {
//     name: "Emma Garcia",
//     description:
//       "Lead Data Scientist making waves in AI research and development.",
//   },
//   {
//     name: "Aisha Ibrahim",
//     description: "CTO building fintech solutions for underserved communities.",
//   },
//   {
//     name: "Sofia Martinez",
//     description:
//       "Software Engineer advocating for women in open-source software.",
//   },
// ];
