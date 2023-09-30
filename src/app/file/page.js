import { Footer, Header } from "../components";
import Image from "next/image";
import { buttonData } from "../constants";
import Link from "next/link";
import SendVideo from "../components/SendVideo";

const page = () => {
  return (
    <>
      <Header />
      <main className="pt-[123px]">
        <section className="md:px-[100px] px-6 flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col gap-16 md:max-w-[550px] md:w-[550px]">
            <div>
              <h1 className="font-bold text-[45px] font-sora leading-[56.7px] mb-10">
                Your video is ready!
              </h1>
              <p className="text-base leading-[20px] font-sora font-medium text-[#727272] mb-[9px]">
                Name
              </p>
              <div className="flex items-center gap-6">
                <p className="font-sora font-semibold text-2xl leading-[30px] text-Primary">
                  Untitled_Video_20232509{" "}
                </p>
                <Image src="/edit.svg" width="24" height="24" />
              </div>
            </div>
            <SendVideo />
            <div>
              <p className="font-sora font-semibold text-xl leading-[25.2px] text-Primary mb-4">
                Video Url
              </p>
              <div className="flex items-center gap-4  py-3 px-3 h-[72px] border-[0.5px] border-[#929292] rounded-xl focus:outline-none focus:ring-2 focus:ring-black bg-[#fafafa]">
                <input
                  type="text"
                  value="https://www.helpmeout/Untitled_Video_20232509"
                  readOnly
                  className="outline-none w-full font-work_sans text-base font-normal leading-[25.8px] text-[#4B4B4B] bg-[#fafafa]"
                />
                <button className="flex items-center justify-center gap-2 bg-[#fafafa] py-[10px] px-[18px] w-[137px] h-[44px] rounded-lg font-sans font-medium text-base text-[#120B48] border border-[#120B48]">
                  <Image src="/copy.svg" width="20" height="20" />
                  CopyURL
                </button>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xl leading-[20.16px] font-sora font-semibold">
                Share your Video
              </p>
              <div className="flex gap-4 items-center mb-16">
                {buttonData.map((button, index) => (
                  <button
                    key={index}
                    className="flex gap-2 items-center justify-center py-3 px-4 text-[#0a0628] border border-[#0a0628] rounded-md w-[133px] h-12 font-sans font-medium text-base"
                  >
                    <Image
                      src={button.iconSrc}
                      alt={button.text}
                      width={button.width}
                      height={button.height}
                    />
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="md:max-w-[575px] border-l border-l-[#CFCFCF] pl-10">
              <div className="mb-20">
              <img
                src="/video frame.png"
                alt="logo"
                className="w-full md:h-[473px] object-cover rounded-xl"
              />
              </div>
            <div>
                <p className="font-sora font-semibold text-2xl leading-[30.24px] text-black">Transcript</p>
            </div>
          </div>
        </section>
        <section className="my-16 py-12 px-6 md:px-0 bg-[#f9f9f9] flex flex-col items-center gap-10">
          <p className="block max-w-[653px] font-sora font-semibold leading-[30.24px] text-2xl text-center">
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </p>
          <button className="bg-[#120B48] font-work_sans font-medium text-base leading-[18.77px] py-4 px-8 rounded-lg text-[#F9F9FF]">
            Save Video
          </button>
          <p className="font-semibold font-sora text-2xl leading-[30.24px] text-[#7e7e7e]">
            Dont have an account?{" "}
            <Link href="/signup" className="text-[#120B48] underline">
              Create account
            </Link>
          </p>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default page;
