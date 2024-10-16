import { TalksData } from "./TalksData";
import SectionTitle from "@/components/Common/Title/SectionTitle";
import { FeatureFiveSvg, FeatureSixSvg } from "@/components/Common/svg";

export default function Talks() {
  return (
    <>
      <section className="section features py-[60px] md:py-[100px] relative z-20 overflow-hidden after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-bgo1Color after:content-[''] after:clip-path-feature-polygon">
        <div className="container relative z-30 px-4 sm:px-6 ">
          <div className="row flex flex-wrap items-end justify-between pb-12">
            <SectionTitle
              category="INSPIRING TALKS"
              title="Empowering Women Through Engaging Talks"
              description="Join Femstech's Empower Chats, tune into our inspiring Podcasts, and nominate influential women shaping the tech world."
            />
            <div
              className="col-auto px-3"
              data-aos="fade-right-sm"
              data-aos-delay="150"
            >
              {/* Button for all features is commented out */}
            </div>
          </div>
          <div className="colored-box-icon flex flex-wrap -mt-6 -mx-3">
            {TalksData.map(
              ({ id, delay, bgColor, icon, title, description, link }) => (
                <div
                  key={id}
                  data-aos="fade-up-sm"
                  data-aos-delay={delay}
                  className="px-3 mt-6 md:w-6/12 lg:w-4/12 xl:w-3/12"
                >
                  <div className="h-full flex flex-col justify-between rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all ease duration-300 hover:shadow-sm">
                    <div>
                      <div
                        className={`icon-box p-4 mb-10 ${bgColor} w-[60px] rounded-xl text-center text-2xl font-semibold text-gray-800`}
                      >
                        {icon}
                      </div>
                      <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
                        {title}
                      </h3>
                      <p className="text-base">{description}</p>
                    </div>
                    <a
                      href={link} // Changed from Link to anchor tag for React.js compatibility
                      className="inline-block mt-4 px-3 py-2 bg-pink text-white rounded-lg hover:bg-deepPink transition-all self-end"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <FeatureFiveSvg />
        <FeatureSixSvg />
      </section>
    </>
  );
}
