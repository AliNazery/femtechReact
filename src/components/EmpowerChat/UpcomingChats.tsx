import { upcomingChats } from './ChatsData';

export default function UpcomingChats() {
  return (
    <>
      <div className="container mx-auto px-6 pt-4">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Empower Chats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingChats.map(
            ({ id, title, description, date, speaker }) => (
              <div
                key={id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-700 mt-2">{description}</p>
                <p className="text-gray-600 mt-4">Date: {date}</p>
                <p className="text-gray-600">Speaker: {speaker}</p>
                {/* <Link
                  href={link}
                  className="mt-4 inline-block px-4 py-2 bg-pink text-white rounded hover:bg-deepPink transition-all"
                >
                  Register Now
                </Link> */}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
