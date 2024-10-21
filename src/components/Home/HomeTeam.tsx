
import { IMAGE_URL } from "@/lib/config/constant";
import { TeamOneSvg, TeamTwoSvg } from "../Common/AboutSvg";
import { teamMembers } from "../Section/TemaData"; 

import { Link } from "react-router-dom";
import { LinkedinIcon } from "../Common/Icons/footerIcon/SocialIcon";

export default function HomeTeam() {
  return (
    <div>
      <section
        id={"team"}
        className="section-lg has-bg-shape team-member relative z-20 overflow-hidden py-[100px] lg:py-[200px] xl:py-[300px] after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-bgo1Color after:clip-path-team-polygon"
      >
        <div className="container relative z-20 sm:px-6">
          <div className="row items-end justify-between">
            <div
              data-aos="fade-up-sm"
              className="lg:w-8/12 xl:w-6/12 px-3 box-border flex-shrink-0 w-full max-w-full"
            >
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                OUR TEAM MEMBERS
              </span>
              <div className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0">
                <h2
                  className="font-semibold text-h2 md:text-mdh2"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  Amazing Team Behind The Fem Tech
                </h2>
              </div>
            </div>
            <div
              data-aos="fade-right-sm"
              data-aos-delay="150"
              className="col-auto flex-none w-auto px-3 box-border max-w-full"
            >
              <Link to="/about" className="btn-footer btn-primary btn-md">
                View All Members
              </Link>
            </div>
          </div>
          <div className="row gy-4 pt-16 -mt-6">
            {teamMembers?.filter((_, i) => i < 5).map((member, index) => (
              <div
                key={index}
                data-aos="fade-up-sm"
                data-aos-delay={member.delay}
                className="md:w-6/12 lg:w-4/12 xl:w-3/12 px-3 mt-6 box-border w-full max-w-full"
              >
                <div className="shadow-default overflow-hidden rounded-xl bg-white p-3 pb-0 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-full max-h-[900px] w-full aspect-[9/9]">
                    <img
                      alt={`Image of ${member.name}`}
                      loading="lazy"
                      width="280"
                      height="205"
                      className="h-full w-full rounded-xl rounded-b-none object-cover"
                      src={IMAGE_URL + member.src}
                    />
                  </div>
                  <div className="px-5 py-8">
                    <h3 className="mb-4 text-xl font-semibold text-dark text-xl">
                      {member.name}
                    </h3>
                    <p>
                      {member?.role}
                    </p>
                    <ul className="social-icons-author mt-5 flex flex-wrap items-center gap-4 font-secondary text-dark">
                    <li>
                        <Link
                          className="inline-block"
                          aria-label="FaLinkedin"
                          to={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          <LinkedinIcon />
                        </Link>
                      </li> 
                      {/* Uncomment and add valid links for social icons */}
                      {/* <li>
                        <Link
                          className="inline-block"
                          aria-label="FaFacebook"
                          to="#"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          <FaceBookIcon />
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link
                          className="inline-block"
                          aria-label="FaLinkedin"
                          to="#"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          <LinkedinIcon />
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link
                          className="inline-block"
                          aria-label="FaTwitter"
                          to="#"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          <TwitterIcon />
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <TeamOneSvg />
          <TeamTwoSvg />
        </div>
      </section>
    </div>
  );
}
