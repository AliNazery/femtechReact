import { useGetCommentListQuery } from "@/lib/features/apiSlice";
import { ReplySvg, SettingSvg } from "@/components/Common/svg";
import SingleComment from "./SingleComment";
import { toast } from "react-toastify";

export default function Comment() {
  const { data, isError } = useGetCommentListQuery({
    page_num: 1,
    page_size: 12,
    order_by: "id",
    order_direction: "desc",
    entity_id: 1,
    entity_type: "BLOG",
  });

  // if (isLoading) return <p>Comment Loading</p>;
  // if (isLoading) {
  //   return <SkeletonLoader />;
  // }
  if (isError) { toast.error("Comment load failed") }

  // Assuming 'data' structure includes 'data' as the comment array.
  if (!data || !data.data || data.data.length === 0){toast.error("No Comments found")}

  const { message, created_at, replies } = data.data[0];
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion
          </h2>
        </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-pink rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-deepPink"
          >
            Post comment
          </button>
        </form>
        <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                  width={24}
                  height={24}
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time
                  dateTime="2022-02-08"
                  title="February 8th, 2022"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  {/* Feb. 8, 2022 */}
                  
                  {new Date(created_at).toLocaleDateString()}
                </time>
              </p>
            </div>
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <SettingSvg />
              <span className="sr-only">Comment settings</span>
            </button>

            <div
              id="dropdownComment1"
              className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            {message}
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
            >
              <ReplySvg />
              Reply
            </button>
          </div>
        </article>
        <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
          {replies.map((reply : any) => (
            <>
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="Jese Leos"
                      width={24}
                      height={24}
                    />
                    Jese Leos
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      dateTime="2022-02-08"
                      title="February 8th, 2022"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      {new Date(reply.created_at).toLocaleDateString()}
                    </time>
                  </p>
                </div>
                <button
                  id="dropdownComment2Button"
                  data-dropdown-toggle="dropdownComment2"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <SettingSvg />

                  <span className="sr-only">Comment settings</span>
                </button>

                <div
                  id="dropdownComment2"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                {reply.message}
              </p>
            </>
          ))}
          <div className="flex items-center mt-4 space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
            >
              <ReplySvg />
              Reply
            </button>
          </div>
        </article>

        <SingleComment />
      </div>
    </section>
  );
}
