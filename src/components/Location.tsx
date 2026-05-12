import React from "react";
import { motion } from "motion/react";
import { MapPin, Plane, Car, Train } from "lucide-react";

export default function Location() {
  const points = [
    { icon: Plane, label: "Sân bay Long Thành", time: "20 phút" },
    { icon: Train, label: "Tuyến Metro số 1", time: "5 phút" },
    { icon: Car, label: "Trung tâm Quận 1", time: "15 phút" },
    { icon: MapPin, label: "Khu Công nghệ cao", time: "2 phút" },
  ];

  return (
    <section id="location" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Vị trí chiến lược</span>
              <h2 className="text-4xl font-serif text-brand-dark mb-6">TÂM ĐIỂM KẾT NỐI <br/><span className="text-brand-gold">PHỒN VINH</span></h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Sở hữu tọa độ vàng tại trung tâm mạng lưới giao thông khu vực phía Đông, dự án kết nối trực tiếp với các tuyến đường huyết mạch, mang lại sự tiện nghi tối đa cho cư dân.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-gray-100 bg-brand-light rounded-sm"
                >
                  <div className="text-brand-gold shrink-0">
                    <p.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-dark">{p.label}</p>
                    <p className="text-sm font-bold text-brand-red">{p.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-7/12 relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full h-[400px] md:h-full bg-gray-200 shadow-2xl relative overflow-hidden flex items-center justify-center"
             >
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-brand-red/10 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(140,21,21,0.6)] animate-bounce">
                        <MapPin size={16} />
                    </div>
                    <span className="mt-2 bg-white px-3 py-1 text-[10px] font-bold text-brand-red shadow-lg whitespace-nowrap">VINHOMES SAIGON PARK</span>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
