import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const UTILITIES = [
  {
    title: "Công viên ánh sáng 36ha",
    description: "Lấy cảm hứng từ Grand Park by the Bay Singapore, lá phổi xanh khổng lồ giữa lòng đô thị.",
    img: "https://images.unsplash.com/photo-1572333214441-10c039755694?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Bến thuyền đẳng cấp",
    description: "Trải nghiệm du thuyền thượng lưu, không gian thư giãn tuyệt mỹ ven sông.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Biển hồ cát trắng",
    description: "Kỳ quan biển hồ trong lòng phố, cát trắng mịn được vận chuyển từ vịnh Nha Trang.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Trung tâm thương mại",
    description: "Mua sắm giải trí bất tận với các thương hiệu quốc tế hàng đầu.",
    img: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Trường học quốc tế",
    description: "Hệ thống giáo dục Vinschool liên cấp, ươm mầm thế hệ công dân toàn cầu.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
      title: "Bệnh viện quốc tế",
      description: "Vinmec mang đến dịch vụ chăm sóc sức khỏe chuẩn 5 sao.",
      img: "https://images.unsplash.com/photo-1519494549754-846c2434685f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
];

export default function Utilities() {
  return (
    <section id="utilities" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-bold tracking-[0.4em] text-xs uppercase mb-3 block"
          >
            Đặc quyền cư dân
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark mb-6"
          >
            HỆ SINH THÁI TIỆN ÍCH ALL-IN-ONE
          </motion.h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UTILITIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden h-[450px] shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-serif mb-3 transition-transform duration-500 group-hover:-translate-y-2">
                  {item.title}
                </h3>
                <div className="w-12 h-0.5 bg-brand-gold mb-6 group-hover:w-full transition-all duration-500" />
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                  Khám phá thêm <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
