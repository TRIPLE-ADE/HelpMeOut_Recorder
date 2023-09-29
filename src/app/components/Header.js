import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-[100px] py-3 fixed w-full bg-white">
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
      <div className="py-[10px] pl-5 pr-[21px] flex items-center justify-center gap-[39px] font-medium font-work_sans leading-[18.77px] text-black">
        <Link href="#features">Features</Link>
        <Link href="#works">How It Works</Link>
      </div>
      <Link href="/" className="py-3 px-[10px] text-Primary font-semibold text-lg leading-[22.68px] font-sora">Get Started</Link>
     </nav>
    </header>
  );
};

export default Header;
