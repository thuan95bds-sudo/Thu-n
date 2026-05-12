import React from "react";
import { motion } from "motion/react";
import { PROJECT_INFO } from "../constants";

const PRODUCTS = [
  {
    type: "The Elite",
    title: "Căn Hộ Cao Cấp",
    description: "Thiết kế hiện đại, tối ưu diện tích với tầm nhìn Panorama tuyệt mỹ.",
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    type: "The Landmark",
    title: "Penthouse & Duplex",
    description: "Đẳng cấp hoàng gia, không gian sống nghỉ dưỡng riêng tư trên cao.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    type: "The Grand",
    title: "Biệt Thự Ven Sông",
    description: "Kiệt tác giới hạn, đặc quyền sống sinh thái giữa mây trời và sông nước.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-bold tracking-[0.4em] text-xs uppercase mb-3 block"
          >
            Sản phẩm đa dạng
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase">KIỆT TÁC <span className="text-brand-gold">KHÔNG GIAN SỐNG</span></h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white group overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={prod.img} 
                  alt={prod.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                    {prod.type}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif text-brand-dark mb-4">{prod.title}</h3>
                <p className="text-gray-600 text-sm font-light mb-8 flex-grow leading-relaxed">
                    {prod.description}
                </p>
                <button className="text-brand-red font-bold text-xs uppercase tracking-widest border-b-2 border-brand-red pb-1 self-start hover:text-brand-gold hover:border-brand-gold transition-colors">
                    Tìm hiểu chi tiết
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
