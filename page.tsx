"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Facebook, 
  Moon, 
  Sun, 
  Cpu, 
  Menu, 
  X, 
  Shield, 
  Network, 
  Settings, 
  Lightbulb 
} from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.875 1.215 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  // البيانات الخاصة بك
  const myPhoneNumber = "218911764613";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61577581266079";

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*طلب تواصل جديد*\n\n*الاسم:* ${formData.name}\n*الايميل:* ${formData.email}\n*الموضوع:* ${formData.subject}\n*الرسالة:* ${formData.message}`;
    window.open(`https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  const navColor = isScrolled ? (isDark ? "text-white" : "text-[#2358af]") : "text-white";
  const navLinks = [
    { name: "الرئيسية", id: "#home" },
    { name: "من نحن", id: "#about" },
    { name: "الخدمات", id: "#services" },
    { name: "تواصل معنا", id: "#contact" },
  ];

  const services = [
    { title: "تركيب الشبكات", desc: "تصميم وتنفيذ بنية تحتية قوية للشبكات السلكية واللاسلكية.", icon: <Network size={40} /> },
    { title: "صيانة الأنظمة", desc: "حلول صيانة دورية وطارئة لضمان استمرارية عمل أنظمتك.", icon: <Settings size={40} /> },
    { title: "الأمن السيبراني", desc: "حماية بيانات شركتك وتأمين اتصالاتك من الاختراقات.", icon: <Shield size={40} /> },
    { title: "الاستشارات التقنية", desc: "نساعدك في اختيار أفضل التقنيات التي تناسب نمو أعمالك.", icon: <Lightbulb size={40} /> }
  ];

  return (
    <main className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${isDark ? "bg-[#050c1a]" : "bg-white"}`} dir="rtl">
      
      {/* زر الوضع الليلي */}
      <button onClick={() => setIsDark(!isDark)} className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-[100] bg-[#2358af] text-white p-2 md:p-3 rounded-2xl shadow-2xl hover:bg-yellow-500 transition-all active:scale-90">
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* شريط التنقل */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? (isDark ? "bg-[#050c1a]/95 backdrop-blur shadow-2xl py-3" : "bg-white shadow-xl py-3") : "bg-transparent py-5 md:py-7"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* اللوقو */}
            <div className="w-9 h-9 md:w-11 md:h-11 bg-[#2358af] rounded-xl flex items-center justify-center text-white shadow-lg overflow-hidden border border-white/10">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display='none'; }} />
              <Cpu size={22} className="absolute" />
            </div>
            <span className={`text-xl md:text-2xl font-black transition-colors ${navColor}`}>أمان تيك</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.id} className={`font-bold text-base xl:text-lg transition-all hover:scale-110 hover:text-yellow-500 ${navColor}`}>{link.name}</a>
            ))}
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-4 md:gap-6">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className={`transition-all hover:scale-125 hover:text-[#1877f2] ${navColor}`}><Facebook size={26} /></a>
              <div onClick={() => window.open(`https://wa.me/${myPhoneNumber}`, "_blank")} className={`cursor-pointer transition-all hover:scale-125 hover:text-[#25d366] ${navColor}`}><WhatsAppIcon className="w-7 h-7" /></div>
            </div>
            <button className={`lg:hidden p-2 rounded-lg ${navColor}`} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30} /> : <Menu size={30} />}</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')" }}>
          <div className={`absolute inset-0 transition-all duration-700 ${isDark ? "bg-[#050c1a]/95" : "bg-[#050c1a]/80"}`}></div>
        </div>
        <div className="relative z-10 text-center text-white w-full max-w-5xl">
          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter drop-shadow-2xl uppercase">Aman Tech</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg sm:text-xl md:text-3xl font-medium max-w-3xl mx-auto border-t border-white/20 pt-6 px-4">نحن نبني البنية التحتية لمستقبلك الرقمي بحلول تقنية متكاملة.</motion.p>
        </div>
      </section>

      {/* قسم من نحن */}
      <section id="about" className={`py-32 transition-colors duration-500 overflow-hidden ${isDark ? "bg-[#050c1a]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8 }} className="w-24 h-24 md:w-36 md:h-36 bg-[#2358af] rounded-3xl flex items-center justify-center text-white shadow-2xl">
            <Cpu size={60} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-12">
            <h2 className={`text-4xl md:text-6xl font-black mb-8 ${isDark ? "text-white" : "text-[#2358af]"}`}>من نحن</h2>
            <p className={`text-xl md:text-3xl font-bold max-w-4xl leading-relaxed ${isDark ? "text-slate-300" : "text-[#2358af]"}`}>شركة أمان تيك هي شريكك الموثوق في ليبيا لتوفير حلول الشبكات المتطورة، صيانة الأنظمة، وتقنيات المعلومات الحديثة.</p>
          </motion.div>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section id="services" className={`py-24 transition-colors duration-500 ${isDark ? "bg-[#050c1a]" : "bg-[#2358af]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-white text-4xl md:text-6xl font-black text-center mb-20 uppercase tracking-widest">خدماتنا</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ scale: 1.05 }} className={`p-10 rounded-[2.5rem] flex flex-col items-center text-center border-4 ${isDark ? "bg-[#2358af]/10 border-[#2358af]" : "bg-[#2358af] border-white shadow-xl"}`}>
                <div className={`mb-8 p-5 rounded-2xl ${isDark ? "text-white bg-[#2358af]" : "text-[#2358af] bg-white"}`}>{service.icon}</div>
                <h3 className="text-white text-2xl font-bold mb-5 uppercase leading-tight">{service.title}</h3>
                <p className="text-white/90 text-lg font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم تواصل معنا المطور */}
      <section id="contact" className={`py-24 transition-colors duration-500 ${isDark ? "bg-[#050c1a]" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className={`text-4xl md:text-6xl font-black text-center mb-16 uppercase ${isDark ? "text-white" : "text-[#2358af]"}`}>تواصل معنا</motion.h2>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
            <form onSubmit={handleWhatsAppSend} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required type="text" placeholder="الاسم الكامل" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={`w-full p-5 rounded-2xl outline-none font-bold transition-all border-4 ${isDark ? "bg-[#050c1a] border-white text-white placeholder-white/40" : "bg-white border-[#2358af] text-[#2358af] placeholder-[#2358af]/60"}`} />
                <input required type="email" placeholder="البريد الإلكتروني" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={`w-full p-5 rounded-2xl outline-none font-bold transition-all border-4 ${isDark ? "bg-[#050c1a] border-white text-white placeholder-white/40" : "bg-white border-[#2358af] text-[#2358af] placeholder-[#2358af]/60"}`} />
              </div>
              <input required type="text" placeholder="الموضوع" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className={`w-full p-5 rounded-2xl outline-none font-bold transition-all border-4 ${isDark ? "bg-[#050c1a] border-white text-white placeholder-white/40" : "bg-white border-[#2358af] text-[#2358af] placeholder-[#2358af]/60"}`} />
              <textarea required placeholder="رسالتك هنا..." rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={`w-full p-5 rounded-2xl outline-none font-bold resize-none transition-all border-4 ${isDark ? "bg-[#050c1a] border-white text-white placeholder-white/40" : "bg-white border-[#2358af] text-[#2358af] placeholder-[#2358af]/60"}`}></textarea>
              <motion.button type="submit" whileHover={{ scale: 1.05 }} className={`group w-full py-6 rounded-2xl shadow-xl border-4 transition-all active:scale-95 ${isDark ? "bg-[#050c1a] border-white" : "bg-white border-[#2358af]"}`}>
                <span className={`text-xl font-black transition-colors uppercase ${isDark ? "text-white group-hover:text-yellow-400" : "text-[#2358af] group-hover:text-yellow-600"}`}>إرسال عبر واتساب</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className={`py-12 text-center border-t-8 transition-colors duration-500 ${isDark ? "bg-[#050c1a] border-white/10 text-white/40" : "bg-white border-[#2358af] text-[#2358af]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xl font-black">جميع الحقوق محفوظة 2026 AmanTech</p>
        </div>
      </footer>
    </main>
  );
}