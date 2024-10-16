import React from "react";
import { footerLinks, socialLinks, widgetLinks } from "./FooterData";
import SubscriberForm from "./SubscriberForm";
import { IMAGE_URL } from "../../lib/config/constant";

const MainFooter: React.FC = () => {
  return (
    <>
      <div
        data-aos="fade-in"
        data-aos-delay="50"
        className="container relative z-30 sm:px-6 pt-[80px] lg:pt-[130px] "
      >
        <div className="row flex flex-wrap items-center justify-center pb-10 lg:justify-between">
          <div className="flex-none w-auto px-3">
            <a href="/">
              <img
                alt="spydea"
                loading="lazy"
                width="164"
                height="38"
                decoding="async"
                src={`${IMAGE_URL}/images/logo/dark-logo.jpg`}
              />
            </a>
          </div>
          <SubscriberForm />
        </div>
        <hr className="h-[1px] border-0 border-b border-light/20 border-opacity-30 bg-transparent" />
        <div className="row flex flex-wrap gy-5 py-7 text-center -mt-12 lg:-mt-6 lg:g-4 sm:py-14 sm:text-left">
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-3/12 px-3 mt-12 lg:mt-[24px]">
            <div className="widget lg:pl-16 ">
              <h3 className="widget-title md:mb-8">Company</h3>
              <ul className="widget-content flex flex-col gap-3 md:gap-6">
                {widgetLinks.map((link, index) => (
                  <li
                    key={index}
                    className="mx-auto sm:mx-0 w-fit text-footerli"
                  >
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-4/12 lg:w-2/12 px-3 mt-6 lg:mt-[24px] xl:w-2/12">
            <div className="widget pl-0">
              <h3 className="widget-title md:mb-8 ">Resources</h3>
              <ul className="widget-content flex flex-col gap-3 md:gap-6">
                {footerLinks.map((link, index) => (
                  <li
                    key={index}
                    className="mx-auto sm:mx-0 w-fit text-footerli"
                  >
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-4/12 lg:w-4/12 xl:w-3/12 px-3 mt-12 lg:mt-[24px]">
            <div className="widget lg:pl-8">
              <h3 className="widget-title md:mb-8">Email</h3>
              <div className="mx-auto -mt-1 mb-4 w-fit text-[22px] font-bold text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <a href="mailto:contact@femstech.com">contact@femstech.com</a>
              </div>
              <ul className="social-icons flex flex-wrap items-center gap-4 font-secondary justify-center sm:justify-start">
                {socialLinks.map((link, index) => (
                  <li key={index} className="inline-block text-white">
                    <a
                      className="inline-block"
                      aria-label={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full max-w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 px-3 mt-12 lg:mt-[24px]">
            <div className="xl:pl-16">
              <h3 className="widget-title md:mb-8">Call US</h3>
              <div className="mx-auto -mt-1 w-fit text-[22px] font-bold text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <a href="tel:+491783585315">+491783585315</a>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-0 border-b border-light/20 border-opacity-30 bg-transparent" />
        <p className="copyright py-12 text-center text-copyp text-copyco opacity-50">
          <a href="/" className="underline underline-offset-2">
            Fem Tech
          </a>
        </p>
      </div>
    </>
  );
};

export default MainFooter;
