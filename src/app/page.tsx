export default function IndexPage() {
  return (
    <div className="w-screen h-screen bg-primary text-white">
      <header className="border-b border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-center mx-auto py-5 max-w-[1200px]">
          <div className="flex items-center">
            <p className="text-2xl mr-16">LBG</p>

            <div className="flex gap-10 text-[14px]">
              <a className="border-b-2 border-[#FFA630]">HOME</a>
              <a className="border-b-2 border-transparent">ABOUT</a>
              <a className="border-b-2 border-transparent">JOIN</a>
            </div>
          </div>

          <a className="text-[14px]">CONTACT</a>
        </div>
      </header>
    </div>
  );
}
