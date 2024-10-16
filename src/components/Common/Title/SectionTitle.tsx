import React from "react";

const SectionTitle = ({ category, title, description }) => {
  return (
    <div className="lg:w-8/12 xl:w-6/12 px-3">
      <span
        className="mb-6 inline-block font-medium uppercase text-red-400"
        data-aos="fade-up-sm"
      >
        {category}
      </span>
      <div
        className="mb-8 border-l-2 border-dark  py-2 pl-6 lg:mb-0"
        data-aos="fade-up-sm"
      >
        <h2
          className="mb-6 font-semibold text-h2 md:text-mdh2 "
          data-aos="fade-up-sm"
          data-aos-delay="50"
        >
          {title}
        </h2>
        <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
