import { CoursesSvg, SessionsSvg, WebinarsSvg } from "@/components/Common/StudyHubSvg";
import React from "react";


export const StudyData = [
  {
    id: 1,
    delay: 200,
    bgColor: "bg-geraldine bg-opacity-20",
    icon: React.createElement(SessionsSvg),
    title: "Up Comming Sessions",
    description: `Focused online tech and computer science sessions for women.`,
    link: "/sessions"
  },
  {
    id: 2,
    delay: 250,
    bgColor: "bg-seafoam_blue bg-opacity-20",
    icon: React.createElement(CoursesSvg),
    title: "Courses",
    description: `Comprehensive tech courses designed to empower women in tech.`,
    link: "/courses"
  },
  {
    id: 3,
    delay: 300,
    bgColor: "bg-seafoam_blue bg-opacity-20",
    icon: React.createElement(WebinarsSvg),
    title: "Webinars",
    description: ` Interactive webinars on the latest trends, emerging technologies, and essential skills in tech.`,
    link: "/webinars"
  },
];
