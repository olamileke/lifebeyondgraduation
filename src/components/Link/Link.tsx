import { FC } from "react";
import NextLink from "next/link";
import { TLink } from "./types";
import { IoMdArrowUp } from "react-icons/io";

export const Link: FC<TLink> = ({
  href,
  children,
  size = "md",
  classes = "",
  isActive = true,
  isExternal = false,
}) => {
  const activeVariantClasses = isActive
    ? "bg-russian-violet text-white"
    : "text-russian-violet border border-russian-violet font-medium";

  return (
    <NextLink
      href={href}
      className={`px-5 ${
        size === "sm" ? "py-3" : "py-5"
      } rounded-md ${activeVariantClasses} text-center ${classes}`}
    >
      {children}
      {isExternal && (
        <IoMdArrowUp className="inline ml-1 relative bottom-[1px] font-light rotate-45 text-xl" />
      )}
    </NextLink>
  );
};
