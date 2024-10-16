import { podcastEpisodes } from "./PodcastData";
import { BlogIconOne, BlogIconTwo } from "../Common/Icons/BlogIcon/BlogIcon";
import Pagination from "../Common/Pagination";
import { IMAGE_URL } from "@/lib/config/constant";


export default function PodcastCard({ page_num = 1 }) {
  const currentPage = 1;
  const lastPage = 1;

  return (
    <>
      <section className="section-md relative mt-[-28rem] py-[100px] md:py-[200px] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-30 px-4 sm:px-6">
          <div className="row gy-4 -mt-6">
            {podcastEpisodes.map((episode) => (
              <div
                key={episode.id}
                data-aos="fade-up-sm"
                className="md:w-6/12 lg:w-4/12 px-3 mt-6 box-border flex-shrink-0 w-full max-w-full"
              >
                <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
                  <a
                    className="inline-block h-full max-h-[270px] w-full overflow-hidden"
                    href="#"
                  >
                    <img
                      alt="Podcast thumbnail"
                      loading="lazy"
                      width="408"
                      height="262"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={episode.thumbnail}
                    />
                  </a>
                  <div className="px-5 pb-12">
                    <div className="-mt-[30px] mb-3 flex items-center">
                      <a
                        className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
                        title="Guest Speaker"
                        href="#"
                      >
                        <img
                          alt="Guest"
                          loading="lazy"
                          width="40"
                          height="40"
                          className="h-[40px] w-[40px] object-cover"
                          src={`${IMAGE_URL}/images/author/author.svg`}
                        />
                      </a>
                      <a
                        className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                        href="#"
                      >
                        {episode.guest_name}
                      </a>
                    </div>
                    <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
                      <a
                        className="link-animation relative after:absolute after:inset-0"
                        href="#"
                      >
                        {episode.title}
                      </a>
                    </h2>
                    <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                      {new Date(episode.published_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BlogIconOne />
        <BlogIconTwo />
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          pageRoute="/podcast"
        />
      </section>
    </>
  );
}
