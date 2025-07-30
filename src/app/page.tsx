import { FaArrowUp } from "react-icons/fa";
import { IoMdArrowUp } from "react-icons/io";
// import { IoRocketSharp } from "react-icons/io5";

export default function IndexPage() {
  return (
    <div className="relative w-screen h-screen bg-primary text-black">
      <header className="absolute top-0 left-0 w-full">
        <div className="flex justify-between items-center mx-auto py-5 max-w-[1200px]">
          <div className="flex items-center">
            <p className="text-xl mr-24">LBG</p>

            <div className="flex gap-10 text-[15px] font-light">
              <a className="font-medium">Home</a>
              <a>About</a>
              <a>Join</a>
              <a>Contact</a>
            </div>
          </div>

          <a className="text-[15px] text-white font-light py-3 px-5 rounded-md bg-[#392759]">
            Blog{" "}
          </a>
        </div>
      </header>
      <section className="grid grid-cols-12 mx-auto max-w-[1200px] h-full py-[103px] py-5 px-10">
        <div className="col-span-5 flex flex-col justify-center relative -bottom-[-3vh]">
          <p className="text-6xl/20 mb-5">
            From Campus Life to Real-Life Readiness!
          </p>
          <p className="text-xl/8 font-light mb-8">
            You’ve got the degree—now get the skills. From job interviews to
            budgeting and beyond, we help you thrive where school left off.
          </p>
          <a className="p-5 rounded-md bg-[#392759] text-white text-center">
            Join the Community
            <IoMdArrowUp className="inline ml-1 relative bottom-[1px] font-light rotate-45 text-xl" />
          </a>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-6">
          <img
            src="https://res.cloudinary.com/olamileke/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1753889065/lifebeyondgraduation/andres-c7hAijhBe4Y-unsplash_fsgxtl.jpg"
            className="h-full rounded-md object-cover"
          />
        </div>
      </section>
    </div>
  );
}
