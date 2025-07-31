import { FC } from "react";
import { TPillar } from "./types";

export const Pillar: FC<TPillar> = ({
  imageUrl,
  heading,
  description,
  isActive,
}) => {
  return (
    <div className="w-[300px] h-full shrink-0">
      <div className="relative h-3/5">
        <img src={imageUrl} className="w-full h-full object-cover" />
        <div className="absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-10" />
      </div>
      <div
        className={`py-8 px-6 shadow ${
          isActive
            ? "bg-russian-violet text-white"
            : "bg-white text-russian-violet"
        }`}
      >
        <p className="text-2xl font-medium mb-4">{heading}</p>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
};
