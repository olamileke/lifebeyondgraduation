import { TLink } from "../Link";

export type TButton = Omit<TLink, "href" | "hasIcon" | "size"> & {
  handleClick?: () => void;
};
