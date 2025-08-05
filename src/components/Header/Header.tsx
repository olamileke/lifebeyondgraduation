import NextLink from "next/link";
import { Link } from "../Link";

export const Header = () => (
  <header className="absolute top-0 left-0 w-full">
    <div className="flex justify-between items-center mx-auto py-5 max-w-[1200px]">
      <div className="flex items-center">
        <p className="text-xl mr-24">LBG</p>

        <div className="flex gap-13 text-[15px] font-light">
          <a href="/#home" className="font-medium">
            Home
          </a>
          <a href="/#community">Community</a>
          <NextLink href="/#about">About</NextLink>
        </div>
      </div>

      <Link href={"/blog"} size="sm">
        Blog
      </Link>
    </div>
  </header>
);
