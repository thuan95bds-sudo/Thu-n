import React from "react";
import { CONTACT, NAVIGATION, PROJECT_INFO } from "../constants";
import { Facebook, MessageCircle, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden border-t border-brand-gold/20">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center">
                <span className="text-brand-gold font-bold text-2xl font-serif">V</span>
              </div>
              <div>
                 <span className="font-serif font-bold text-xl tracking-tight block">VINHOMES</span>
                 <span className="text-[9px] tracking-[0.3em] font-medium text-brand-gold">SAIGON PARK</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Đại đô thị đẳng cấp quốc tế hội tụ đầy đủ những giá trị sống tinh hoa nhất. Nơi kiến tạo một cộng đồng nhân văn, văn minh và thịnh vượng dành riêng cho giới thượng lưu.
            </p>
            <div className="flex gap-4">
              {[Facebook, MessageCircle, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-full text-gray-400 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-serif text-brand-gold mb-8">LIÊN KẾT NHANH</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-gray-400 hover:text-white transition-all text-sm italic">Điều khoản pháp lý</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-serif text-brand-gold mb-8">PHÒNG KINH DOANH DỰ ÁN</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone size={20} className="text-brand-gold shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Hotline tư vấn 24/7</p>
                    <p className="text-lg font-bold text-white">{CONTACT.hotline}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={20} className="text-brand-gold shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email hỗ trợ</p>
                    <p className="text-sm font-medium text-white">{CONTACT.email}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-brand-gold shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Địa chỉ dự án</p>
                    <p className="text-sm font-light text-gray-300">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-[10px] text-brand-gold font-bold">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        PHÒNG KINH DOANH ĐANG MỞ CỬA
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
          <p>© 2024 {PROJECT_INFO.name}. LIMITED EDITION REAL ESTATE.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:text-brand-gold duration-300"
          >
            Lên đầu trang <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
