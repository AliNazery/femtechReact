import React from "react";
import {
  FeatureOneSvg,
  FeatureTwoSvg,
  FeatureThreeSvg,
  FeatureFourSvg,
  FeatureFourFiveSvg,
} from "../Common/svg";

export const features = [
  {
    id: 1,
    delay: 200,
    bgColor: "bg-geraldine bg-opacity-20",
    icon: React.createElement(FeatureOneSvg),
    title: "Tech Courses",
    description: `Comprehensive online tech and computer science courses tailored for women.`,
  },
  {
    id: 2,
    delay: 250,
    bgColor: "bg-seafoam_blue bg-opacity-20",
    icon: React.createElement(FeatureTwoSvg),
    title: "Mentorship Programs",
    description: `Access to personalized guidance and mentorship from industry experts`,
  },
  {
    id: 3,
    delay: 300,
    bgColor: "bg-seafoam_blue bg-opacity-20",
    icon: React.createElement(FeatureThreeSvg),
    title: "Webinars and Talks",
    description: ` Regular webinars and discussions aimed at professional development.`,
  },
  {
    id: 4,
    delay: 350,
    bgColor: "bg-quaternary bg-opacity-40",
    icon: React.createElement(FeatureFourSvg),
    title: "Community Engagement",
    description: `Opportunities to join a thriving community of women in STEM.`,
  },
  {
    id: 5,
    delay: 400,
    bgColor: "bg-quaternary bg-opacity-40",
    icon: React.createElement(FeatureFourFiveSvg),
    title: "Real-World Projects",
    description: `Collaboration on tech projects with global companies to enhance skills and employment opportunities`,
  },
];
