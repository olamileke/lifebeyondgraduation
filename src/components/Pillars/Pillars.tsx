import { IoIosStar, IoMdArrowBack, IoMdArrowUp } from "react-icons/io";
import { Pillar } from "../Pillar";
import { pillars } from "./data";
import { BsStars } from "react-icons/bs";

export const Pillars = () => {
  const renderPillars = () =>
    pillars.map((pillar, index) => <Pillar {...pillar} key={index} />);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] grid grid-cols-12">
        <div className="col-span-4 relative">
          <div className="absolute top-0 left-0 flex item-start gap-4">
            <BsStars className="block text-7xl relative bottom-3 text-[#FFD700]" />
            <p className="text-lg font-light">
              Transformation which starts from the inside out. We are the
              innovation that your brand needs. Transformation which starts from
              the inside out. We are the innovation that your brand needs.
            </p>
          </div>
          <div className="absolute bottom-4 left-0 flex gap-4">
            <span className="size-16 flex justify-center items-center cursor-pointer block bg-primary">
              <IoMdArrowBack className="text-white text-4xl -rotate-45" />
            </span>
            <span className="size-16 flex justify-center items-center cursor-pointer block bg-[#392759]">
              <IoMdArrowUp className="text-white text-4xl rotate-45" />
            </span>
          </div>
        </div>
        <div className="col-span-1" />
        <div className="col-span-7 overflow-x-scroll flex gap-4 pillars px-1">
          {renderPillars()}
        </div>
      </div>
    </section>
  );
};
