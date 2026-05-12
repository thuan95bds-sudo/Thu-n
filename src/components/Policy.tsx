import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Percent, Calculator, CalendarCheck } from "lucide-react";

export default function Policy() {
  const points = [
    { icon: Percent, label: "Chiết khấu lên đến 15%", sub: "Cho thanh toán sớm 95%" },
    { icon: Calculator, label: "Hỗ trợ lãi suất 0%", sub: "Lên tới 24 tháng hoặc đến khi nhận nhà" },
    { icon: CalendarCheck, label: "Thanh toán dãn tiến độ", sub: "Chỉ 1% mỗi tháng vô cùng linh hoạt" },
    { icon: CheckCircle2, label: "Quà tặng tân gia", sub: "Gói nội thất cao cấp trị giá hàng trăm triệu" },
  ];

  return (
    <section id="policy" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
             >
                <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase block">Cơ hội đầu tư</span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
                    CHÍNH SÁCH BÁN HÀNG <br/>
                    <span className="text-brand-gold italic font-light">ƯU ĐÃI ĐẶC QUYỀN</span>
                </h2>
                <p className="text-gray-600 font-light leading-relaxed">
                    Chúng tôi mang đến những giải pháp tài chính tối ưu nhất để quý khách dễ dàng sở hữu căn hộ mơ ước hoặc một sản phẩm đầu tư sinh lời bền vững.
                </p>

                <div className="space-y-6">
                    {points.map((p, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-red shadow-sm shrink-0">
                                <p.icon size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-dark">{p.label}</h4>
                                <p className="text-sm text-gray-500 font-light">{p.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 shadow-2xl relative z-10"
             >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 -z-10" />
                <h3 className="text-2xl font-serif mb-8 text-brand-dark pb-4 border-b border-gray-100">Đăng ký nhận bảng tính toán tài chính</h3>
                <div className="space-y-6">
                    <input type="text" placeholder="Họ và tên" className="w-full bg-gray-50 border border-gray-100 p-4 text-sm outline-none focus:border-brand-gold transition-colors" />
                    <input type="tel" placeholder="Số điện thoại" className="w-full bg-gray-50 border border-gray-100 p-4 text-sm outline-none focus:border-brand-gold transition-colors" />
                    <button className="w-full bg-brand-dark text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-brand-red transition-all shadow-lg">Tải bảng tính lợi nhuận</button>
                    <p className="text-[10px] text-center text-gray-400">Cam kết tư vấn tận tâm và chính xác nhất.</p>
                </div>
             </motion.div>
             <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-gold/20 -z-10 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
