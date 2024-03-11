import Head from "next/head";
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
      </main>
    </div>
  );
}
