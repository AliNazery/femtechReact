import BlogCard from './BlogCard';
import { BlogIconOne, BlogIconTwo } from '../Common/Icons/BlogIcon/BlogIcon';

export default function BlogPost() {
  return (
    <>
      <main>
        <section className="section-md relative mt-[-28rem] py-[100px] md:py-[200px] overflow-hidden md:mt-[-32rem]">
          <div className="container relative z-30 px-4 sm:px-6">
            <BlogCard page_num={1} />
          </div>
          <BlogIconOne />
          <BlogIconTwo />
        </section>
      </main>
    </>
  );
}
