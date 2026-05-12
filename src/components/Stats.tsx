import React from "react";
import { motion } from "motion/react";
import { PROJECT_INFO } from "../constants";
import { Building2, Landmark, Star, ShieldCheck } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  "Tổng diện tích": Building2,
  "Mật độ xây dựng": Landmark,
  "Cấp công viên": ShieldCheck,
  "Căn hộ cao cấp": Star,
};

export default function Stats() {
  return (
    <section className="bg-brand-dark py-24 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {PROJECT_INFO.stats.map((stat, idx) => {
            const Icon = ICON_MAP[stat.label] || Star;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <Icon size={32} />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-3 flex justify-center items-baseline gap-1">
                  {stat.value}
                  <span className="text-xl md:text-2xl font-sans font-medium">{stat.unit}</span>
                </div>
                <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
