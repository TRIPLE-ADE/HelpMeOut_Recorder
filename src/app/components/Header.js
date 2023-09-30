"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  // toggle state handler
  const [toggle, setToggle] = useState(false);

  //function for changing toggle state
  const handleModal = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className="px-5 md:px-[100px] py-3 fixed w-full bg-white">
      <nav className="flex justify-between items-center">
        <Link href="#hero" className="p-[10px]">
          <Image
            src="/logo.svg"
            alt="logo"
            width={180}
            height={37}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <div className="py-[10px] pl-5 pr-[21px] hidden sm:flex items-center justify-center gap-[39px] font-medium font-work_sans leading-[18.77px] text-black">
          <Link href="#features">Features</Link>
          <Link href="#works">How It Works</Link>
        </div>
        <Link
          href="/"
          className="py-3 px-[10px] hidden sm:block text-Primary font-semibold text-lg leading-[22.68px] font-sora"
        >
          Get Started
        </Link>
        {/* rendering Bar Icon with toggle condition */}
        {!toggle && (
          <FaBars
            className="text-2xl cursor-pointer sm:hidden"
            onClick={handleModal}
          />
        )}
        {/* rendering Times Icon with toggle condition */}
        {toggle && (
          <FaTimes
            className="text-2xl cursor-pointer sm:hidden"
            onClick={handleModal}
          />
        )}

        {/* mobile navbar with toggle condition*/}
        {toggle && (
          <div className="fixed left-0 sm:hidden z-20 w-full min-h-full text-2xl font-bold text-center bg-white font-quicksand top-20 sidebar">
            <ul className=" font-medium font-work_sans leading-[18.77px] text-black flex flex-col justify-center items-center gap-20 min-h-[80vh]">
              <Link href="#features" onClick={handleModal}>Features</Link>
              <Link href="#works" onClick={handleModal}>How It Works</Link>
              <Link
                href="/"
                className="text-Primary font-semibold text-lg leading-[22.68px] font-sora"
                onClick={handleModal}
              >
                Get Started
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
