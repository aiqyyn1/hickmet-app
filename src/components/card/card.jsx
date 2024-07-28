import { memo } from "react";

const Card = memo(({ title, author, status }) => {
  return (
    <div className="bg-[#1E1E1E] text-white p-4 rounded-lg shadow-xl ">
      <div className="mb-2 md:mb-3 flex justify-between items-center">
        <h2 className="text-sm md:text-xl lg:text-2xl font-bold truncate">
          {title}
        </h2>
        <span className="bg-[#1A3E2D] px-1 md:px-2 py-1 rounded-md text-[12px] md:text-[14px] lg:text-[16px] text-[#26C77B]">
          {status}
        </span>
      </div>
      <p className="text-gray-400 text-sm md:text-base">{author}</p>
      <div className="mt-2 md:mt-4 bg-white p-3 md:p-4  rounded-lg opacity-20 w-full text-black text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita
        necessitatibus voluptate quis provident sunt molestias tempore voluptas
        voluptates explicabo!
      </div>
    </div>
  );
});

Card.displayName = "Card";

export default Card;
