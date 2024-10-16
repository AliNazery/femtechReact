import PageHeader from "@/components/Common/PageHeader/PageHeader";

const scholarships = [
  {
    name: "Women in Tech Scholarship",
    description: "Support for women breaking barriers in the tech industry.",
    image: "/images/scholarship/schol.jpg",
  },
  {
    name: "Diversity in STEM Scholarship",
    description:
      "Encouraging diversity in science, technology, engineering, and mathematics.",
    image: "/images/scholarship/schol.jpg",
  },
  {
    name: "Leadership in Innovation Scholarship",
    description:
      "Fostering leadership in innovative technologies and solutions.",
    image: "/images/scholarship/schol.jpg",
  },
  {
    name: "Community Impact Scholarship",
    description:
      "Recognizing those who make a positive impact on their communities.",
    image: "/images/scholarship/schol.jpg",
  },
  {
    name: "Global Opportunities Scholarship",
    description: "Supporting students looking to make a difference globally.",
    image: "/images/scholarship/schol.jpg",
  },
];

const ScholarshipPage = () => {
  return (
    <div>
      <PageHeader
        title={"Empowering Futures with Scholarships"}
        currentPage={"scholarship"}
        description={""}
      />

      <section className="container mx-auto py-12 px-6 mt-[-60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="scholarship-card bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={scholarship.image}
                alt={scholarship.name}
                width={600}
                height={400}
                className="object-cover w-full h-56"
                              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{scholarship.name}</h3>
                <p className="text-gray-700 mt-2">{scholarship.description}</p>
                {/* <Link
                  className="inline-block mt-4 btn-primary p-2 rounded-xl bg-[#cd60a9]"
                  href={`/scholarships/${index}`}
                >
                  Learn More
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#cd60a9] py-10">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Apply?</h2>
          <p className="mt-4 mb-4">
            Start your scholarship application today and take a step towards a
            brighter future.
          </p>
          {/* <Link href="" className="btn-secondary text-black bg-white hover:bg-deepPink p-2 rounded-xl mt-6">
            Apply Now
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;
