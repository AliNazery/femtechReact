import { useGetSingleBlogQuery } from "@/lib/features/apiSlice";
import Loader from "@/components/Common/Loader";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const {id} = useParams();
  const { data, error, isLoading } = useGetSingleBlogQuery(id);

  if (data) {
    console.log(data);
    
  }
    if (isLoading) {
      return <Loader/>
  }
  if (error) return <p>Error fetching story.</p>;

  const { title, description, thumbnail, content } = data;
  return (
    <>
      <section className="section page-header blog-single sm:pt-[100px] relative overflow-hidden pb-0 after:z-10 after:content-[''] after:bg-aboutbg after:skew-y-[12deg]  after:absolute after:left-0 after:-top-60 after:h-full after:w-full after:clip-path-custom-shape">
        <div className="container relative z-40">
          <div className="flex flex-wrap">
            <div className="w-full" data-aos="fade-up-sm">
              <img
                alt="featured-image"
                loading="lazy"
                width="1272"
                height="450"
                decoding="async"
                data-nimg="1"
                className="h-[350px] w-full rounded-t-xl object-cover md:h-[450px]"
                // src="/images/blog/woman1.jpg"
                src={thumbnail}
              />
            </div>
          </div>
        </div>
        {/* <HeaderIconOne />
        <HeaderIconTwo /> */}
      </section>
      <section className=" relative overflow-hidden pt-6 md:pt-10">
        <div className="container relative z-30">
          <article className="flex flex-wrap">
            <div className="mx-auto sm:w-10/12" data-aos="fade-up-sm">
              <h1 className="h2 mb-6 font-secondary font-bold text-2xl capitalize !leading-normal text-dark md:text-3xl lg:text-4xl xl:text-5xl">
                {/* Empowering Women in Tech: Real Impact Through Customer-Driven
                Innovation. */}
                {title}
              </h1>
              <div className="mb-6 flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex items-center">
                  <Link
                    title="author image"
                    className="relative z-20 overflow-hidden rounded-full border-[6px] border-zinc-100"
                    to="/images/blog/blogDetail"
                  >
                    <img
                      alt="Daniel Mitchell"
                      loading="lazy"
                      width="70"
                      height="70"
                      decoding="async"
                      data-nimg="1"
                      className="h-[70px] w-[70px] object-cover"
                      src="/images/blog/woman1.jpg"
                    />
                  </Link>
                  <Link
                    className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                    to="/authors/benjamin"
                  >
                    Hanifa
                  </Link>
                </div>
                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                  04 Apr, 2022
                </span>
              </div>
            </div>
            <div
              className="sm:w-10/12 sm:mx-auto px-3"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              <div className="content text-[1rem] leading-7">
                <p className="mt-0  pt-0 text-[18px] mb-8 leading-7">
                  {description}
                </p>
                <h4 className="text-[1.5129rem] font-semibold mb-8 font-primary">
                  The Current Landscape for Women in Tech
                </h4>
                <p
                  className=" text-[18px] mb-8 leading-7"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></p>
              
              </div>
              {/* <div className="mt-20">
                <div id="disqus_thread">
                  <iframe
                    id="dsq-app6781"
                    name="dsq-app6781"
                    title="Disqus"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
                    width="100%"
                    src="//tempest.services.disqus.com/ads-iframe/taboola/?position=top&shortname=themefisher-template&experiment=network_default&variant=fallthrough&service=dynamic&anchorColor=%23555555&colorScheme=light&sourceUrl=https%3A%2F%2Fspydea-nextjs.vercel.app%2Fblog%2Fpost-1&typeface=sans-serif&disqus_version=current"
                    className="w-px min-w-full border-0 overflow-hidden h-0"
                  ></iframe>
                </div>
              </div> */}
              {/* <Comment /> */}
            </div>
          </article>
        </div>
      {/* <BlogDetailOneSvg />
      <BlogDetailTwoSvg /> */}
      </section>
      {/* <RelatedPost /> */}
    </>
  );
}
