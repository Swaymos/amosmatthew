const CategoryCard = () => {
  return (
    <div className="flex select-none w-full justify-center text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-semibold   mx-auto mt-6 mb-8 ">
      <div className=" m-2 bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#cf3903]">
        Develop
      </div>
      <div className=" m-2 bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#097360]">
        Design
      </div>
      <div className=" m-2 bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#4e0aa2]">
        Anime
      </div>
      <div className=" m-2 bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#690c58]">
        Psychology
      </div>
      <div className=" m-2 bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#690c58]">
        Lifestyle
      </div>
      <div className=" m-2 bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#690c58]">
        Charity
      </div>
    </div>
  );
};

export default CategoryCard;
