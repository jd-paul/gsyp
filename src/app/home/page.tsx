"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative h-screen min-h-[45rem] pt-16 flex items-center justify-center">
      {/* Background image */}
      <Image
        src="/image/unsplash-1.jpg"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay as gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/25 to-black/75" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center justify-center text-white w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between w-full gap-8"
        >
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left flex-1"
          >
            <h1 className="text-4xl font-bold mb-4">
              Empowering Young Physicists
            </h1>
            <p className="text-lg mb-6">
              Inspiring the next generation of scientific leaders through
              mentorship, collaboration, and discovery.
            </p>
            <Button variant="secondary" className="text-zinc-950">
              <UserPlus className="mr-2 h-4 w-4" />
              Apply here
            </Button>
          </motion.div>

          {/* Right Side (Image Logo) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center flex-1"
          >
            <div className="w-100 h-100 relative rounded-[2rem] overflow-hidden shadow-lg">
              <Image
                src="/image/meeting.png"
                alt="Sample Logo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
