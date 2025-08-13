import NextLink from "next/link";
import { useState, useEffect } from "react";
import { Link } from "../Link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BsWindowSidebar } from "react-icons/bs";

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      setActiveSection("home");
    } else {
      setActiveSection(hash.slice(1));
      setIsFixed(window.scrollY > 48);
    }

    const handleScroll = () => {
      setIsFixed(window.scrollY > 48);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
    <>
      <header
        className={`${isFixed ? "bg-white shadow" : "bg-transparent shadow-none"} z-20 fixed transition-all duration-500 top-0 left-0 w-full`}
      >
        <div className="mx-auto w-[85%] sm:w-[90%] max-w-[1200px] z-20 flex justify-between items-center mx-auto py-5 max-w-[1200px]">
          <div
            className={`flex items-center transition-colors duration-500 ${isFixed ? "text-russian-violet" : "text-black"}`}
          >
            <p className="text-xl mr-24">LBG</p>

            <div className="hidden md:flex gap-13 text-[15px] font-light">
              {renderLinks()}
            </div>
          </div>

          <Link href={"/blog"} classes="hidden md:inline py-3">
            Blog
          </Link>
          <RxHamburgerMenu
            className="md:hidden cursor-pointer text-[1.6rem] z-50"
            onClick={handleToggleMobileSidebar}
          />
        </div>
      </header>
      <div
        className={`md:hidden fixed top-0 w-[75vw] md:w-[50vw] h-screen bg-white px-8 sm:px-12 pt-6 z-40 transition-all duration-1000 ${showMobileSidebar ? "right-0" : "-right-[75vw] md:-right-[50vw]"}`}
      >
        <HiOutlineArrowRight
          className="text-xl text-russian-violet cursor-pointer mb-20"
          onClick={handleToggleMobileSidebar}
        />
        <div className="flex flex-col gap-7 text-russian-violet text-lg font-light">
          {renderLinks()}

          <Link href={"/blog"} classes="w-fit py-2">
            Blog
          </Link>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] transition-opacity duration-1000 ${showMobileSidebar ? "z-30 opacity-100" : "-z-10 opacity-0"}`}
        onClick={handleToggleMobileSidebar}
      />
    </>
  );
};
