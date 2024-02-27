/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import aizen from "../../public/work/aizen.png";

export default function Aizen() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Issue Forge</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              Issue Forge
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              React Based CRM
            </h4>
          </div>
          <Image
            loading="lazy"
            src={aizen}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-4 mb-10"
          />
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href="/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/Swaymos/issueforge/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
              >
                <FaGithub className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                <p>Code</p>
              </Link>
            </div>
          </div>
          <div className="pt-10">
            <div align="">
              A React-based CRM dashboard featuring comprehensive
              authentication, antd charts, sales management, and a fully
              operational kanban board with live updates for real-time actions
              across all devices.
            </div>
          </div>

          <h2 className="font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            ⚙️ Technologies Used In Building Issue Forge
          </h2>

          <ul className="list-disc pt-3">
            <li>React.js</li>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Ant Design</li>
            <li>Refine</li>
            <li>Codegen</li>
            <li>Vite</li>
          </ul>
          <h2 className="my-4 font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            🔋 Features
          </h2>

          <p>
            👉 <strong>Authentication</strong>: Seamless onboarding with secure
            login and signup functionalities; robust password recovery ensures a
            smooth authentication experience.
          </p>
          <p>
            👉 <strong>Authorization</strong>: Granular access control regulates
            user actions, maintaining data security and user permissions.
          </p>
          <p>
            👉 <strong>Home Page</strong>: Dynamic home page showcases
            interactive charts for key metrics; real-time updates on activities,
            upcoming events, and a deals chart for business insights.
          </p>
          <p>
            👉 <strong>Companies Page</strong>: Complete CRUD for company
            management and sales processes; detailed profiles with add/edit
            functions, associated contacts/leads, pagination, and field-specific
            search.
          </p>
          <p>
            👉 <strong>Kanban Board</strong>: Collaborative board with real-time
            task updates; customization options include due dates, markdown
            descriptions, and multi-assignees, dynamically shifting tasks across
            dashboards.
          </p>
          <p>
            👉 <strong>Account Settings</strong>: Personalized user account
            settings for profile management; streamlined configuration options
            for a tailored application experience.
          </p>
          <p>
            👉 <strong>Responsive</strong>: Full responsiveness across devices
            for consistent user experience; fluid design adapts seamlessly to
            various screen sizes, ensuring accessibility.
          </p>
          <p>and many more, including code architecture and reusability</p>

          <h2 className="my-4 font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            🔋 Would You Love To Check Out Issue Forge?
          </h2>

          <p>Follow the link to view the live project. Thanks for watching.</p>
        </div>
      </main>
    </div>
  );
}
