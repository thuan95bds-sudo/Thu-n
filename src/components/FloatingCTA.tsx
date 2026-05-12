import React from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "../constants";

export default function FloatingCTA() {
  return (
    <>
      {/* Floating Buttons Desktop & Mobile */}
      <div className="fixed bottom-10 right-6 z-[9999] flex flex-col gap-4 pointer-events-auto">
        <motion.a
          href={CONTACT.messenger}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#0084FF] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(0,132,255,0.4)]"
        >
          <MessageCircle size={24} />
        </motion.a>

        <motion.a
          href={`https://zalo.me/${CONTACT.zalo}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#0068FF] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(0,104,255,0.4)]"
        >
          <span className="font-bold text-[10px]">Zalo</span>
        </motion.a>

        <motion.a
          href={`tel:${CONTACT.hotline}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-14 h-14 bg-brand-red text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(140,21,21,0.4)] relative"
        >
          <Phone size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-ping" />
        </motion.a>
      </div>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-brand-red text-white py-3 px-6 flex justify-between items-center z-[10000] shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            ĐANG TRỰC TUYẾN
          </span>
          <span className="font-bold tracking-wider">{CONTACT.hotline}</span>
        </div>
        <a 
          href={`tel:${CONTACT.hotline}`}
          className="bg-brand-gold text-brand-dark px-5 py-2 font-black text-xs uppercase tracking-widest rounded-sm shadow-inner active:scale-95 transition-transform"
        >
          GỌI NGAY
        </a>
      </div>
    </>
  );
}
