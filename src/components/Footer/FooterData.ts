import React from "react";
import { FaceBookIcon, LinkedinIcon, SKypeIcon, TwitterIcon, YouTubeSvg } from "../Common/Icons/footerIcon/SocialIcon";

export const socialLinks = [
  {
    label: "FaFacebook",
    href: "https://www.facebook.com/groups/868613178160823/",
    icon: React.createElement(FaceBookIcon),
  },
  // {
  //   label: "FaSkype",
  //   href: "https://skype.com/",
  //   icon: React.createElement(SKypeIcon),
  // },
  {
    label: "FaYoutube",
    href: "https://www.youtube.com/channel/UCTEkKJ3HuREvPtBKL_aByqg",
    icon: React.createElement(YouTubeSvg),
  },
  {
    label: "FaTwitter",
    href: "https://x.com/femtech_af",
    icon: React.createElement(TwitterIcon),
  },
  {
    label: "FaLinkedin",
    href: "https://www.linkedin.com/company/femstechworldwide/mycompany/verification/",
    icon: React.createElement(LinkedinIcon),
  },
];


export const footerLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/job", label: "Career" },
  { href: "/terms", label: "Terms & Conditions" },
];


export const widgetLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/events", label: "Events" },
];