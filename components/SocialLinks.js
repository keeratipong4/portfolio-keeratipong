import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
  ];

  return (
    <div className="flex items-center justify-center ">
      <div className="flex space-x-6">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <social.icon className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out" />
            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
