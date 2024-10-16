
import {
  NextIcon,
  PreviousIcon,
} from "@/components/Common/Icons/BlogIcon/NavigateIcon";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, lastPage, pageRoute }) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < lastPage ? currentPage + 1 : null;

  return (
    <nav
      className="mt-8 flex items-center justify-center space-x-3"
      aria-label="Pagination"
    >
      {prevPage && (
        <Link to={`${pageRoute}?page_num=${prevPage}`}>
          <span className="sr-only">Previous</span>
          <PreviousIcon />
        </Link>
      )}
      <span
        aria-current="page"
        className="rounded bg-[#CD61A9] px-4 py-2 text-white"
      >
        {currentPage}
      </span>
      {nextPage && (
        <Link
          to={`${pageRoute}?page_num=${nextPage}`}
          className="rounded px-2 py-1.5 text-dark hover:bg-theme-light"
        >
          <span className="sr-only">Next</span>
          <NextIcon />
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
