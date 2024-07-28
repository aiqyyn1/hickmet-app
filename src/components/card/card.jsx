import { memo } from 'react';

const Card = memo(({ title, author, status, description }) => {
  return (
    <div className="bg-[#1E1E1E] text-white p-4 rounded-lg shadow-xl ">
      <div className="mb-2 md:mb-3 flex justify-between items-center">
        <h2 className="text-sm md:text-xl lg:text-2xl font-bold truncate">{title}</h2>
        <span className="bg-[#1A3E2D] px-1 md:px-2 py-1 rounded-md text-[12px] md:text-[14px] lg:text-[16px] text-[#26C77B]">
          {status}
        </span>
      </div>
      <p className="text-gray-400 text-sm md:text-base">{author}</p>
      <div className="bg-neutral-600 text-center rounded-lg p-2">{description}</div>

    </div>
  );
});

Card.displayName = 'Card';

export default Card;
