import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export const Footer = () => {
  return (
    <section className="bg-russian-violet text-white">
      <div className="mx-auto max-w-[1200px] py-22 flex justify-between">
        <p>LIFEBEYONDGRADUATION &copy; {new Date().getFullYear()}</p>

        <div className="flex text-xl gap-6">
          <Link href="/email" target="_blank">
            <HiMail className="text-2xl relative bottom-[3px]" />
          </Link>
          <Link href="/email" target="_blank">
            <BsTwitter />
          </Link>
          <Link href="/email" target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link href="/email" target="_blank">
            <BsInstagram className="text-lg relative top-[1.5px]" />
          </Link>
          <Link href="/email" target="_blank">
            <BsTiktok className="text-lg relative top-[1.5px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
