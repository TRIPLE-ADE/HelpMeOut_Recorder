import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white md:pr-[51.5px] md:pl-[100px] px-5 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[14px] pt-[107px] pb-[75.92px]">
      <div className="flex flex-col gap-12 items-start max-w-[548px]">
        <div>
          <h1 className="font-sora text-5xl sm:text-[64px] leading-[64px] text-Secondary font-bold">
            Show Them Don’t Just Tell
          </h1>
          <p className="pt-5 font-sans text-xl font-normal text-black text-opacity-75">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
        </div>
        <button className="px-6 py-[22px] bg-Primary rounded-lg outline-0 text-white font-work_sans font-medium text-lg leading-[21.11px] flex gap-3 items-center justify-center">
          Install HelpMeOut
          <Image
            src="/arrow-right.svg"
            alt="Arrow"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
          />
        </button>
      </div>
      <img src="/hero-image.png" alt="Hero" width={727} height={594.08} />
    </section>
  );
};

export default Hero;
