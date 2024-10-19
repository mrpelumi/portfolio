import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pelumi Oguntola",
  initials: "PO",
  url: "https://dillion.io",    //edit later
  location: "Lagos, NG",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",   //edit later
  description:
    "Experienced and Passionate Software Developer. I like building applications to solve business and customer problems.",
  summary:
    "A FrontEnd Developer with experience working with HTML, CSS, JavaScript, and React. I have experience translating user requirements into high-quality complex web applications. Highly adept at both independent and collaborative projects, with an emphasis on web applications and website development. I thrive in dynamic environments where I can leverage my problem-solving abilities and attention to detail to deliver exceptional user experiences.",
  avatarUrl: "/profile.jpg",
  skills: [
    "React",
    "JavaScript",
    "Firebase",
    "Python",
    "Django",
    "AWS",
    "Tailwind",
    "SQL",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://pelumi-corner.netlify.app", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pelumioguntola5@gmail.com",
    tel: "+2349059626709",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mrpelumi",
        icon: Icons.github,

        navbar: true,
      },
      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "www.linkedin.com/in/pelumi-oguntola",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      X: {
        name: "X",
        url: "https://x.com/Pelcole",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bukven Communications Ltd",
      href: "",
      badges: [],
      location: "Nigeria",
      title: "Software Developer",
      logoUrl: "",
      start: "May 2024",
      end: "Present",
      description:
        "Designed, built and deployed a web applicaton to automate the generation of business premise receipts and certificates for ondo state businesses. Handling file uploads with AWS, authentication system, backend with firebase and payment integration with flutterwave. Designed, built and deployed a dashbord to monitor the amount of revenue, certificate and receipt generated.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Developer",
      logoUrl: "",
      start: "June 2023",
      end: "April 2024",
      description:
        "Designed, developed and deployed web applications for clients. Translated user requirements into modern UI with Figma. Built modern websites for businesses with CMS platforms such as WordPress.",
    },
    {
      company: "Punch Group",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "January 2023",
      end: "May 2023",
      description:
        "Collaborated with the team to build a functional backend that exposed API endpoints for the frontend developer. Built a database and its schema for the application. Worked with the frontend developer to ensure the correct form data is sent to the servers.",
    },
    {
      company: "Coal City Unniversity",
      href: "",
      badges: [],
      location: "Nigeria",
      title: "Software Engineer",
      logoUrl: "",
      start: "April 2022",
      end: "November 2023",
      description:
        "Maintained the university web application, improved its SEO on the internet. Collaborated with team members to improve application load time and add new features.",
    },
  ],
  education: [
    {
      school: "Ajayi Crowther University",
      href: "",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2020",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
  ],
  projects: [
    {
      title: "Ondo Business Saas",
      href: "https://www.ondobusinesspremises.com",
      dates: "May 2024 - Present",
      active: true,
      description:
        "Following user requirements, I designed, developed and deployed a Saas product for bukven communications ltd to aid with business revenue collection, receipt and certificate generation",
      technologies: [
        "React",
        "Firebase",
        "SaSS",
        "Material UI",
        "Redux",
        "EmailJS",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ondobusinesspremises.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ondo-business-Sass.png",
      video:"",
    },
    {
      title: "Business Premises",
      href: "",
      dates: "June 2024 - August 2024",
      active: true,
      description:
        "Designed, developed and deployed a SaaS platform with flutterwave integration for payment.",
      technologies: [
        "React",
        "Firebase",
        "Flutterwave",
        "MaterialUI",
        "Sass",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mrpelumi/business-premises",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/business-Sass.png",
      video: "",
    },
    {
      title: "Business Dashboard",
      href: "",
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "Designed, developed a dashboard to display in an analytical manner the data on the business SaaS platform. ",
      technologies: [
        "React",
        "Firebase",
        "TailwindCSS",
        "PrimeReact",
        "React-Charts",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mrpelumi/business-dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/business-dashboard.png",
      video: "",
    },
    {
      title: "Pngn Store",
      href: "",
      dates: "April 2024 - March 2024",
      active: true,
      description:
        "Developed an e-commerce platform for wears with stripe payment integration.",
      technologies: [
        "React",
        "Stripe",
        "Sass",
        "Redux",
        "Firebase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mrpelumi/pngn-clothing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pngn-clothing.png",
      video:"",
    },
    {
      title: "Pelumi Corner",
      href: "https://pelumi-corner.netlify.app/",
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "Developed a blog app with an authentication system and a frontend admin panel.",
      technologies: [
        "React",
        "Firebase",
        "Tailwind",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://pelumi-corner.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mrpelumi/pelumi-corner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pelumi-corner.png",
      video:"",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
  ],
} as const;
