import { FC } from "react";
import { useFormStatus } from "react-dom";
import { TButton } from "./types";

export const Button: FC<TButton> = ({
  children,
  classes = "",
  handleClick: handleClickFunc,
  isActive = true,
  ...props
}) => {
  const { pending } = useFormStatus();

  const activeVariantClasses = isActive
    ? "bg-russian-violet text-white"
    : "text-russian-violet border border-russian-violet font-medium transition-colors duration-500 hover:bg-russian-violet hover:text-white";

  const handleClick = () => {
    if (pending) return;

    handleClickFunc?.();
  };

  return (
    <div className="relative w-full">
      <button
        {...props}
        onClick={handleClick}
        className={`px-5 rounded-md cursor-pointer text-[18px] md:text-base ${activeVariantClasses} text-center ${classes}`}
      >
        {children}
        {pending && (
          <span
            className={`ml-2 size-4 block animate-spin border-3 border-white/30 border-t-white rounded-full relative top-[2px] md:top-[3.4px] lg:top-[2.8px] inline-flex transition-opacity duration-500`}
          />
        )}
      </button>
      {pending && (
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
};
