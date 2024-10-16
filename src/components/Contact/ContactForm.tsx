import { useForm, FieldValues } from 'react-hook-form';
import {
  FormIconOne,
  FormIconTwo,
} from "@/components/Common/Icons/ContactIcon/ContactIcon";
import ContactEmail from "@/components/Contact/ContactEmail";
import { useSubmitContactFormMutation } from '@/Lib/features/apiSlice';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();
  const [submitContactForm, { isLoading, isError, isSuccess }] =
    useSubmitContactFormMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      await submitContactForm(data).unwrap();
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Failed to submit contact form:", error);
    }
  };

  return (
    <>
      <section className="section-md relative mt-[-23rem] mb-20 overflow-hidden md:mt-[-28rem] md:py-16">
        <div className="container relative z-30">
          <div className="flex flex-wrap -mx-[calc(1.5rem/2)] -mt-[calc(0)] relative">
            <div className="mx-auto md:w-col-10 box-border max-w-full">
              <div
                data-aos="fade-up-sm"
                className="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-16 sm:py-14"
              >
                <form
                  className="flex flex-wrap space-y-6 -mt-6 -mx-3 text-dark"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-row justify-between w-full gap-2 ">
                    <div className="sm:w-1/2">
                      <label
                        htmlFor="name"
                        className="mb-3 block font-semibold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-opacity-100 border-gray-300 px-5 py-5 sm:py-4"
                        placeholder="Your Name"
                        id="name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p className="text-red-500">Name is required</p>
                      )}
                    </div>
                    <div className="sm:w-1/2">
                      <label
                        htmlFor="email"
                        className="mb-3 block font-semibold"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-4"
                        placeholder="Your Email Address"
                        id="email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p className="text-red-500">Email is required</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="subject"
                      className="mb-3 block font-semibold"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
                      placeholder="Subject"
                      id="subject"
                      {...register("subject", { required: true })}
                    />
                    {errors.subject && (
                      <p className="text-red-500">Subject is required</p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="description"
                      className="mb-3 block font-semibold"
                    >
                      Description
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
                      placeholder="Your Message"
                      id="description"
                      rows={4}
                      {...register("description", { required: true })}
                    ></textarea>
                    {errors.description && (
                      <p className="text-red-500">Description is required</p>
                    )}
                  </div>
                  <div className="w-full text-right">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Submit Now"}
                    </button>
                  </div>
                  {isError && (
                    <p className="text-red-500">
                      There was an error submitting the form.
                    </p>
                  )}
                  {isSuccess && (
                    <p className="text-green-500">
                      Form submitted successfully!
                    </p>
                  )}
                </form>
              </div>
            </div>
            <FormIconOne />
            <FormIconTwo />
          </div>
          <ContactEmail />
        </div>
      </section>
    </>
  );
}

// "use client";

// // src/components/ContactForm.tsx
// import React from "react";
// import { useForm, FieldValues } from "react-hook-form";
// import { useSubmitContactFormMutation } from "@/lib/features/apiSlice";
// import {
//   FormIconOne,
//   FormIconTwo,
// } from "@/components/Common/Icons/ContactIcon/ContactIcon";
// import ContactEmail from "@/components/Contact/ContactEmail";

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FieldValues>();
//   const [submitContactForm, { isLoading, isError, isSuccess }] =
//     useSubmitContactFormMutation();

//   const onSubmit = async (data: FieldValues) => {
//     try {
//       await submitContactForm(data).unwrap();
//       reset(); // Reset form after successful submission
//       alert("Form submitted successfully!"); // Success alert
//     } catch (error) {
//       console.error("Failed to submit contact form:", error);
//       alert("There was an error submitting the form."); // Error alert
//     }
//   };

