import userImage from "../@core/images/profile/profile.jpg";

import {
  REST,
  Bootstrap,
  Css,
  DSA,
  Express,
  Html,
  Javascript,
  Tailwind,
  MicroServices,
  Mongodb,
  Mongoose,
  Node,
  ReactJs,
  Redux,
  LT,
  Seeds
} from "@Icon";

export default {
  myProfile: {
    profileImage: userImage,
    fullName: "Mohammad Iqbal Shaikh",
    email: "shaikhiqbal80004@gmail.com",
    phone: "+91 7498645097",
    address: {},
    workExperience: "2 Years",
    location: `Nashik`,
    work: ["Bangloru", "Pune", "Mumbai", "Hybrid", "Remote"],
  },
  skill: [
    {
      name: "Javascript",
      icon: Javascript,
      rate: "7",
      color: "#E4BA41",
    },
    {
      name: "Html5",
      icon: Html,
      rate: "8",
      color: "#FC490B",
    },
    {
      name: "CSS",
      icon: Css,
      rate: "6.5",
      color: "#1572B6",
    },
    {
      name: "Bootstrap",
      icon: Bootstrap,
      rate: "8",
      color: "#473080",
    },
    {
      name: "Tailwind CSS",
      icon: Tailwind,
      rate: "6",
      color: "#1CBDF1",
    },
    {
      name: "React JS",
      icon: ReactJs,
      rate: "8",
      color: "#08E8F2",
    },
    {
      name: "Redux",
      icon: Redux,
      rate: "8",
      color: "#BD00FF",
    },
    {
      name: "Node JS",
      icon: Node,
      rate: "7",
      color: "#58AA46",
    },
    {
      name: "REST API",
      icon: REST,
      rate: "10",
      color: "#F8F8FF",
    },
    {
      name: "DSA",
      icon: DSA,
      rate: "5.5",
      color: "#7584F2",
    },
  ],
  learningSkill: [
    {
      name: "Express JS",
      icon: Express,
      rate: "",
      color: "",
    },
    {
      name: "MongoDB",
      icon: Mongodb,
      rate: "",
      color: "",
    },
    {
      name: "Mongoose",
      icon: Mongoose,
      rate: "",
      color: "",
    },
    {
      name: "Micro Services",
      icon: MicroServices,
      rate: "",
      color: "",
    },
  ],
  aboutMe: {
    title: "About Me",
    list: [
      `I am Mohammad Iqbal Shaikh, a seasoned Front-end Developer with over 3
    years of experience specializing in React.js. With a passion for
    crafting engaging user interfaces, I thrive on bringing creative
    visions to life. Committed to staying ahead of industry trends, I
    continuously refine my skills to deliver cutting-edge solutions. Known
    for my attention to detail and problem-solving abilities.`,
    ],
  },

  jobs: [
    {
      title: "Front-End Developer",
      company: "Loctrust Inc.",
      joinedDate: "2022-04-12",
      location: "Nashik",
      icon:LT,
      subTitle:
        "Contributed to frontend development with a primary focus on React-based applications.",
      list: [
        "Developed 10+ user-focused, modern React applications resulting in 15% improved user experience.",
        "Troubleshot and maintained 7 company websites, ensuring fast and optimal performance.",
        "Worked closely with the content team to optimize websites for accessibility and speed, increasing site traffic by 20%.",
      ],
    },

    {
      title: "Web Development Intern",
      company: "Tech seeds Consult & Services",
      joinedDate: "2021-03-01",
      location: "Nashik",
      icon:Seeds,
      subTitle:
        "Part of the development team working on frontend technologies.",
      list: [
        "Gained hands-on experience with JavaScript and React JS, contributing to various development projects.",
        "Assisted in maintaining and troubleshooting portfolio of websites ensuring seamless user experience.",
        "Developed understanding of Sass , Bootstrap and Tailwind, working on side projects and tasks.",
      ],
    },
  ],
  strengths: [
    {
      title: "Adaptability",
      description:
        "Quickly adapted to the sophisticated React ecosystem at Syntax Technologies, contributing to major projects within the first few months.",
      icon: "",
    },
    {
      title: "Collaborative",
      description:
        "Successfully collaborated with a team of developers and content creators at Innova Solutions, improving site traffic by 20%.",
      icon: "",
    },
    {
      title: "Dedicated Learner",
      description:
        "Consistently kept up-to-date with the latest technologies, including a proficient understanding of Mobx and MST while at Neural Networks.",
      icon: "",
    },
  ],
  certification: [
    {
      title: "Advanced React and Redux",
      description:
        "Certificate Course by Udemy focusing on advanced concepts of React and Redux.",
    },
    {
      title: "Modern JavaScript: From Novice to Ninja",
      description:
        "Completed comprehensive course by Udemy on Modern JavaScript.",
    },
  ],
  passion: [
    {
      title: "Web Development",
      description:
        "I love creating interactive, efficient, and user-friendly web applications that add value to businesses.",
      icon: "",
    },
    {
      title: "Learning Coding Languages",
      description:
        "Spending time deep-diving into new coding languages and web technologies stimulates and inspires me.",
      icon: "",
    },
  ],
  languages: ["Urdu", "English", "Hindi", "Marathi"],
};
