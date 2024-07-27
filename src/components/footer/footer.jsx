import React from "react";
import icon1 from "../../utils/icon1.svg";
import icon2 from "../../utils/icon2.svg";
import icon3 from "../../utils/icon3.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-md flex justify-around py-5 lg:py-4">
      <button>
        <Image src={icon3} />
      </button>
      <button>
        <Image src={icon2} />
      </button>
      <button>
        <Image src={icon1} />
      </button>
    </nav>
  );
};

export default Footer;
