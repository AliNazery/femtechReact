
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import { benefitsData, communityData, tiersData } from "./membershipData";

export default function Membership() {
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="Join the Fem Tech Community"
        currentPage="Membership"
        description="Empowering women in technology through mentorship, community, and opportunities."
      />

      {/* Hero Section */}
      <section className="section-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Become a Member</h1>
          <p className="text-lg mb-8">
            Join Fem Tech to connect with industry experts, access exclusive
            content, and be part of a global community of women in tech.
          </p>
          {/* <button className="btn btn-primary py-3 px-8 rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
            Become a Member
          </button> */}
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="section-md py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold mb-12 text-pink">
            Membership Tiers
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {tiersData.map((tier, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-8 rounded-lg text-center w-full md:w-1/3 lg:w-1/4"
              >
                <h3 className="text-2xl font-bold mb-4 text-pink">
                  {tier.title}
                </h3>
                <img
                  src={tier.icon}
                  width={72}
                  height={72}
                  alt={tier.title}
                />
                <ul className="text-gray-700 my-4">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="mb-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline-primary py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
                  Join {tier.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section-md py-20">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl text-pink font-semibold mb-12">
            Membership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white shadow-md rounded-lg"
              >
                <img
                  src={benefit.icon}
                  width={48}
                  height={48}
                  alt={benefit.title}
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="section-md py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl text-pink font-semibold mb-12">
            Our Community
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {communityData.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg text-center w-full md:w-1/2 lg:w-1/3"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="rounded-full mx-auto mb-4"
                  width={100}
                  height={100}
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 italic">{member.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="section-md py-20 bg-gradient-to-r from-pink to-purple-500 text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg mb-8">
            Be part of a growing global network of women leading the future of
            technology.
          </p>
          {/* <button className="btn btn-primary py-3 px-8 rounded-lg shadow-md hover:bg-purple-600 transition duration-300">
            Sign Up Now
          </button> */}
        </div>
      </section>
    </main>
  );
}
