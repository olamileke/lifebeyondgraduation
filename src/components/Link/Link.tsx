import { FC } from "react";
import NextLink from "next/link";
import { TLink } from "./types";
import { IoMdArrowUp } from "react-icons/io";

export const Link: FC<TLink> = ({
  href,
  children,
  classes = "",
  hasIcon = false,
}) => {
  return (
    <NextLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-5 bg-russian-violet text-[17px] sm:text-[18px] md:text-base text-white group duration-1000 transition-opacity opacity-100 hover:opacity-90 rounded text-center ${classes}`}
    >
      {children}
      {hasIcon && (
        <IoMdArrowUp className="inline ml-1 relative bottom-[1px] font-light text-xl transition-transform duration-1000 translate-x-0 translate-y-0 rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[1px]" />
      )}
    </NextLink>
  );
};
