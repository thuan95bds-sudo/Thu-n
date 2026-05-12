import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Vị trí dự án Vinhomes Saigon Park ở đâu?",
    a: "Dự án tọa lạc tại tâm điểm kết nối mới của Sài Gòn, sở hữu vị trí vàng đắc địa với khả năng kết nối linh hoạt tới trung tâm Quận 1 chỉ trong 15 phút qua các trục đường huyết mạch."
  },
  {
    q: "Pháp lý dự án có đảm bảo không?",
    a: "Dự án sở hữu sổ hồng lâu dài cho người Việt Nam và 50 năm cho người nước ngoài. Toàn bộ hồ sơ pháp lý, giấy phép xây dựng đã hoàn tất và sẵn sàng cung cấp cho quý khách hàng."
  },
  {
    q: "Tiện ích nổi bật nhất của dự án là gì?",
    a: "Điểm nhấn đặc biệt nhất là Đại công viên ánh sáng 36ha quy mô hàng đầu Đông Nam Á, Biển hồ cát trắng nhân tạo, Bệnh viện Vinmec, Trường học Vinschool và TTTM Vincom Mega Mall."
  },
  {
    q: "Ngân hàng có hỗ trợ vay vốn không?",
    a: "Có, các ngân hàng đối tác chiến lược như Techcombank, Vietcombank hỗ trợ vay lên tới 80% giá trị căn hộ, ân hạn nợ gốc và miễn lãi suất lên tới 24 tháng."
  },
  {
    q: "Khi nào dự án bàn giao nhà?",
    a: "Tiến độ thi công đang được đẩy mạnh ngày đêm. Dự kiến đợt bàn giao đầu tiên sẽ bắt đầu vào Quý IV/2025 theo đúng cam kết của chủ đầu tư."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-3 block">Giải đáp thắc mắc</span>
          <h2 className="text-4xl font-serif text-brand-dark mb-6 tracking-tight">CÂU HỎI THƯỜNG GẶP</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className={`text-lg font-medium transition-colors ${openIdx === idx ? 'text-brand-red' : 'text-brand-dark group-hover:text-brand-gold'}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  {openIdx === idx ? <Minus size={20} className="text-brand-red" /> : <Plus size={20} className="text-brand-gold" />}
                </div>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-6 text-gray-500 font-light leading-relaxed">
                        {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
