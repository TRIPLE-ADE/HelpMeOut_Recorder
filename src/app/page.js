import { Header, Hero, Features, HowItWorks, Footer} from "./components";


export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F4F6F8] pt-[87px]">
        <Hero />
        <Features />
        <HowItWorks />
        <Footer />
      </main>
    </>
  );
}
