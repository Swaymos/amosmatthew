import Head from "next/head";
import Image from "next/image";
import aboutImage from "../public/amos.jpg";
import { useTheme } from "next-themes";
import CategoryCard from "@/components/CategoryCard";
import love_black from "../public/love-black.svg";
import love_white from "../public/love-white.svg";
export default function About() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>About ✦ Amos Matthew</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 mb-12 font-deca text-sky-950 dark:text-[#e9eff1] selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              About
            </h1>
            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-purple-50/10 shadow-purple-200 ">
              <Image
                src={aboutImage}
                placeholder="blur"
                height={600}
                width={600}
                className="rounded-2xl select-none drop-shadow-md shadow-purple-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
                alt="Amos Matthew"
                priority
              />
            </div>
            <div className="text-center mx-auto mt-8 z-20">
              <h3 className="mx-auto  font-bold text-lg lg:text-xl xl:text-2xl">
                Amos Matthew{" "}
              </h3>
              <p className="text-gray-400 font-deca font-normal mt-4 text-xs sm:text-sm md:text-md lg:text-lg ">
                Frontend Software Engineer
              </p>
            </div>
          </div>
          <CategoryCard />
          <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900 ">
            <p className="mt-6 mb-12 leading-10 font-normal">
              Amos Matthew is a seasoned frontend software engineer dedicated to
              crafting exceptional digital experiences. With a blend of
              technical expertise and creative flair, specialized in designing
              elegant and intuitive interfaces that leave a lasting impression.
              Leveraging proficiency in HTML, CSS, JavaScript, and frontend
              frameworks, pride is taken in delivering polished solutions
              tailored to your needs. Let's collaborate to create something
              remarkable for your audience.{" "}
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 pb-4">
              Love To Say Hello?
            </p>

            <p className="">
              While I may not be a widely recognized figure, i am readily
              available for connection on my social media platforms. <br />
              You can contact me on{" "}
              <span className="text-red-700 font-bold"></span>{" "}
              <a
                onClick={() =>
                  navigator.clipboard.writeText("thiswayamos@gmail.com")
                }
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                href="mailto:thiswayamos@gmail.com"
              >
                {" "}
                thiswayamos@gmail.com
              </a>{" "}
            </p>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              Arigato
            </span>
            {currentTheme === "dark" ? (
              <Image src={love_white} alt="love" width="30" className="-mt-4" />
            ) : (
              <Image src={love_black} alt="love" width="30" className="-mt-4" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
