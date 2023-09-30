import { UserHeader } from "../../components/Header";
import Image from "next/image";
import { buttonData } from "@/app/constants";

export default function Home() {
  return (
    <>
      <UserHeader />
      <main>
        <section className="md:px-[100px] px-6">
          <p className="text-lg leading-[21px] font-work_sans font-normal text-Primary  opacity-[70%]">
            Home
          </p>
          <div className="flex items-center gap-6 py-2 mb-6">
            <p className="font-sora font-semibold text-2xl leading-[30px] text-Primary">
              How To Create A Facebook Ad Listing{" "}
            </p>
            <Image src="/edit.svg" width="24" height="24" />
          </div>
          <div className="px-4 pb-6 pt-4 border border-color-[#b6b3c6] rounded-2xl border-[60%] mb-10">
            <img
              src="/video frame.png"
              alt="logo"
              className="w-full md:h-[458px] object-cover rounded-xl"
            />
          </div>
          <div>
            <div className="flex  flex-col md:flex-row md:gap-[90px] justify-between">
              <div className="sm:max-w-[550px] sm:w-[550px] flex items-center gap-4 py-[14px] px-[24px] h-[72px] border-[0.5px] border-neutral-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black bg-neutral-2 mb-[43px]">
                <input
                  type="text"
                  placeholder="enter email of receiver"
                  className="outline-none w-full placeholder:font-normal text-lg font-work_sans leading-[21.11px] bg-neutral-2 text-Primary"
                />
                <button className="bg-[#605C84] py-[10px] px-[18px] rounded-lg font-mono font-medium text-base text-white">
                  Send
                </button>
              </div>
              <div className="sm:max-w-[600px] sm:w-[600px] flex items-center gap-4  py-[14px] px-3 h-[72px] border-[0.5px] border-[#929292] rounded-xl focus:outline-none focus:ring-2 focus:ring-black bg-[#fafafa] mb-[43px]">
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
              <p className="mb-4 text-xl leading-[23.46px] font-work_sans font-medium">
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
            <div className="mt-16">
              <p className="mb-4 text-xl leading-[23.46px] font-work_sans font-medium">
                Transcript
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
