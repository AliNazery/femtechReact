import { useGetSignleStudyHubQuery } from "@/lib/features/apiSlice"; // Ensure correct import path
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import Loader from "@/components/Common/Loader";
import { BASE_URL } from "@/lib/config/constant";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";



export default function StudyHubDetail() {
  const { id } = useParams();

  const { data, error, isLoading } = useGetSignleStudyHubQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    toast.error("Error Loading Data");
    return <div>Error Loading Study Hub</div>;
  }

  // Fallback in case of undefined data
  const hub = data || {
    title: "Untitled Study Hub",
    description: "",
    content: "",
    thumbnail: "/default-thumbnail.jpg",
  };
  return (
    <>
      <main>
        <PageHeader title={hub.title} currentPage={hub.title} description="" />
        <section className="section-md container mx-auto py-10 mt-[-50px]">
          <div className="bg-[#F4FDFF] shadow-lg rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={BASE_URL + hub.thumbnail || "/default-thumbnail.jpg"}
                alt={hub.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>

            {/* Content Section */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-4">{hub.title}</h2>
              <p
                className="text-lg text-gray-700 mb-6"
                dangerouslySetInnerHTML={{ __html: hub.description }}
              ></p>

              <div
                className="prose prose-lg max-w-full mb-8"
                dangerouslySetInnerHTML={{ __html: hub.content }}
              ></div>

              {/* Button/Link Section */}
              <a
                href={hub.media_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn btn-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition"
              >
                View Resource
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
