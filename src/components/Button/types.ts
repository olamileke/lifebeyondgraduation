import { TLink } from "../Link";

export type TButton = Omit<TLink, "href" | "isExternal"> & {
  handleClick: () => void;
};
