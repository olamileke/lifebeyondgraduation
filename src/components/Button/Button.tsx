import { FC } from "react";
import { useFormStatus } from "react-dom";
import { TButton } from "./types";

export const Button: FC<TButton> = ({
  children,
  classes = "",
  handleClick,
  isActive = true,
  ...props
}) => {
  const { pending } = useFormStatus();

  const activeVariantClasses = isActive
    ? "bg-russian-violet text-white"
    : "text-russian-violet border border-russian-violet font-medium transition-colors duration-1000 hover:bg-russian-violet hover:text-white";

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`p-5 rounded-md cursor-pointer text-[18px] md:text-base ${activeVariantClasses} text-center ${classes}`}
    >
      {children}
      <span
        className={`ml-2 size-5 block animate-spin border-3 border-white/30 border-t-white rounded-full relative top-1 inline-flex transition-opacity duration-500 ${pending ? "opacity-100 z-10" : "opacity-0 -z-10"}`}
      />
    </button>
  );
};
