/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import aizen from "../../public/work/kamui1.png";

export default function AutoMode() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Auto Mode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca dark:text-[#e9eff1] text-sky-950 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              Auto Mode
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca text-sky-950  selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Car Information Tracker
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
                href="https://github.com/Swaymos/automode/"
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
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>Ninja Image API</li>
          </ul>
          <h2 className="my-4 font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            🔋 Features
          </h2>

          <div className="feature-list">
            <p>
              👉 <strong>Car Features</strong>: Get the information of the car
              brand and model you wish to learn more about.
            </p>
            <p>
              👉 <strong>Car Media</strong>: View the image of your favourite
              car brand or model, look at multiple angles of the car.
            </p>
          </div>

          <h2 className="my-4 font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            🔋 Would You Love To Check Out Auto Mode?
          </h2>

          <p>Follow the link to view the live project. Thanks for watching.</p>
        </div>
      </main>
    </div>
  );
}
