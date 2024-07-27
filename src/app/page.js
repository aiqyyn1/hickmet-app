"use client";
import { redirect } from "next/navigation";
import logo from "../utils/bacground.png";
import icon from "../utils/logo-landing.svg";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useState } from "react";

export default function Home() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center">
      <Header />
      <main className="h-[100vh] bg-[url('../utils/bacground.png')] pt-[80px] lg:pt-[160px] bg-cover 100% w-full flex">
        <div className="px-[40px] lg:px-[120px]">
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
      <Footer />
    </div>
  );
}
