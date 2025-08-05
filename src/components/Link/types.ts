import { ReactNode } from "react";

export type TLink = {
  children: ReactNode;
  href: string;
  classes?: string;
  hasIcon?: boolean;
};
