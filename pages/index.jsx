import Blob from "@/components/Blob";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <Head>
        <title>Amos Matthew ✦ Frontend Software Engineer</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            <div className="flex flex-col">
              <h2
                className={`font-bold sm:text-2xl md:text-2xl lg:text-3xl ${
                  currentTheme === "light" ? "text-purple-950" : "text-light"
                }`}
              >
                Hello! My Name Is Amos Matthew.
              </h2>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              A Frontend Software Engineer based in Nigeria with a blend of
              technical expertise and creative flair, specialized in designing
              elegant and intuitive interfaces that leave a lasting impression.
              Leveraging proficiency in HTML, CSS, JavaScript, and frontend
              frameworks, pride is taken in delivering polished solutions
              tailored to your needs. Let's collaborate to create something
              remarkable for your audience.
            </p>
          </div>
        </div>

        <div className="flex justify-left pt-7 space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
          <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
            <Link
              href="/Pranjal_Shikhar_Sinha.pdf"
              target="_blank"
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
            >
              <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
              <p>Download Resume</p>
            </Link>
          </div>
          <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
            <Link
              href="/work"
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
            >
              <BsArrowUpRight className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
              <p>View Projects</p>
            </Link>
          </div>
        </div>

        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
