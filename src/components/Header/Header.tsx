import NextLink from "next/link";
import { useState, useEffect } from "react";
import { Link } from "../Link";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      setActiveSection("home");
      return;
    }

    setActiveSection(hash.slice(1));
  }, []);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setShowMobileSidebar(false);
    window.document.body.style.overflowY = "visible";
  };

  const handleToggleMobileSidebar = () => {
    if (!showMobileSidebar) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "visible";
    }

    setShowMobileSidebar(!showMobileSidebar);
  };

  const renderLinks = () =>
    ["Home", "Community", "About"].map((link, index) => (
      <NextLink
        key={index}
        href={`#${link.toLowerCase()}`}
        className={`${activeSection === link.toLowerCase() ? "font-medium" : ""}`}
        onClick={() => {
          handleLinkClick(link.toLowerCase());
        }}
      >
        {link}
      </NextLink>
    ));

  return (
    <header className="absolute top-0 left-0 w-full">
      <div className="mx-auto w-[90%] max-w-[1200px] flex justify-between items-center mx-auto py-5 max-w-[1200px]">
        <div className="flex items-center">
          <p className="text-xl mr-24">LBG</p>

          <div className="hidden md:flex gap-13 text-[15px] font-light">
            {renderLinks()}
          </div>
        </div>

        <Link href={"/blog"} classes="hidden md:inline py-3">
          Blog
        </Link>
        <RxHamburgerMenu
          className="md:hidden cursor-pointer text-[1.6rem] z-30"
          onClick={handleToggleMobileSidebar}
        />

        <div
          className={`md:hidden fixed top-0 w-[75vw] md:w-[50vw] h-screen bg-white pl-8 sm:pl-12 pt-30 transition-all duration-1000 ${showMobileSidebar ? "z-20 right-0" : "z-0 -right-[75vw] md:-right-[50vw]"}`}
        >
          <div className="flex flex-col gap-7 text-lg font-light">
            {renderLinks()}

            <Link href={"/blog"} classes="w-fit py-2">
              Blog
            </Link>
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] transition-opacity duration-1000 ${showMobileSidebar ? "z-10 opacity-100" : "-z-10 opacity-0"}`}
          onClick={handleToggleMobileSidebar}
        />
      </div>
    </header>
  );
};
