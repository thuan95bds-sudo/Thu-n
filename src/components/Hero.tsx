import React from "react";
import { motion } from "motion/react";
import { CONTACT, PROJECT_INFO } from "../constants";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Fallback / Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-brand-gold tracking-[0.4em] uppercase font-bold text-xs md:text-sm mb-6">
            {PROJECT_INFO.tagline}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
            VINHOMES <br />
            <span className="text-brand-gold">SAIGON PARK</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-12 font-light">
            Nơi hội tụ tinh hoa sống thượng lưu, mang đến chuẩn mực mới về sự sang trọng và thịnh vượng tại tâm điểm Sài Gòn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-red text-white px-10 py-5 text-sm font-bold tracking-widest uppercase shadow-2xl hover:bg-red-800 transition-colors"
            >
              Nhận bảng giá ưu đãi
            </motion.button>
            <motion.a
              href={`tel:${CONTACT.hotline}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-red transition-all"
            >
              Hotline: {CONTACT.hotline}
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">Khám phá ngay</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} className="text-brand-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
