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
        <title>Social Sphere</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              Social Sphere
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Instagram Clone
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
                href="https://github.com/Swaymos/socialsphere/"
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
              It's a minified Instagram clone. Make post and quick edits to your
              posted content.
            </div>
          </div>

          <h2 className="font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            ⚙️ Technologies Used In Building Social Sphere
          </h2>

          <ul className="list-disc pt-3">
            <li>React.js</li>
            <li>Appwrite</li>
            <li>React Query</li>
            <li>TypeScript</li>
            <li>Shadcn</li>
            <li>Tailwind CSS</li>
          </ul>
          <h2 className="my-4 font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            🔋 Features
          </h2>

          <p>
            👉 <strong>Authentication System</strong>: A robust authentication
            system ensuring security and user privacy
          </p>
          <p>
            👉 <strong>Explore Page</strong>: Homepage for users to explore
            posts, with a featured section for top creators
          </p>
          <p>
            👉 <strong>Like and Save Functionality</strong>: Enable users to
            like and save posts, with dedicated pages for managing liked and
            saved content
          </p>
          <p>
            👉 <strong>Detailed Post Page</strong>: A detailed post page
            displaying content and related posts for an immersive user
            experience
          </p>
          <p>
            👉 <strong>Profile Page</strong>: A user profile page showcasing
            liked posts and providing options to edit the profile
          </p>
          <p>
            👉 <strong>Browse Other Users</strong>: Allow users to browse and
            explore other users&#39; profiles and posts
          </p>
          <p>
            👉 <strong>Create Post Page</strong>: Implement a user-friendly
            create post page with effortless file management, storage, and
            drag-drop feature
          </p>
          <p>
            👉 <strong>Edit Post Functionality</strong>: Provide users with the
            ability to edit the content of their posts at any time
          </p>
          <p>
            👉 <strong>Responsive UI with Bottom Bar</strong>: A responsive UI
            with a bottom bar, enhancing the mobile app feel for seamless
            navigation
          </p>
          <p>
            👉 <strong>React Query Integration</strong>: Incorporate the React
            Query (Tanstack Query) data fetching library for, Auto caching to
            enhance performance, Parallel queries for efficient data retrieval,
            First-class Mutations, etc
          </p>
          <p>
            👉 <strong>Backend as a Service (BaaS) - Appwrite</strong>: Utilize
            Appwrite as a Backend as a Service solution for streamlined backend
            development, offering features like authentication, database, file
            storage, and more
          </p>

          <h2 className="my-4 font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            🔋 Would You Love To Check Out Issue Forge?
          </h2>

          <p>Follow the link to view the live project. Thanks for watching.</p>
        </div>
      </main>
    </div>
  );
}
