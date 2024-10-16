import { HeroOne, HeroTwo } from "../../Common/Icons/hero/hero1";
import { CheckMarkSvg } from "../../Common/svg";
import { items } from "./Data";
import ConnectForm from "./ConnectForm";
import { IMAGE_URL } from "@/Lib/config/constant";


export function Hero() {
  return (
    <section className="section banner relative py-[60px] md:py-[100px] overflow-hidden before:z-10 after:content-[''] after:z-10 after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-60 after:h-full after:w-full after:clip-path-custom-shape">
      <div className="container relative z-30 sm:px-6">
        <div className="lg:flex lg:items-center lg:-mx-3">
          <div className="lg:w-6/12 px-3 ">
            <h1
              data-aos="fade-up-sm"
              className="mb-6 font-bold text-[35px] sm:text-[50px] xl:text-[65px]"
            >
              Innovating today, brighter tomorrow
            </h1>
            <p
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="mb-6 text-lg"
            >
              Empowering Afghan women in tech, FemTech bridges education and
              employment gaps, transforming dreams into reality amidst
              adversity. Join us in building a thriving, tech-driven future.
            </p>
            <ConnectForm />
            <div className="py-8">
              <hr className="h-[1px] border-0 border-b border-border/50 bg-transparent" />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {items.map(({ delay, text }, index) => (
                <li key={index} data-aos="fade-in" data-aos-delay={delay}>
                  <CheckMarkSvg />
                  <p className="inline-block align-middle text-lg font-medium text-dark">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto max-w-[600px] pt-24 px-3 sm:mx-0 sm:w-full md:mx-[72px] lg:w-6/12 lg:mx-0 lg:pt-0 xl:mx-6">
            <div
              data-aos="fade-up-sm"
              className="image-block relative mr-[5.5%] pl-8 md:mr-6 lg:ml-6 before:content-[''] before:-z-10 before:bg-tertiary before:absolute before:h-full before:w-calc-100-minus-80 before:-top-4 before:left-4 before:right-16 before:clip-path-herobefore-polygon
              after:content-[''] after:-z-10 after:bg-yellow_tan  after:absolute after:left-[100px] after:-right-5  after:top-[15px]  after:bottom-[-15px] after:xl:bottom-[-30px] after:h-full after:calc-100-minus-80 after:clip-path-herobefore-polygon"
            >
              <img
                alt="banner-image"
                loading="lazy"
                width="448"
                height="564"
                decoding="async"
                className="banner-image w-full h-auto max-w-full z-10 clip-path-hero-polygon"
                src={`${IMAGE_URL}/images/brands/her2.jpg`}
              />
              <img
                data-aos="fade-down-sm"
                data-aos-delay="150"
                alt="banner-image"
                loading="lazy"
                width="211"
                height="121"
                decoding="async"
                className="absolute bottom-16 left-0 w-[40%] rounded-lg shadow-md"
                src="/images/brands/banner-image-part-1.png"
              />
              <img
                data-aos="fade-up-sm"
                data-aos-delay="200"
                alt="banner-image"
                loading="lazy"
                width="211"
                height="254"
                decoding="async"
                className="absolute right-0 top-0 w-[30%] rounded-lg md:-right-32 md:top-14 md:w-[40%] xl:top-36"
                src="/images/brands/banner-image-part-2.png"
              />
              <HeroOne />
              <HeroTwo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
