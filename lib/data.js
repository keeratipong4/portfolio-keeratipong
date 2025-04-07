import Link from "next/link";
import { FaEye } from "react-icons/fa";

export const links = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    hash: "#projects",
  },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Education",
    hash: "#education",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    title: "The Wild Oasis (for hotel staff)",
    description: (
      <span>
        An application for internal employee of a small boutique hotel to manage
        bookings, cabins and guests. You have to login with this made up email{" "}
        <span className="font-semibold underline"> test@test.com</span> and{" "}
        <span className="font-semibold underline">password: 12345</span> in
        order to manage bookings as if you are an employee of the hotel
      </span>
    ),
    tags: ["React.js", "Vite", "React Query", "StyledComponent", "Supabase"],
    imageUrl: "/21-wild-oasis-employee-desktop-light.png",
    repo: "https://github.com/keeratipong4/17-the-wild-oasis.git",
    liveDemo: "https://wild-oasis-for-employee.vercel.app/",
  },
  {
    title: "The Wild Oasis (for hotel guests)",
    description: (
      <span>
        This website is for customer who wants to make reservation. <br />
        Signing in with your google account allows you to make reservations
      </span>
    ),
    tags: ["React.js", "Next.js", "Tailwind", "Supabase"],
    imageUrl: "/17-wild-oasis-customer-desktop.png",
    repo: "https://github.com/keeratipong4/21-the-wild-oasis-website.git",
    liveDemo: "https://wild-oasis-home-stay.vercel.app/",
  },
  {
    title: "Fast React Pizza company",
    description:
      "Application for ordering pizza, User can order multiple pizzas from menu list, edit or remove menu from a cart, search for a pizza order ID and update it even after the order was placed",
    tags: ["Vite", "React.js", "Redux", "Tailwind"],
    imageUrl: "/16-fast-react-pizza.png",
    repo: "https://github.com/keeratipong4/16-fast-react-pizza.git",
    liveDemo: "https://16-fast-react-pizza-seven.vercel.app/",
    youtube: "https://youtu.be/yF-5O3hOREQ",
  },
  {
    title: "React Redux Bank",
    description:
      "A very simple application for practicing the principle of Redux",
    tags: ["React.js", "CSS"],
    imageUrl: "/15-react-redux-bank.png",
    repo: "https://github.com/keeratipong4/15-redux-intro.git",
    liveDemo: "https://15-redux-intro.vercel.app/",
  },
  {
    title: "Workout Timer",
    description:
      "A simple application for practicing the principle of React.js",
    tags: ["React.js", "CSS"],
    imageUrl: "/13-workout-timer.png",
    repo: "https://github.com/keeratipong4/13-workout-timer.git",
    liveDemo: "https://13-workout-timer.vercel.app/",
  },
  {
    title: "Atomic Blog",
    description:
      "A simple application for practicing the principle of React.js",
    tags: ["React.js", "CSS"],
    imageUrl: "/12-atomic-blog.png",
    repo: "https://github.com/keeratipong4/12-atomic-blog.git",
    liveDemo: "https://12-atomic-blog-teal.vercel.app/",
  },
  {
    title: "World Wise",
    description:
      "There is an issue regarding the deployment of this project. User might not be able to pin a location on the map. Problem will be fixed soon",
    tags: ["React.js", "module CSS"],
    imageUrl: "/11-worldwise.png",
    repo: "https://github.com/keeratipong4/11-worldwise.git",
    liveDemo: "https://11-worldwise-ten.vercel.app/",
  },
  {
    title: "React Quiz",
    description:
      "There is an issue regarding the deployment of this project. The live demo is not available at the moment",
    tags: ["React.js", "CSS"],
    imageUrl: "/10-react-quiz.png",
    repo: "https://github.com/keeratipong4/10-react-quiz.git",
    liveDemo: "https://10-react-quiz-mu.vercel.app/",
  },
  {
    title: "Classy Weather",
    description:
      "A very simple application implemented using class-based React (Legacy React before hook was introduced)",
    tags: ["React.js", "CSS"],
    imageUrl: "/09-classy-weather.png",
    repo: "https://github.com/keeratipong4/09-classy-weather.git",
    liveDemo: "",
  },
  {
    title: "Use Popcorn",
    description:
      "There is an issue regarding the deployment of this project. The live demo is not available at the moment",
    tags: ["React.js", "CSS"],
    imageUrl: "/07-usePopcorn.png",
    repo: "https://github.com/keeratipong4/07-usePopCorn.git",
    liveDemo: "https://07-use-pop-corn-lake.vercel.app/",
  },
  {
    title: "Eat N Split",
    description:
      "A simple application for practicing the principle of React.js",
    tags: ["React.js", "CSS"],
    imageUrl: "/06-eat-n-split.png",
    repo: "https://github.com/keeratipong4/eat-n-split.git",
    liveDemo: "https://eat-n-split-phi-plum.vercel.app/",
  },
  {
    title: "Travel Todo List",
    description:
      "An application for managing a list of things to do when traveling",
    tags: ["React.js", "CSS"],
    imageUrl: "/05-travel-todo-list.png",
    repo: "https://github.com/keeratipong4/05-travel-list.git",
    liveDemo: "https://05-travel-list-eta.vercel.app/",
  },
  {
    title: "Steps",
    description:
      "A simple application for practicing the principle of React.js",
    tags: ["React.js", "CSS"],
    imageUrl: "/04-steps.png",
    repo: "https://github.com/keeratipong4/04-steps.git",
    liveDemo: "",
  },
  // {
  //   title: "Pizza Menu",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   tags: ["React.js"],
  //   imageUrl: "/03-pizza-menu.png",
  //   repo: "https://github.com/keeratipong4/pizza-demo-project.git",
  //   liveDemo: "https://pizza-demo-project.vercel.app/",
  // },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Redux",
  "Redux Toolkit",
  "React Query",
  "Git",
  "Tailwind",
  // "Framer Motion",
  "Supabase",
  "Postman",
  "Node.js",
  "Express.js",
  "MySQL",
  "Socket.io",
  "StyledComponent",
  "React Router",
];
export const educationData = [
  {
    institution: "Udemy",
    logo: "/udemyLogo.webp",
    title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    link: "https://www.udemy.com/share/108PTo/",
    description: (
      <span>
        Self-directed learning online at home
        <br />
        <Link
          className="flex w-fit items-center gap-1 hover:text-blue-600 hover:underline"
          href="https://docs.google.com/spreadsheets/d/1-FibrhJNfJ5Ia48Ir9WkUkSEastH0prdUph8WQBC0s4/edit?usp=sharing"
        >
          <FaEye /> Click here to see how I spent 398 hours in 6 months for this
          course
        </Link>
      </span>
    ),
    year: "May-Nov 2024",
    credential:
      "https://www.udemy.com/certificate/UC-b240a6d3-b8a1-4d0c-87fa-9858ecbe06ca/",
  },
  {
    institution: "Software Park Thailand (Code Camp)",
    logo: "/codecamp-icon.jpg",
    title: "Full Stack JavaScript For Web Developer",
    link: "https://getcodecamp.com/",
    description: "Onsite learning bootcamp 8 hours a day for 4 months",
    year: "Mar-Jul 2023",
    credential: "",
  },
  {
    institution: "Chulalongkorn University",
    logo: "/chulalongkorn-icon.png",
    title: (
      <>
        <span />
        Information and Communication Engineering
        <span /> <br />
        <span>( International School of Engineering</span>)
      </>
    ),
    link: "http://www.ise.eng.chula.ac.th/academics/ice/info",
    description:
      "A field related to computer programming, computer architecture, data structure, digital communications",
    year: "Graduated: Jun 2011",
    credential: "",
  },
];
