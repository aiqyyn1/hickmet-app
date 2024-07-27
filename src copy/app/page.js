import { redirect } from "next/navigation";
import logo from "../utils/bacground.png";

export default function Home() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center">
      <header className="w-full py-4 px-[40px] flex justify-between items-center bg-white shadow-md lg:py-5 lg:px-[80px]">
        <h1 className="text-xl font-bold">Hadjaid</h1>
        <button className="text-2xl">&#9776;</button>
      </header>
      <main className="h-[100vh] bg-[url('../utils/bacground.png')] pt-[80px] lg:pt-[160px] bg-cover 100% w-full">
        <div className="px-[40px] lg:px-[80px]">
          <div className="w-full h-full flex flex-col bg-opacity-50">
            <div className="w-[300px] lg:w-[600px]">
              <h2 className="text-[36px] font-bold text-black leading-[45px] lg:text-[48px] lg:leading-[50px]">
                Создайте карточку и получите помощь!
              </h2>
            </div>
            <p className="text-black  mt-4 max-w-md opacity-70 mb-[20px] lg:text-[18px]">
              Поломник может легко создать карточку с описанием своей ситуации,
              и наш волонтер оперативно ответит и окажет необходимую помощь.
            </p>
            <button className="mt-6 bg-[#434141] text-white py-2 px-4 rounded-xl lg:w-[530px]">
              Создать
            </button>
          </div>
        </div>
      </main>
      <nav className="fixed bottom-0 w-full bg-white shadow-md flex justify-around py-3 lg:py-4">
        <button className="text-2xl">&#8962;</button>{" "}
        <button className="text-2xl">&#128101;</button>{" "}
        <button className="text-2xl">&#128100;</button>
      </nav>
    </div>
  );
}
