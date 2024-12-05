import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedInLogo,
  YoutubeLogo,
} from "@/lib/Icons";

import Link from "next/link";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "github",
      icon: GithubLogo,
      color: "bg-white/40",
      url: "https://github.com/keeratipong4",
    },

    {
      name: "Instagram",
      icon: InstagramLogo,
      // icon: FaInstagram,
      color: "dark:bg-white/10",
      url: "https://www.instagram.com/nai_chee/",
    },
    {
      name: "Facebook",
      icon: FacebookLogo,
      // icon: FaFacebookSquare,
      color: "dark:bg-white/10",
      // color: "text-[#0055FF]",
      url: "https://www.facebook.com/cheeblackblue",
    },
    {
      name: "YouTube",
      icon: YoutubeLogo,
      // icon: FaYoutube,
      color: "dark:bg-white/10",
      // color: "text-[#FF4154]",
      url: "https://youtube.com/keeratipong",
    },
    {
      name: "LinkedIn",
      icon: LinkedInLogo,
      color: "dark:bg-white/10",
      url: "https://www.linkedin.com/in/keeratipong-boonnapongkasem-99259527b/",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-6">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-full bg-white p-2 shadow-lg transition-shadow duration-300 ease-in-out hover:scale-[1.2] hover:shadow-lg focus:scale-[1.2] active:scale-105 ${social.color}`}
          >
            <social.icon
              className={`h-8 w-8 cursor-pointer bg-white duration-300 ease-in-out`}
            />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-500 px-1 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-700">
              {social.name}
            </span>{" "}
            {/* <span className="sr-only">{social.name}</span> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
