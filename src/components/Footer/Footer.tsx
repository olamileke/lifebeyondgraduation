import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export const Footer = () => {
  return (
    <section className="bg-russian-violet text-white">
      <div className="mx-auto max-w-[1200px] py-22 flex justify-between">
        <p className="text-[15px]">
          LIFEBEYONDGRADUATION &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-end gap-6">
          <Link
            href="mailto:lifebeyondgraduation2025@gmail.com"
            target="_blank"
          >
            <HiMail className="text-[1.6rem] relative top-[4px]" />
          </Link>
          <Link href="/email" target="_blank">
            <AiFillLinkedin className="text-[1.4rem] relative top-[2px]" />
          </Link>
          <Link href="https://x.com/lb_graduation" target="_blank">
            <BsTwitterX className="text-[1.05rem]" />
          </Link>
          <Link
            href="https://www.instagram.com/life.beyondgraduation/"
            target="_blank"
          >
            <BsInstagram className="text-[1.14rem] relative top-[0.5px]" />
          </Link>
          <Link
            href="https://tiktok.com/@lifebeyondgraduation_"
            target="_blank"
          >
            <BsTiktok className="text-[1.13rem] relative top-[1.5px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
