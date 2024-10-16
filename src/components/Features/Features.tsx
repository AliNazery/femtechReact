import SectionTitle from "../Common/Title/SectionTitle";
import { FeatureFiveSvg, FeatureSixSvg } from "../Common/svg";
import { features } from "./FeatureData";

export default function Features() {
  return (
    <section className="section features py-[60px] md:py-[100px] relative z-20 overflow-hidden after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-bgo1Color after:content-[''] after:clip-path-feature-polygon">
      <div className="container relative z-30 px-4 sm:px-6">
        <div className="row flex flex-wrap items-end justify-between pb-12">
          <SectionTitle
            category="WE ARE THE ULTIMATE"
            title="Empowering Women in Tech"
            description="Femstech equips women with tech skills, mentorship, and career opportunities."
          />
          {/* The button was commented out in the original, you can uncomment if needed */}
          {/* <div className="col-auto px-3" data-aos="fade-right-sm" data-aos-delay="150">
            <Link className="btn btn-outline-primary btn-sm" href="#?">
              All Features
            </Link>
          </div> */}
        </div>
        <div className="colored-box-icon flex flex-wrap -mt-6 -mx-3">
          {features.map(({ id, delay, bgColor, icon, title, description }) => (
            <div
              key={id}
              data-aos="fade-up-sm"
              data-aos-delay={delay}
              className="px-3 mt-6 md:w-6/12 lg:w-4/12 xl:w-3/12"
            >
              <div className="h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all ease duration-300 hover:shadow-sm">
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
            </div>
          ))}
        </div>
      </div>
      <FeatureFiveSvg />
      <FeatureSixSvg />
    </section>
  );
}
