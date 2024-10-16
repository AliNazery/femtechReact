import PageHeader from "@/components/Common/PageHeader/PageHeader";
import BlogCard from "@/components/Blog/BlogCard";
import { BlogIconOne, BlogIconTwo } from "@/components/Common/Icons/BlogIcon/BlogIcon";

export default function Blog() {
  return (
    <>
      <PageHeader title="Latest Blog Posts" currentPage="Blog" description="" />
      <section className="section-md relative mt-[-28rem] py-[100px] md:py-[200px] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-20 px-4 sm:px-6">
          <BlogCard page_num={1} />
        </div>
        <BlogIconOne />
        <BlogIconTwo />
      </section>
    </>
  );
}
