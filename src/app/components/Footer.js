import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const footerData = [
    {
      title: 'Menu',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Converter', href: '/' },
        { text: 'How it Works', href: '#works' },
      ],
    },
    {
      title: 'About us',
      links: [
        { text: 'About', href: '/' },
        { text: 'Contact Us', href: '/' },
        { text: 'Privacy Policy', href: '/' },
      ],
    },
    {
      title: 'Screen Record',
      links: [
        { text: 'Browser Window', href: '/' },
        { text: 'Desktop', href: '/' },
        { text: 'Application', href: '/' },
      ],
    },
  ];

  return (
    <footer className="bg-Primary px-5 md:px-[130px] py-[98px] flex flex-col items-center md:flex-row md:items-start sm:gap-20 sm:justify-between w-full">
      <div>
        <Image
          src="/footer-logo.svg"
          width={157}
          height={60}
          alt="logo"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-10 text-center sm:text-left md:w-[67%] md:justify-between text-white pt-10 sm:pt-0">
       {footerData.map((section, index) => (
        <div key={index} className="flex flex-col gap-[26px]">
          <p className="font-semibold leading-[20.16px] font-sora">{section.title}</p>
          {section.links.map((link, linkIndex) => (
            <Link key={linkIndex} href={link.href} className="font-normal font-work_sans leading-[18.77px]">
              {link.text}
            </Link>
          ))}
        </div>
      ))}
      </div>
    </footer>
  );
};

export default Footer;
