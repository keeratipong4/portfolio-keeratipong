import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

import Link from "next/link";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookSquare,
      color: "text-[#0055FF]",
      url: "https://www.facebook.com/cheeblackblue",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      color: "text-[#764ABC]",
      url: "https://www.instagram.com/nai_chee/",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      color: "text-[#FF4154]",
      url: "https://youtube.com/keeratipong",
    },
  ];

  return (
    <div className="mt-3 flex items-center justify-center">
      <div className="flex space-x-6">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white p-2 shadow-lg transition-shadow duration-300 ease-in-out hover:scale-[1.2] hover:shadow-lg focus:scale-[1.2] active:scale-105 dark:bg-white/10"
          >
            <social.icon
              className={`h-8 w-8 cursor-pointer duration-300 ease-in-out ${social.color} `}
            />
            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
