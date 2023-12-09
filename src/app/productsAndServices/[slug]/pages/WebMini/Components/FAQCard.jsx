/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function FAQCard({ title, content, open }) {
  const [isOpen, setIsOpen] = useState(open);
  const des = useRef();
  useEffect(() => {
    if (isOpen) {
      des.current?.classList.add("h-fit");
    }
  }, []);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    des.current?.classList.toggle("h-fit");
  };
  return (
    <div className="mt-5">
      <div
        className="flex justify-between cursor-pointer font-[600] text-[18px] leading-[28px]"
        onClick={handleOpen}
      >
        <span className={barlow.className}>{title}</span>
        {isOpen ? (
          <span className="select-none">-</span>
        ) : (
          <span className="select-none">+</span>
        )}
      </div>
      <p
        className="mt-7 h-0 overflow-hidden font-normal text-[14px] leading-[25px] text-justify"
        ref={des}
      >
        {content}
      </p>
    </div>
  );
}

export default FAQCard;
