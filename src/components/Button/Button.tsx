import { FC } from "react";
import { TButton } from "./types";

export const Button: FC<TButton> = ({
  children,
  classes = "",
  handleClick,
  isActive = true,
}) => {
  const activeVariantClasses = isActive
    ? "bg-russian-violet text-white"
    : "text-russian-violet border border-russian-violet font-medium transition-colors duration-1000 hover:bg-russian-violet hover:text-white";

  return (
    <button
      onClick={handleClick}
      className={`p-5 rounded-md cursor-pointer ${activeVariantClasses} text-center ${classes}`}
    >
      {children}
    </button>
  );
};
