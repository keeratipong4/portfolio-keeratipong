import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/cheeblackblue",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/nai_chee/",
    },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/keeratipong" },
  ];

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="flex space-x-6">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white p-3 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
          >
            <social.icon className="h-5 w-5 text-gray-700 transition-colors duration-300 ease-in-out hover:text-gray-900" />
            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
