import Link from "next/link";
import HorizontalCarousel from "./components/HorizontalCarouse";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-10 px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex gap-2 text-5xl justify-center items-center md:flex-row flex-col-reverse">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent">Get Me Chai</span>
          <span><img src="/tea.gif" alt="" className="bg-blend-luminosity w-[100px] md: md:mb-[30px] mb-[20px]" /></span>
        </div>
        <p className="px-5 text-wrap text-center text-lg">A Crowdfunding platform for creators to fund their projects.</p>
        <p className="px-5 text-wrap text-center text-lg">A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.</p>
        <div>
          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here
            </button></Link>
          <Link href="/about"><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link></div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-4">
        <h1 className="text-3xl font-bold text-center my-14">Your Fans can buy a Chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img src="/man.gif" className="bg-slate-400 rounded-[30px] p-2 text-black" width={88} alt="man" />
            <p className="font-bold text-center">Support your Creator</p>
            <p className="text-center">Support your Creator by engaging with their content, sharing it, and providing feedback to encourage growth</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img src="/dollar.gif" className="bg-slate-400 rounded-[30px] p-2 text-black" width={88} alt="dollar" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Fund Yourself: Empower your financial independence by investing wisely and taking control of your future.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img src="/group.gif" className="bg-slate-400 rounded-[30px] p-2 text-black" width={88} alt="group" />
            <p className="font-bold text-center">Fans want to help</p>
            <div className="text-center">Fans eagerly step up to support, showing their dedication and passion for their favorite individual or team.</div>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center my-14 px-2">Helps your favourite to grow</h1>
        <HorizontalCarousel />
      </div>
    </div>
  );
}
