import { ButtonHTMLAttributes } from "react";
import { TLink } from "../Link";

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<TLink, "href" | "hasIcon" | "size"> & {
    isActive?: boolean;
    handleClick?: () => void;
  };
