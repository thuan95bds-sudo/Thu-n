import React, { useState } from "react";
import { motion } from "motion/react";
import { CONTACT } from "../constants";
import { Phone, Mail, Send, Check } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row">
          {/* Info side */}
          <div className="md:w-5/12 bg-luxury-gradient p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-brand-gold">ĐĂNG KÝ TƯ VẤN</h2>
              <p className="text-gray-400 mb-12 font-light leading-relaxed">
                Để lại thông tin để nhận trọn bộ tài liệu dự án, mặt bằng chi tiết, chính sách bán hàng và bảng giá mới nhất từ phòng kinh doanh.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Hotline 24/7</p>
                    <p className="text-xl font-medium tracking-wider">{CONTACT.hotline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Email dự án</p>
                    <p className="text-sm font-medium opacity-80">{CONTACT.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 italic">
                * Thông tin của quý khách hoàn toàn được bảo mật.
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className="md:w-7/12 p-12 lg:p-16">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-serif mb-4">Gửi thông tin thành công!</h3>
                <p className="text-gray-600 mb-8">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-gold font-bold uppercase tracking-widest text-sm"
                >
                  Gửi lại yêu cầu
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder=" "
                      className="peer w-full border-b border-gray-200 py-3 outline-none focus:border-brand-gold transition-colors block bg-transparent"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold uppercase tracking-widest pointer-events-none"
                    >
                      Họ và tên *
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder=" "
                      className="peer w-full border-b border-gray-200 py-3 outline-none focus:border-brand-gold transition-colors block bg-transparent"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold uppercase tracking-widest pointer-events-none"
                    >
                      Số điện thoại *
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full border-b border-gray-200 py-3 outline-none focus:border-brand-gold transition-colors block bg-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold uppercase tracking-widest pointer-events-none"
                  >
                    Email (để nhận bảng giá)
                  </label>
                </div>

                <div className="relative">
                  <select className="w-full border-b border-gray-200 py-3 outline-none focus:border-brand-gold transition-colors bg-transparent text-gray-500 appearance-none">
                    <option value="">Loại hình quan tâm</option>
                    <option value="apartment">Căn hộ cao cấp</option>
                    <option value="shophouse">Shophouse khối đế</option>
                    <option value="villa">Biệt thự đơn lập/Song lập</option>
                  </select>
                  <div className="absolute right-0 top-4 pointer-events-none">
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </div>

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-brand-gold hover:bg-brand-dark text-white py-5 px-8 font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    NHẬN TRỌN BỘ TÀI LIỆU <Send size={18} />
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronDown({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
