import { FC, useState, useEffect } from "react";
import { TImage } from "./types";

export const Image: FC<TImage> = ({ src, classes = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = document.createElement("img");
    img.setAttribute("src", src);

    setTimeout(() => {
      img.onload = () => {
        setIsLoaded(true);
        console.log("abcdefh");
      };
    }, 3000);
  }, []);

  return (
    <div className="relative">
      <img
        src={isLoaded ? src : "https://placehold.co/600x400"}
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute left-0 top-0 w-full h-full animate-pulse ${isLoaded ? `bg-[rgba(0,0,0,0.4)]` : `bg-[rgba(0,0,0,0.2)]`} z-10`}
      />
    </div>
  );
};
