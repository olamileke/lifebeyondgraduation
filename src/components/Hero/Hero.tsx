import { Link } from "../Link";

export const Hero = () => (
  <section className="grid grid-cols-12 mx-auto w-[85%] sm:w-[90%] max-w-[1200px] h-full pt-[103px] pb-[75px] md:py-[103px] lg:px-10">
    <div className="col-span-12 lg:col-span-5 flex flex-col justify-center relative -bottom-[0.65vh] lg:-bottom-[-3vh]">
      <p className="text-3xl sm:text-4xl/12 md:text-5xl/16 md:text-6xl/20 mb-5">
        From Campus Life to Real-Life Readiness!
      </p>
      <p className="text-lg sm:text-xl/8 font-light mb-8">
        About to get the degree — don't forget the skills. From job interviews
        to budgeting and beyond, we help you thrive where school left off.
      </p>
      <Link href={"/community"} hasIcon={true} classes="py-3 sm:py-5">
        Join the Community
      </Link>
    </div>
    <div className="col-span-0 lg:col-span-1"></div>
    <div className="col-span-0 lg:col-span-6">
      <img
        src="https://res.cloudinary.com/olamileke/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1753889065/lifebeyondgraduation/andres-c7hAijhBe4Y-unsplash_fsgxtl.jpg"
        className="hidden lg:inline-block h-full rounded-md object-cover"
      />
    </div>
  </section>
);
