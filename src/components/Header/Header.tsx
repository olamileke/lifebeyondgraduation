import NextLink from "next/link";
import { Link } from "../Link";

export const Header = () => (
  <header className="invisible sm:visible absolute top-0 left-0 w-full">
    <div className="mx-auto w-[90%] max-w-[1200px] flex justify-between items-center mx-auto py-5 max-w-[1200px]">
      <div className="flex items-center">
        <p className="text-xl mr-24">LBG</p>

        <div className="flex gap-13 text-[15px] font-light">
          <NextLink href="/#home" className="font-medium">
            Home
          </NextLink>
          <NextLink href="/#community">Community</NextLink>
          <NextLink href="/#about">About</NextLink>
        </div>
      </div>

      <Link href={"/blog"} classes="!py-3">
        Blog
      </Link>
    </div>
  </header>
);
