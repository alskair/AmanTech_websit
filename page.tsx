"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Moon, Sun, Cpu, Menu, X, Shield, Network, Settings, Lightbulb } from "lucide-react";

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

  const myPhoneNumber = "218911764613";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61577581266079";

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*طلب تواصل جديد*\n\n*الاسم:* ${formData.name}\n*الايميل:* ${formData.email}\n*الموضوع:* ${formData.subject}\n*الرسالة:* ${formData.message}`;
    window.open(`https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const navColor = isScrolled ? (isDark ? "text-white" : "text-[#2358af]") : "text-white";

  return (
    <main className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${isDark ? "bg-[#050c1a]" : "bg-white"} scroll-smooth`} dir="rtl">
      
      {/* زر الوضع الليلي */}
      <button onClick={() => setIsDark(!isDark)} className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-[100] bg-[#2358af] text-white p-2 md:p-3 rounded-xl shadow-2xl active:scale-90 transition-transform">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* شريط التنقل */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? (isDark ? "bg-[#050c1a]/95 backdrop-blur py-2 shadow-lg" : "bg-white/95 backdrop-blur py-2 shadow-md") : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-[#2358af] rounded-lg flex items-center justify-center text-white relative">
              <Cpu size={22} />
            </div>
            <span className={`text-xl md:text-2xl font-black ${navColor}`}>أمان تيك</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-lg">
            {["الرئيسية", "من نحن", "الخدمات", "تواصل معنا"].map((item, idx) => (
              <a key={item} href={`#${['home', 'about', 'services', 'contact'][idx]}`} className={`font-bold transition-colors hover:text-yellow-500 ${navColor}`}>{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className={navColor}><Facebook size={24} /></a>
              <button onClick={() => window.open(`https://wa.me/${myPhoneNumber}`, "_blank")} className={navColor} aria-label="WhatsApp"><WhatsAppIcon className="w-6 h-6" /></button>
            </div>
            <button className={`lg:hidden ${navColor}`} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
        
        {isOpen && (
          <div className="lg:hidden absolute top-full w-full bg-white dark:bg-[#050c1a] border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4 text-center">
            {["الرئيسية", "من نحن", "الخدمات", "تواصل معنا"].map((item, idx) => (
              <a key={item} href={`#${['home', 'about', 'services', 'contact'][idx]}`} onClick={() => setIsOpen(false)} className="font-bold text-[#2358af] dark:text-white">{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* الواجهة الرئيسية */}
      <section id="home" className="relative h-[100svh] w-full flex items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200')" }}>
          <div className={`absolute inset-0 ${isDark ? "bg-[#050c1a]/90" : "bg-[#050c1a]/70"}`}></div>
        </div>
        <div className="relative z-10 text-white">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl md:text-9xl font-black mb-4 uppercase tracking-tighter">Aman Tech</motion.h1>
          <p className="text-xl md:text-3xl font-medium max-w-2xl mx-auto opacity-90 leading-relaxed">بنية تحتية قوية لمستقبلك الرقمي.</p>
        </div>
      </section>

      {/* من نحن */}
      <section id="about" className="py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-[#2358af] rounded-3xl mx-auto flex items-center justify-center text-white mb-8 shadow-xl">
            <Cpu size={50} />
          </div>
          <h2 className={`text-4xl md:text-6xl font-black mb-6 ${isDark ? "text-white" : "text-[#2358af]"}`}>من نحن</h2>
          <p className={`text-xl md:text-3xl font-bold max-w-4xl mx-auto leading-relaxed ${isDark ? "text-slate-300" : "text-[#2358af]"}`}>شركة أمان تيك هي شريكك الموثوق في ليبيا لتوفير حلول الشبكات وصيانة الأنظمة الحديثة.</p>
        </div>
      </section>

      {/* الخدمات */}
      <section id="services" className={`py-20 px-4 ${isDark ? "bg-[#081225]" : "bg-[#2358af]"}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "تركيب الشبكات", i: <Network /> },
            { t: "صيانة الأنظمة", i: <Settings /> },
            { t: "الأمن السيبراني", i: <Shield /> },
            { t: "استشارات تقنية", i: <Lightbulb /> }
          ].map((s, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] border border-white/10 bg-white/5 text-white text-center flex flex-col items-center hover:scale-105 transition-transform cursor-default">
              <div className="mb-6 bg-white text-[#2358af] p-4 rounded-2xl shadow-lg">{s.i}</div>
              <h3 className="text-2xl font-black">{s.t}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* التواصل */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-4xl md:text-6xl font-black text-center mb-16 ${isDark ? "text-white" : "text-[#2358af]"}`}>تواصل معنا</h2>
          <form onSubmit={handleWhatsAppSend} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input required placeholder="الاسم" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="p-5 rounded-2xl border-4 border-[#2358af] bg-transparent outline-none dark:text-white font-bold" />
              <input required type="email" placeholder="الايميل" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="p-5 rounded-2xl border-4 border-[#2358af] bg-transparent outline-none dark:text-white font-bold" />
            </div>
            <textarea required placeholder="رسالتك..." rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="p-5 rounded-2xl border-4 border-[#2358af] bg-transparent outline-none dark:text-white font-bold resize-none"></textarea>
            <button type="submit" className="py-5 rounded-2xl bg-[#2358af] text-white font-black text-xl hover:bg-yellow-500 transition-all active:scale-95 shadow-2xl">إرسال عبر واتساب</button>
          </form>
        </div>
      </section>

      <footer className="py-12 text-center border-t-8 border-[#2358af]/10 opacity-60 dark:text-white">
        <p className="text-lg font-black tracking-widest uppercase">© 2026 AmanTech - Misrata, Libya</p>
      </footer>
    </main>
  );
}
