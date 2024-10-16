import About from "@/pages/about/page";
import Blog from "@/pages/blog/page";
import Contact from "@/pages/contact/page";
import EmpowerChats from "@/pages/empowerchat/page";
import Events from "@/pages/events/page";
import HomePage from "@/pages/HomePage/HomePage";
import Job from "@/pages/job/page";
import Membership from "@/pages/membership/page";
import Nomination from "@/pages/nomination/page";
import Podcast from "@/pages/podcast/page";
import Programs from "@/pages/programs/page";
import ScholarshipPage from "@/pages/scholarship/page";
import Speaders from "@/pages/speakers/page";
import Story from "@/pages/story/page";
import StudyHub from "@/pages/studyhub/page";
import { ReactNode } from "react";



export type TRoute = {
  id: number;
  path: string;
  element: ReactNode;
};



export const routes: TRoute[] = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/events",
    element: <Events />,
  },
  {
    id: 3,
    path: "/studyhub",
    element: <StudyHub />,
  },
  {
    id: 4,
    path: "/empowerchat",
    element: <EmpowerChats />,
  },
  {
    id: 5,
    path: "/podcast",
    element: <Podcast />,
  },
  {
    id: 6,
    path: "/nomination",
    element: <Nomination />,
  },
  {
    id: 7,
    path: "/membership",
    element: <Membership />,
  },
  {
    id: 8,
    path: "/speakers",
    element: <Speaders />,
  },
  {
    id: 9,
    path: "/job",
    element: <Job />,
  },
  {
    id: 10,
    path: "/scholarship",
    element: <ScholarshipPage />,
  },
  {
    id: 11,
    path: "/blog",
    element: <Blog />,
  },
  {
    id: 12,
    path: "/story",
    element: <Story />,
  },
  {
    id: 13,
    path: "/programs",
    element: <Programs />,
  },
  {
    id: 14,
    path: "/about",
    element: <About />,
  },
  {
    id: 15,
    path: "/contact",
    element: <Contact />,
  },
];
