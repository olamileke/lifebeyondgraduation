"use client";

import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";

export default function IndexPage() {
  return (
    <>
      <div
        id="home"
        className="relative w-screen h-screen bg-slate-blue text-black"
      >
        <Header />
        <Hero />
      </div>
      <Pillars />
      <About />
      <Footer />
    </>
  );
}
