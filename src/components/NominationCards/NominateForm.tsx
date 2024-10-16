import SectionMiddleTitle from '../Common/Title/SectionMiddleTitle';
import { FormIconOne, FormIconTwo } from '../Common/Icons/ContactIcon/ContactIcon';

export default function NominateForm() {
  return (
    <>
      <SectionMiddleTitle
        subtitle={"Your Nominate"}
        title={"Nominate a Woman Shaping the Future of Tech"}
        description={""}
      />
      <section className="section-md relative mt-[-4rem] mb-20 overflow-hidden md:mt-[-2rem] md:py-16">
        <div className="container relative z-30">
          <div className="flex flex-wrap -mx-[calc(1.5rem/2)] -mt-[calc(0)] relative">
            <div className="mx-auto md:w-col-10 box-border max-w-full">
              <div
                data-aos="fade-up-sm"
                className="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-16 sm:py-14"
              >
                <form
                  className="flex flex-wrap space-y-6 -mt-6 -mx-3 text-dark"
                  method="post"
                >
                  <div className="flex flex-row justify-between w-full gap-2 ">
                    <div className="sm:w-1/2">
                      <label
                        htmlFor="fname"
                        className="mb-3 block font-semibold"
                      >
                        Your First Name
                        <span className="text-red-500 pl-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-opacity-100 border-gray-300 px-5 py-5 sm:py-4"
                        placeholder="Your First Name"
                        id="fname"
                        name="fname"
                        required
                      />
                    </div>
                    <div className="sm:w-1/2">
                      <label
                        htmlFor="lname"
                        className="mb-3 block font-semibold"
                      >
                        Your Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-4"
                        placeholder="Your Last Name"
                        id="lname"
                        name="lname"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="mb-3 block font-semibold">
                      Your Email Address
                      <span className="text-red-500 pl-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
                      placeholder="Your Email Address"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  {/* nominate information */}
                  <p>Nominate Information</p>
                  <div className="flex flex-row justify-between w-full gap-2 ">
                    <div className="sm:w-1/2">
                      <label
                        htmlFor="fname"
                        className="mb-3 block font-semibold"
                      >
                        Nominate First Name
                        <span className="text-red-500 pl-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-opacity-100 border-gray-300 px-5 py-5 sm:py-4"
                        placeholder="Your First Name"
                        id="fname"
                        name="fname"
                        required
                      />
                    </div>
                    <div className="sm:w-1/2">
                      <label
                        htmlFor="lname"
                        className="mb-3 block font-semibold"
                      >
                        Nominate Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-4"
                        placeholder="Your Last Name"
                        id="lname"
                        name="lname"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="mb-3 block font-semibold">
                      Nominate Email Address
                      <span className="text-red-500 pl-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
                      placeholder="Your Email Address"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="purpose"
                      className="mb-3 block font-semibold"
                    >
                      {/* Reason/Purpose */}
                      Preferred Platform
                    </label>
                    <select
                      id="purpose"
                      className="w-full rounded-lg border-border px-5 py-4 text-sm"
                    >
                      <option value="0">EmpowerChat</option>
                      <option value="1">PodCast</option>
                      <option value="2">Both</option>
                      <option value="3">Not sure</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="message"
                      className="mb-3 block font-semibold"
                    >
                      Guest Details
                    </label>
                    <textarea
                      name="message"
                      className="w-full rounded-lg border border-opacity-100 border-gray-300 px-3 py-5 sm:py-[1rem]"
                      placeholder="Your Message"
                      id="message"
                      cols={30}
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <div className="w-full text-right">
                    <button type="submit" className="btn btn-primary">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <FormIconOne />
            <FormIconTwo />
          </div>
        </div>
      </section>
    </>
  );
}
