/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import aizen from "../../public/work/kamui1.png";

export default function ArtisticEdge() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Artistic Edge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca dark:text-[#e9eff1] text-sky-950 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              Artisitc Edge
            </h1>
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
                href="https://github.com/Swaymos/artisticedge/"
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
              A minimalistic Figma clone to show how to add real-world features
              like live collaboration with cursor chat, comments, reactions, and
              drawing designs (shapes, image upload) on the canvas using
              fabric.js.
            </div>
          </div>

          <h2 className="font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            ⚙️ Technologies Used In Building Social Sphere
          </h2>

          <ul className="list-disc pt-3">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Liveblocks</li>
            <li>Fabric.js</li>
            <li>Shadcn</li>
            <li>Tailwind CSS</li>
          </ul>
          <h2 className="my-4 font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            🔋 Features
          </h2>

          <div className="feature-list">
            <p>
              👉 <strong>Multi Cursors, Cursor Chat, and Reactions</strong>:
              Allows multiple users to collaborate simultaneously by showing
              individual cursors, enabling real-time chat, and reactions for
              interactive communication.
            </p>
            <p>
              👉 <strong>Active Users</strong>: Displays a list of currently
              active users in the collaborative environment, providing
              visibility into who is currently engaged.
            </p>
            <p>
              👉 <strong>Comment Bubbles</strong>: Enables users to attach
              comments to specific elements on the canvas, fostering
              communication and feedback on design components.
            </p>
            <p>
              👉 <strong>Creating Different Shapes</strong>: Provides tools for
              users to generate a variety of shapes on the canvas, allowing for
              diverse design elements
            </p>
            <p>
              👉 <strong>Uploading Images</strong>: Import images onto the
              canvas, expanding the range of visual content in the design
            </p>
            <p>
              👉 <strong>Customization</strong>: Allows users to adjust the
              properties of design elements, offering flexibility in customizing
              and fine-tuning visual components
            </p>
            <p>
              👉 <strong>Freeform Drawing</strong>: Enables users to draw freely
              on the canvas, promoting artistic expression and creative design.
            </p>
            <p>
              👉 <strong>Undo/Redo</strong>: Provides the ability to reverse
              (undo) or restore (redo) previous actions, offering flexibility in
              design decision-making
            </p>
            <p>
              👉 <strong>Keyboard Actions</strong>: Allows users to utilize
              keyboard shortcuts for various actions, including copying,
              pasting, deleting, and triggering shortcuts for features like
              opening cursor chat, reactions, and more, enhancing efficiency and
              accessibility.
            </p>
            <p>
              👉 <strong>History</strong>: Review the chronological history of
              actions and changes made on the canvas, aiding in project
              management and version control.
            </p>
            <p>
              👉{" "}
              <strong>
                Deleting, Scaling, Moving, Clearing, Exporting Canvas
              </strong>
              : Offers a range of functions for managing design elements,
              including deletion, scaling, moving, clearing the canvas, and
              exporting the final design for external use.
            </p>
            <p>
              and many more, including code architecture, advanced react hooks,
              and reusability
            </p>
          </div>

          <h2 className="my-4 font-semibold text-[1.5rem] mt-5 text-gray-700 dark:text-white">
            🔋 Would You Love To View Artistic Edge?
          </h2>

          <p>Follow the link to view the live project. Thanks for watching.</p>
        </div>
      </main>
    </div>
  );
}
