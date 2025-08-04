import { IoMdArrowUp } from "react-icons/io";
import { Link } from "../Link";

export const Hero = () => (
  <section className="grid grid-cols-12 mx-auto max-w-[1200px] h-full py-[103px] py-5 px-10">
    <div className="col-span-5 flex flex-col justify-center relative -bottom-[-3vh]">
      <p className="text-6xl/20 mb-5">
        From Campus Life to Real-Life Readiness!
      </p>
      <p className="text-xl/8 font-light mb-8">
        You’ve got the degree—now get the skills. From job interviews to
        budgeting and beyond, we help you thrive where school left off.
      </p>
      <Link href={"/community"} hasIcon={true}>
        Join the Community
      </Link>
    </div>
    <div className="col-span-1"></div>
    <div className="col-span-6">
      <img
        src="https://res.cloudinary.com/olamileke/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1753889065/lifebeyondgraduation/andres-c7hAijhBe4Y-unsplash_fsgxtl.jpg"
        className="h-full rounded-md object-cover"
      />
    </div>
  </section>
);
