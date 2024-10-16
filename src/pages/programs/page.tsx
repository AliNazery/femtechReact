import PageHeader from "@/components/Common/PageHeader/PageHeader";
import { IntegOneSvg, IntegTwoSvg } from "@/components/Common/PagesSvg";

// Sample data for Fem Tech programs
const cardsData = [
  {
    title: "Mentorship Program",
    description:
      "Connects aspiring women in tech with experienced mentors who provide guidance and support in their career journeys.",
    imageSrc: "https://picsum.photos/id/101/72/72", // Replace with actual image URL
    link: "/mentorship", // Link to the program details
  },
  {
    title: "Tech Workshops",
    description:
      "Hands-on workshops that cover essential skills in coding, data science, and product management, designed for women at all levels.",
    imageSrc: "https://picsum.photos/id/102/72/72", // Replace with actual image URL
    link: "/workshops", // Link to the program details
  },
  {
    title: "Funding Opportunities",
    description:
      "Provides information and access to grants, scholarships, and investment opportunities specifically for women-led startups.",
    imageSrc: "https://picsum.photos/id/103/72/72", // Replace with actual image URL
    link: "/funding", // Link to the program details
  },
  {
    title: "Networking Events",
    description:
      "Regular events to connect women in tech, fostering collaboration, sharing experiences, and creating valuable relationships.",
    imageSrc: "https://picsum.photos/id/104/72/72", // Replace with actual image URL
    link: "/networking", // Link to the program details
  },
  {
    title: "Online Learning Platform",
    description:
      "An accessible online platform offering courses and resources tailored to women's needs in technology.",
    imageSrc: "https://picsum.photos/id/101/72/72", // Replace with actual image URL
    link: "/online-learning", // Link to the program details
  },
];

export default function Programs() {
  return (
    <main>
      <PageHeader
        title="Our Fem Tech Programs"
        currentPage="Integration"
        description="Explore our innovative Fem Tech programs designed to empower women in technology. From mentorship and workshops to funding opportunities and community engagement, we are committed to fostering an inclusive environment that supports women's growth and success in tech."
      />
      <section className="section-md relative mt-[-40px] overflow-hidden md:mt-[-60px] pb-40">
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
                    <img
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
                      Join Now
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
      </section>
    </main>
  );
}

// import React from 'react'
// import Image from 'next/image'
// import PageHeader from '@/components/Common/PageHeader/PageHeader';
// import { IntegOneSvg, IntegTwoSvg } from '@/components/Common/PagesSvg';

// export default function Programs() {
//   return (
//     <main>
//       <main>
//         <PageHeader
//           title="Our Fem Tech Programs"
//           currentPage="Integration"
//           description="Explore our innovative Fem Tech programs designed to empower women in technology. From mentorship and workshops to funding opportunities and community engagement, we are committed to fostering an inclusive environment that supports women's growth and success in tech."
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