//   return (
//     <>
//       <section className="section-md relative mt-[-23rem] mb-20 overflow-hidden md:mt-[-28rem] md:py-16">
//         <div className="container relative z-30">
//           <div className="flex flex-wrap -mx-[calc(1.5rem/2)] -mt-[calc(0)] relative">
//             <div className="mx-auto md:w-col-10 box-border max-w-full">
//               <div
//                 data-aos="fade-up-sm"
//                 className="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-16 sm:py-14"
//               >
//                 <form
//                   className="flex flex-wrap space-y-6 -mt-6 -mx-3 text-dark"
//                   onSubmit={handleSubmit(onSubmit)}
//                 >
//                   <div className="flex flex-row justify-between w-full gap-2 ">
//                     <div className="sm:w-1/2">
//                       <label
//                         htmlFor="name"
//                         className="mb-3 block font-semibold"
//                       >
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full rounded-lg border border-opacity-100 border-gray-300 px-5 py-5 sm  q:py-4"
//                         placeholder="Your Name"
//                         id="name"
//                         {...register("name", { required: true })}
//                       />
//                       {errors.name && (
//                         <p className="text-red-500">Name is required</p>
//                       )}
//                     </div>
//                     <div className="sm:w-1/2">
//                       <label
//                         htmlFor="email"
//                         className="mb-3 block font-semibold"
//                       >
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-4"
//                         placeholder="Your Email Address"
//                         id="email"
//                         {...register("email", { required: true })}
//                       />
//                       {errors.email && (
//                         <p className="text-red-500">Email is required</p>
//                       )}
//                     </div>
//                   </div>
//                   <div className="w-full">
//                     <label
//                       htmlFor="subject"
//                       className="mb-3 block font-semibold"
//                     >
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
//                       placeholder="Subject"
//                       id="subject"
//                       {...register("subject", { required: true })}
//                     />
//                     {errors.subject && (
//                       <p className="text-red-500">Subject is required</p>
//                     )}
//                   </div>
//                   <div className="w-full">
//                     <label
//                       htmlFor="description"
//                       className="mb-3 block font-semibold"
//                     >
//                       Description
//                     </label>
//                     <textarea
//                       className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
//                       placeholder="Your Message"
//                       id="description"
//                       rows={4}
//                       {...register("description", { required: true })}
//                     ></textarea>
//                     {errors.description && (
//                       <p className="text-red-500">Description is required</p>
//                     )}
//                   </div>
//                   <div className="w-full text-right">
//                     <button
//                       type="submit"
//                       className="btn btn-primary"
//                       disabled={isLoading}
//                     >
//                       {isLoading ? "Submitting..." : "Submit Now"}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <FormIconOne />
//             <FormIconTwo />
//           </div>
//           <ContactEmail />
//         </div>
//       </section>
//     </>
//   );
// }

// import React from 'react'
// import {
//   FormIconOne,
//   FormIconTwo,
// } from "@/components/Common/Icons/ContactIcon/ContactIcon";
// import ContactEmail from "@/components/Contact/ContactEmail";

// export default function ContactForm() {
//   return (
//     <>
//       <section className="section-md relative mt-[-23rem] mb-20 overflow-hidden md:mt-[-28rem] md:py-16">
//         <div className="container relative z-30">
//           <div className="flex flex-wrap -mx-[calc(1.5rem/2)] -mt-[calc(0)] relative">
//             <div className="mx-auto md:w-col-10 box-border max-w-full">
//               <div
//                 data-aos="fade-up-sm"
//                 className="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-16 sm:py-14"
//               >
//                 <form
//                   className="flex flex-wrap space-y-6 -mt-6 -mx-3 text-dark"
//                   method="post"
//                 >
//                   <div className="flex flex-row justify-between w-full gap-2 ">
//                     <div className="sm:w-1/2">
//                       <label
//                         htmlFor="fname"
//                         className="mb-3 block font-semibold"
//                       >
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full rounded-lg border border-opacity-100 border-gray-300 px-5 py-5 sm  q:py-4"
//                         placeholder="Your First Name"
//                         id="fname"
//                         name="fname"
//                         required
//                       />
//                     </div>
//                     <div className="sm:w-1/2">
//                       <label
//                         htmlFor="lname"
//                         className="mb-3 block font-semibold"
//                       >
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-4"
//                         placeholder="Your Last Name"
//                         id="lname"
//                         name="lname"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full">
//                     <label htmlFor="email" className="mb-3 block font-semibold">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
//                       placeholder="Your Email Address"
//                       id="email"
//                       name="email"
//                       required
//                     />
//                   </div>
//                   <div className="w-full">
//                     <label
//                       htmlFor="purpose"
//                       className="mb-3 block font-semibold"
//                     >
//                       Reason/Purpose
//                     </label>
//                     <select
//                       id="purpose"
//                       className="w-full rounded-lg border-border px-5 py-4 text-sm"
//                     >
//                       <option value="0">General Inquiry</option>
//                       <option value="1">Support Request</option>
//                       <option value="2">Partnership Opportunity</option>
//                     </select>
//                   </div>
//                   <div className="w-full">
//                     <label
//                       htmlFor="message"
//                       className="mb-3 block font-semibold"
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
//                       placeholder="Your Message"
//                       id="message"
//                       cols={30}
//                       rows={4}
//                       required
//                     ></textarea>
//                   </div>
//                   <div className="w-full text-right">
//                     <button type="submit" className="btn btn-primary">
//                       Submit Now
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <FormIconOne />
//             <FormIconTwo />
//           </div>
//           <ContactEmail />
//         </div>
//       </section>
//     </>
//   );
// }
