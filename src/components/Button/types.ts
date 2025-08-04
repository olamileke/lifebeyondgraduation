import { TLink } from "../Link";

export type TButton = Omit<TLink, "href" | "hasIcon"> & {
  handleClick: () => void;
};
