const Card = ({ title, author, status }) => {
  return (
    <div className="bg-[#1E1E1E] text-white p-6 rounded-[15px] shadow-md w-[400px]">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-xl font-bold max-w-[200px]">{title}</h2>
        <span className="bg-[#1A3E2D] px-2 py-1 rounded-md text-[14px] text-[#26C77B]">
          {status}
        </span>
      </div>
      <p className="text-gray-500">{author}</p>
      <div className="mt-4 bg-[#FFFFFF] p-4 rounded-lg opacity-15 w-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita
        necessitatibus voluptate quis provident sunt molestias tempore voluptas
        voluptates explicabo!
      </div>
    </div>
  );
};

export default Card;
