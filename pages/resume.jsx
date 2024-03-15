import Head from "next/head";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";
export default function Resume() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto ">
      <Head>
        <title>Resume ✦ Amos Matthew</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="  max-w-screen resume">
        <div className=" mx-auto pt-16 -pb-10 w-full">
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vQoNf5iyoRdjrIHgZ725JIKdlwDZFWAwkJyek7NICtvfD4_dAFYp4iyy98vC5wW_Ra-kG493o4grm--/pub?embedded=true"></iframe>
        </div>
        <div className="py-20 text-center">
          <Link
            href="https://docs.google.com/document/d/17IxrwW1MauPG7H8kclDxpjfWWw9fHXsua8o4kqPM0TY/edit?usp=sharing"
            target="_blank"
            className="inline-flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg  dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 "
          >
            <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
            <p>View Doc Resume</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
