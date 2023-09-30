"use client";
import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import Link from "next/link";
import Image from "next/image";

const SendVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center gap-4 py-3 px-[24px] h-[72px] border-[0.5px] border-neutral-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black bg-neutral-2">
        <input
          type="text"
          placeholder="enter email of receiver"
          className="outline-none w-full placeholder:font-normal text-lg font-work_sans leading-[21.11px] bg-neutral-2 text-Primary"
        />
        <button
          onClick={openModal} // Open the modal when the button is clicked
          className="bg-[#605C84] py-[10px] px-[18px] rounded-lg font-mono font-medium text-base text-white"
        >
          Send
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="-mt-10 mb-[39px]">
          <Image
            src="/success-kite 1.svg"
            width={318}
            height={286}
            alt="success"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <p className="font-normal text-2xl font-work_sans leading-[28.15px] text-center block max-w-[348px] w-full pb-[99px]">
          Your video link has been sent to{" "}
          <span className="font-medium">johnmark@gmail.com</span>
        </p>
        <p className="block max-w-[370px] w-full font-work_sans font-normal leading-[21.11px] text-lg text-center pb-6">
          Would you need to view this video later? Save to your account now!
        </p>
        <button className="bg-[#120B48] font-work_sans font-medium text-base leading-[18.77px] py-4 px-8 rounded-lg text-[#F9F9FF]">
          Save Video
        </button>
        <p className="font-normal font-work_sans text-base leading-[20.16px] text-[#7e7e7e] pt-10 pb-[162px]">
          Dont have an account?{" "}
          <Link href="/signup" className="text-[#120B48] font-semibold">
            Create account
          </Link>
        </p>
      </Modal>
    </div>
  );
};

export default SendVideo;
