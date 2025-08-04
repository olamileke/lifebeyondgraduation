import { ReactNode } from "react";

export type TLink = {
  children: ReactNode;
  href: string;
  size?: "sm" | "md";
  classes?: string;
  isActive?: boolean;
  hasIcon?: boolean;
};
