import { EmpowerChat, Nomination, Podcast } from "@/components/Common/TalkSvg";
import React from "react";


export const TalksData = [
  {
    id: 1,
    delay: 200,
    bgColor: "bg-geraldine bg-opacity-20",
    icon: React.createElement(EmpowerChat),
    title: "Empower Chat",
    description: `Inspiring tech conversations for women, fostering growth and connection.`,
    link: "/empowerchat",
  },
  {
    id: 2,
    delay: 250,
    bgColor: "bg-seafoam_blue bg-opacity-20",
    icon: React.createElement(Podcast),
    title: "PodCast",
    description: `Expert advice and personalized mentorship from industry leaders, tailored to accelerate your tech career growth.`,
    link: "/podcast",
  },
  {
    id: 3,
    delay: 300,
    bgColor: "bg-seafoam_blue bg-opacity-20",
    icon: React.createElement(Nomination),
    title: "Nomination",
    description: `Recognizing and celebrating women’s impactful contributions and leadership in tech.`,
    link: "/nomination",
  },
];
