import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "@/contexts/Provider";
import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// export const metadata = {
//   title: "Keeratipong | Portfolio",
//   description: "Web developer base in Bangkok",
// };
export const metadata = {
  title: "Keeratipong | Web Developer",
  description:
    "Web developer based in Bangkok, Thailand. Fluent in Thai, English, and Chinese.",
  openGraph: {
    title: "Keeratipong - Web Developer",
    description:
      "Web developer based in Bangkok, Thailand. Fluent in Thai, English, and Chinese.",
    url: "https://keeratipong.com",
    siteName: "Keeratipong",
    images: [
      {
        url: "/preview-page-keeratipong.png", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Keeratipong - Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keeratipong - Web Developer",
    description:
      "Web developer based in Bangkok, Thailand. Fluent in Thai, English, and Chinese.",
    images: ["/keeratipong-portrait-ori.jpg"], // Replace with your actual OG image path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sora.variable} relative flex flex-col bg-slate-100 font-Sora text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Gradient background color */}
        <div className="absolute right-[11rem] top-[-6rem] -z-[10] h-[31.25rem] w-[31.25rem] flex-1 rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-[10] h-[31.25rem] w-[50rem] flex-1 rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Providers>
          <Navbar />
          {children}
          {/* <Footer /> */}
          <ThemeSwitch />
        </Providers>
        <footer className="flex h-20 w-full items-center justify-center bg-gray-200 dark:bg-gray-800">
          <div className="flex items-center justify-center gap-2">
            <span>Made with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-heart text-red-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>by Keeratipong</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
