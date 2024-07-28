"use client";
import { useState } from "react";
import Modal from "../create_card_modal/create_card_modal";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  return (
    <div className=" bg-gray-100 flex flex-col items-center">
      <main className="h-[100vh] bg-[url('../utils/bacground.png')] pt-[80px] lg:pt-[160px] bg-cover 100% w-full flex">
        <div className="px-[40px] md:px-[120px] lg:px-[120px]">
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
            <button
              className="mt-6 bg-[#434141] text-white py-2 px-4 rounded-xl lg:w-[530px]"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Создать
            </button>
          </div>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </main>
    </div>
  );
}
