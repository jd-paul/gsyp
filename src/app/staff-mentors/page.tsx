import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import StaffMentors from "@/components/staff-mentors";
import Footer from "@/app/footer/page";

export const metadata: Metadata = {
  title: "Staff and Mentors | Global Society of Young Physicists",
  description:
    "Meet the GSYP board, staff, and research mentors supporting young physicists through mentorship, editing, and volunteer leadership.",
};

export default function StaffAndMentorsPage() {
  return (
    <div className="min-h-screen bg-white text-[#37352f]">
      <a
        href="#staff-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-white px-4 py-3 text-[#37352f] outline outline-2 outline-[#0b6e99] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <StaffMentors />
      <Footer />
    </div>
  );
}
