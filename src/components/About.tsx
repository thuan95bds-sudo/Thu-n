import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { PROJECT_INFO } from "../constants";

export default function About() {
  const highlights = [
    "Vị trí kim cương tại trung tâm mới",
    "Tiện ích 5 sao đồng bộ quốc tế",
    "Sở hữu lâu dài, pháp lý minh bạch",
    "Quản lý chuyên nghiệp tiêu chuẩn Vinhomes",
    "Cộng đồng cư dân tinh hoa, văn minh",
    "Tiềm năng tăng giá vượt trội"
  ];

  return (
    <section id="overview" className="py-24 md:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          {/* Image side */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-brand-gold z-20 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Overview"
                className="w-full shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-light -z-10" />
            </motion.div>
            
            <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-8 hidden md:block z-20">
              <div className="text-5xl font-serif font-bold text-brand-gold italic mb-1">Elite</div>
              <div className="text-sm uppercase tracking-[0.3em] font-medium">Standard Living</div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Tầm vóc quốc tế
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
                NƠI TINH HOA HỘI TỤ <br />
                <span className="text-brand-gold">KIẾN TẠO CHUẨN MỰC SỐNG</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10 font-light">
                {PROJECT_INFO.name} không chỉ là một nơi để ở, mà là biểu tượng của sự thành đạt. Một kiệt tác sở hữu vị trí vàng đắc địa, tích hợp hệ sinh thái "All-in-one" hiện đại, mang đến trải nghiệm sống nghỉ dưỡng mỗi ngày cho chủ nhân xứng tầm.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm font-semibold text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ gap: "1.5rem" }}
                className="flex items-center gap-4 text-brand-red font-bold uppercase tracking-widest text-sm group"
              >
                Khám phá tổng quan dự án 
                <ArrowUpRight className="text-brand-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
