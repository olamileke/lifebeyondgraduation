export const Header = () => (
  <header className="absolute top-0 left-0 w-full">
    <div className="flex justify-between items-center mx-auto py-5 max-w-[1200px]">
      <div className="flex items-center">
        <p className="text-xl mr-24">LBG</p>

        <div className="flex gap-10 text-[15px] font-light">
          <a className="font-medium">Home</a>
          <a>About</a>
          <a>Join</a>
          <a>Contact</a>
        </div>
      </div>

      <a className="text-[15px] text-white font-light py-3 px-5 rounded-md bg-[#392759]">
        Blog{" "}
      </a>
    </div>
  </header>
);
