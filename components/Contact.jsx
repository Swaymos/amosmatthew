import { TfiGithub, TfiTwitterAlt } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className="h-max xl:px-12 lg:h-[22rem] p-6 sm:p-8 md:px-10 pt-10 md:pt-40 lg:pt-10 bg-gradient-to-tr dark:from-[#f6ebeb20] dark:to-[#fff8ec20] from-[#f6ebeb90] to-[#fff8ec60] flex flex-col lg:flex-row mx-auto rounded-3xl shadow-md drop-shadow-2xl backdrop-blur-xl items-center justify-center lg:justify-between ">
      <div className="order-2 sm:w-[75%] lg:w-[80%] lg:basis-[80%] flex flex-col space-y-6 cirGradient bg-clip-text">
        <h2 className=" tracking-normal bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 dark:text-[#e9eff1] bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold font-deca selection:text-gray-700 dark:selection:text-white/90 ">
          Get in touch{" "}
        </h2>
        <p className="text-sm md:text-md font-normal lg:text-lg xl:text-xl ">
          If you have any queries or would like to discuss potential
          opportunities, please don&apos;t hesitate to reach out to me using
          given links.
        </p>
        <div className="grid grid-cols-2 text-[0.7rem] md:text-[0.85rem] lg:text-base gap-2 md:gap-3 lg:gap-4">
          <a
            href="https://twitter.com/swayreactcoder"
            target="_blank"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
            <TfiTwitterAlt className="text-[#518FC7] dark:text-[#2498fe] h-3 w-3 md:h-4 md:w-4 " />
            <h5 className="text-transparent dark:text-[#2498fe]">
              Amos Matthew
            </h5>
          </a>
          <a
            href="https://github.com/Swaymos/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
            <TfiGithub className="text-[#CA6298] dark:text-[#ff339c] h-3 w-3 md:h-4 md:w-4 " />
            <h5 className="text-transparent dark:text-[#ff339c]">
              Amos Matthew
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
