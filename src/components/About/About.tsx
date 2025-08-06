import { useState } from "react";
import { Link } from "../Link";
import { Button } from "../Button";
import { ContactDialog } from "@/components/ContactDialog";

export const About = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <section id="#about">
      <div className="mx-auto w-[85%] w-[90%] max-w-[1300px] p-4 sm:p-8 lg:p-24 mb-24 grid grid-cols-12 rounded-md bg-slate-blue">
        <div className="col-span-12 lg:col-span-5 relative">
          <img
            className="rounded-md w-full max-h-[500px] lg:max-h-none object-cover"
            src="https://res.cloudinary.com/olamileke/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1753969387/lifebeyondgraduation/leiada-krozjhen-rqaAWQgy05U-unsplash_dholtj.jpg"
          />
        </div>
        <div className="col-span-0 lg:col-span-1" />
        <div className="mt-6 lg:mt-0 col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start justify-center">
          <span className="px-4 py-2 rounded text-base block w-fit mb-5 md:mb-4 lg:mb-7 font-medium bg-russian-violet text-white">
            why lifebeyondgraduation ?
          </span>

          <p className="font-light text-black text-lg/8 md:text-[16px]/8 mb-7 md:mb-4 lg:mb-7">
            Making the leap from the classroom to the real world can be
            overwhelming—suddenly, the rules change, and you’re expected to
            figure it all out on your own. Yet, there are few programs truly
            dedicated to guiding graduates through this crucial transition. This
            community exists to bridge that gap, equipping young adults with the
            skills, support, and confidence to thrive beyond the walls of
            school. Are you a final year student ?, interested in mentoring ?,
            or you just want to partner with us in whatever way, register or get
            in touch !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              href="https://bit.ly/register-lbg"
              classes="!py-3 !sm:py-5 w-full"
            >
              Register
            </Link>
            <Button
              classes="!py-3 !sm:py-5 w-full"
              handleClick={handleDialogOpen}
              isActive={false}
            >
              Get in touch
            </Button>
          </div>
        </div>
        <ContactDialog isOpen={dialogOpen} handleClose={handleDialogClose} />
      </div>
    </section>
  );
};
