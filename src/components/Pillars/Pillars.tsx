import { useState } from "react";
import { IoMdArrowBack, IoMdArrowUp } from "react-icons/io";
import { Pillar } from "../Pillar";
import { pillars } from "./data";
import { BsStars } from "react-icons/bs";

export const Pillars = () => {
  const [scrollStatus, setScrollStatus] = useState<
    "beginning" | "middle" | "end"
  >("beginning");
  const renderPillars = () =>
    pillars.map((pillar, index) => <Pillar {...pillar} key={index} />);

  const handleScrollPillars = (direction: "left" | "right") => {
    const pillars = document.getElementsByClassName("pillars")[0];

    if (direction === "left") pillars.scrollLeft -= 200;
    else pillars.scrollLeft += 200;

    if (Math.floor(pillars.scrollLeft) === 0) setScrollStatus("beginning");
    else if (
      Math.ceil(pillars.clientWidth + pillars.scrollLeft) ===
      pillars.scrollWidth
    )
      setScrollStatus("end");
    else if (pillars.scrollLeft > 0) setScrollStatus("middle");
  };

  return (
    <section className="pt-12 pb-16 md:py-24" id="#community">
      <div className="mx-auto w-[85%] w-[90%] max-w-[1200px] grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 order-2 md:order-none relative flex flex-col-reverse items-center md:block">
          <div className="md:absolute top-0 left-0 flex item-start gap-4">
            <BsStars className="hidden md:block text-7xl relative bottom-3 text-[#FFD700]" />
            <p className="text-center md:text-left text-lg sm:text-xl md:text-lg text-[rgba(0,0,0,0.9)] sm:text-[rgba(0,0,0,0.8)] md:text-black font-light">
              Our community is built on four powerful pillars that shape
              well-rounded, future-ready graduates. Together, they create a
              space where young professionals grow, connect, and boldly take on
              what’s next.
            </p>
          </div>
          <div className="md:absolute bottom-4 left-0 flex mb-5 md:mb-0 gap-5 md:gap-4">
            <span
              className={`size-16 group flex justify-center items-center cursor-pointer transition transition-colors delay-200 block ${
                scrollStatus === "beginning"
                  ? "bg-slate-blue"
                  : "bg-russian-violet"
              }`}
              onClick={() => {
                handleScrollPillars("left");
              }}
            >
              <IoMdArrowBack className="text-white text-4xl transition transition-transform duration-700 md:-rotate-45 md:group-hover:-rotate-0" />
            </span>
            <span
              className={`size-16 group flex justify-center items-center cursor-pointer transition transition-colors delay-200 block ${
                scrollStatus === "end" ? "bg-slate-blue" : "bg-russian-violet"
              }`}
              onClick={() => {
                handleScrollPillars("right");
              }}
            >
              <IoMdArrowUp className="text-white text-4xl transition transition-transform duration-700 rotate-90 md:rotate-45 md:group-hover:rotate-90" />
            </span>
          </div>
        </div>
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-7 mb-10 md:mb-0 order-1 md:order-none overflow-x-scroll !scroll-smooth flex gap-6 md:gap-4 pillars px-1">
          {renderPillars()}
        </div>
      </div>
    </section>
  );
};
