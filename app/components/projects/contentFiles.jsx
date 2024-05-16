/* eslint-disable react/jsx-key */
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase,  } from "react-icons/io5";
import { TbBrandCSharp, TbBrandNextjs, TbBrandReactNative, TbBrandTailwind } from "react-icons/tb";
import { SiMysql, SiCsharp, SiMongodb } from "react-icons/si";

const project1Content = {
    title: "Plane Text",
    description: "Our project is a comprehensive solution for managing pilot schedules, designed with a focus on efficiency, reliability, and scalability. Developed using C# and .NET Maui, it leverages the power of object-oriented programming principles to ensure a robust and maintainable codebase.\
    At its core, our system utilizes a Node.js server to parse XAML files, a widely used markup language for creating user interfaces, and seamlessly integrates with a SQL database for storing and managing crucial data. This combination of technologies ensures efficient parsing and storage of pilot schedules, providing a centralized repository for easy access and manipulation.\
    By harnessing the capabilities of Node.js for server-side operations and SQL for data storage, our system achieves a high level of robustness and reliability. Node.js handles the parsing of XAML files and facilitates seamless communication with the SQL database, enabling swift and accurate data management and retrieval.",
    techStack: [<TbBrandCSharp size={60}/>, <FaNodeJs size={60}/>, <SiMysql size={60}/>, <SiCsharp size={60}/>], // Using icons for tech stack
    slides: [
      {
        src: require("../../../public/assets/projects/project2Carbon/img1.png"),
        alt: "Image 1 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img2.png"),
        alt: "Image 2 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img3.png"),
        alt: "Image 3 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img4.png"),
        alt: "Image 4 for carousel"
      }
    ]
  };


const project2Content = {
    title: "Carbon Emission Tracking",
    description: "Our project is a web application developed using React.js and Next.js, empowering environmental activists to combat climate change and promote sustainability. With Firebase Authentication for secure access and Firebase Database Management for seamless data storage, the platform serves as a central hub for monitoring carbon emissions and advocating for environmental conservation. Integrated Leaflet Map functionality enables users to visualize emission data and travel routes, while the Carbon Emission Calculator encourages sustainable lifestyle choices. Through modern web technologies, our project provides activists with the tools to make a positive impact on the environment, driving meaningful change towards a greener future.",
    techStack: [<FaReact size={60}/>, <FaNodeJs size={60}/>, <IoLogoFirebase size={60}/>,  <IoLogoJavascript size={60}/>], // Using icons for tech stack
    deployment: "https://carbon-foot-print-capstone.vercel.app/",
    slides: [
      {
        src: require("../../../public/assets/projects/project2Carbon/img1.png"),
        alt: "Image 1 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img2.png"),
        alt: "Image 2 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img3.png"),
        alt: "Image 3 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img4.png"),
        alt: "Image 4 for carousel"
      }
    ]
  };

const project3Content = {
    title: "Styles Boutique",
    description: "Our project, crafted with Next.js and React, and styled with Tailwind CSS, offers a dynamic e-commerce experience. Leveraging Redux for state management, it seamlessly integrates external APIs like https://fakestoreapi.com/products to fetch product data on-the-fly. With typical e-commerce features like product browsing, search, cart management, and checkout processes, users enjoy a comprehensive shopping journey. Additionally, Next.js authentication integrated with MongoDB ensures secure user login functionality, enhancing the platform's reliability and trustworthiness.",
    techStack: [<FaReact size={60}/>, <SiMongodb size={60}/>, <TbBrandNextjs size={60}/>,  <IoLogoJavascript size={60}/>], // Using icons for tech stack
    deployment: "https://carbon-foot-print-capstone.vercel.app/",
    slides: [
      {
        src: require("../../../public/assets/projects/project2Carbon/img1.png"),
        alt: "Image 1 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img2.png"),
        alt: "Image 2 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img3.png"),
        alt: "Image 3 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img4.png"),
        alt: "Image 4 for carousel"
      }
    ]
  };

const project4Content = {
    title: "Weather App",
    description: "Our Weather Mobile App, built using React-Native and styled with Tailwind, delivers a seamless mobile experience. It harnesses the power of a Weather API to provide real-time weather data, offering users location-based weather updates for accurate forecasts. With a focus on intuitive UI/UX design and responsive layout, the app ensures ease of use across various devices. Thorough testing and performance optimizations guarantee reliability and efficiency, making it a dependable tool for users to stay informed about weather conditions on the go.",
    techStack: [<TbBrandReactNative size={60}/>, <FaHtml5 size={60}/>, <TbBrandTailwind  size={60}/>,  <IoLogoJavascript size={60}/>], // Using icons for tech stack
    deployment: "https://carbon-foot-print-capstone.vercel.app/",
    slides: [
      {
        src: require("../../../public/assets/projects/project2Carbon/img1.png"),
        alt: "Image 1 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img2.png"),
        alt: "Image 2 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img3.png"),
        alt: "Image 3 for carousel"
      },
      {
        src: require("../../../public/assets/projects/project2Carbon/img4.png"),
        alt: "Image 4 for carousel"
      }
    ]
  };



export {project1Content, project2Content, project3Content, project4Content};
