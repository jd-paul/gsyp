// src/app/page.tsx
import Navbar from "@/components/navbar";
import Home from "@/app/home/page";
import About from "@/app/about/page";
import Program from "@/app/program/page";
import Footer from "@/app/footer/page";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Program />
      <Footer />
    </>
  );
}
