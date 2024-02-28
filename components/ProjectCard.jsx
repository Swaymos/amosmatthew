import Image from "next/image";
import issueforge from "../public/work/issueforge.jpg";
import socialsphere from "../public/work/socialsphere.jpg";
import valuevision from "../public/work/valuevision.jpg";
import automode from "../public/work/automode.jpg";
import artisticedge from "../public/work/artisticedge.jpg";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: issueforge,
      title: "Issue Forge",
      description:
        "A React-based CRM dashboard featuring comprehensive authentication, antd charts, sales management, and a fully operational kanban board with live updates for real-time actions across all devices.",
      link: "/work/issueforge",
      target: "_self",
    },
    {
      id: 2,
      image: socialsphere,
      title: "Social Sphere",
      description:
        "Social Sphere is a minified Instagram clone. Make post and quick edits to your posted content. A typical CRUD application",
      link: "/work/socialsphere",
      target: "_self",
    },
    {
      id: 3,
      image: valuevision,
      title: "Value Vision",
      description:
        "Keep track of the price of ecommerce items using the power of Next js and Typescript",
      link: "/work/valuevision",
      target: "_self",
    },
    {
      id: 4,
      image: automode,
      title: "Auto Mode",
      description:
        "Get useful information on any car brand and model. View images and some interesting facts about any car brand.",
      link: "/work/automode",
      target: "_blank",
    },
    {
      id: 5,
      image: artisticedge,
      title: "Artisitic Edge",
      description:
        "A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.",
      link: "/work/artisticedge",
      target: "_blank",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-16 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="100%"
                className="transition rounded-md max-w-[100%] sm:max-w-[90%] hover:scale-110"
              />
              <div className="text-left">
                <h1 className="font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
                  {project.title}
                </h1>
                <p className="py-2 max-w-[100%] sm:max-w-[80%] text-gray-400 font-light">
                  {project.description}
                </p>
              </div>
            </Link>

            <div className="text-left w-full pt-2">
              <Link
                href={project.link}
                target="_blank"
                className="font-normal text-lg lg:font-bold space-x-2  md:text-base hover:text-fuchsia-700"
              >
                <p>View Project</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
