import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Clock,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const IMAGES = {
  logo: 'https://www.dr-janssen-sinn.de/.cm4all/uproc.php/0/logo/.img107.jpg/picture-200?_=166825f32e8',
};

const OPENING_HOURS = [
  { day: 'Montag', hours: '10:00–12:00 | 16:00–19:00', slots: [[10, 12], [16, 19]] },
  { day: 'Dienstag', hours: '10:00–12:00 | 16:00–19:00', slots: [[10, 12], [16, 19]] },
  { day: 'Mittwoch', hours: '16:00–19:00', slots: [[16, 19]] },
  { day: 'Donnerstag', hours: 'Nur Sondertermine (lang)', slots: [] },
  { day: 'Freitag', hours: '10:00–14:00', slots: [[10, 14]] },
  { day: 'Samstag', hours: 'Geschlossen', slots: [] },
  { day: 'Sonntag', hours: 'Geschlossen', slots: [] },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloatingCall, setShowFloatingCall] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowFloatingCall(window.scrollY > 300);
    };

    const checkOpenStatus = () => {
      const now = new Date();
      const dayIndex = (now.getDay() + 6) % 7;
      const currentDay = OPENING_HOURS[dayIndex];
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour + minute / 60;
      const isOpen = currentDay.slots.some(([start, end]) => time >= start && time <= end);
      setIsOpenNow(isOpen);
    };

    window.addEventListener('scroll', handleScroll);
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [location.pathname]);

  const navLinks = [
    { name: 'Über mich', href: '/#ueber-mich' },
    { name: 'Leistungen', href: '/#leistungen' },
    { name: 'Diagnostik', href: '/diagnostik.html' },
    { name: 'Öffnungszeiten', href: '/#oeffnungszeiten' },
    { name: 'Kontakt', href: '/#kontakt' },
  ];

  return (
    <div className="min-h-screen smooth-scroll bg-bg-light">
      {/* Sticky Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'glass-nav shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={IMAGES.logo} alt="Logo" className="h-10 w-10 rounded-full object-cover border border-primary/20" referrerPolicy="no-referrer" />
            <span className="text-primary font-serif font-bold text-xl hidden sm:block">Dr. Janßen-Sinn</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a key={link.name} href={link.href} className="text-dark hover:text-primary font-medium transition-colors">
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} to={link.href} className="text-dark hover:text-primary font-medium transition-colors">
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/50 border border-primary/10 text-sm">
              <span className={`h-2 w-2 rounded-full ${isOpenNow ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
              <span className="font-medium">{isOpenNow ? 'Jetzt geöffnet' : 'Aktuell geschlossen'}</span>
            </div>
            <a href="tel:0293282902" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md active:scale-95">
              Termin vereinbaren
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-secondary shadow-xl border-t border-primary/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  link.href.startsWith('/#') ? (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="block text-lg font-medium text-dark hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="block text-lg font-medium text-dark hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <div className="pt-4 border-t border-primary/10">
                  <a href="tel:0293282902" className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold">
                    Termin vereinbaren
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-dark text-secondary pt-20 pb-10 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src={IMAGES.logo} alt="Logo" className="h-12 w-12 rounded-full object-cover grayscale brightness-200" referrerPolicy="no-referrer" />
                <span className="text-white font-serif font-bold text-2xl">Dr. Janßen-Sinn</span>
              </div>
              <p className="text-secondary/60 leading-relaxed">
                Fachtierärztliche Kleintierpraxis in Arnsberg-Bergheim.<br />
                Kardinal-Jaeger-Str. 16<br />
                59757 Arnsberg
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg uppercase tracking-wider">Leistungen</h4>
              <ul className="space-y-3">
                {['Diagnostik & Labor', 'Operationen', 'Zahnmedizin', 'Vorsorge', 'Online-Sprechstunde'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'Diagnostik & Labor' ? '/diagnostik.html' : '/#leistungen'} className="text-secondary/60 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg uppercase tracking-wider">Rechtliches</h4>
              <ul className="space-y-3">
                {['Impressum', 'Datenschutzerklärung', 'Anfahrt', 'Kontakt'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-secondary/60 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-secondary/40 text-sm">
            <p>© 2025 Dr. med. vet. Guntrun Janßen-Sinn · Kleintierpraxis Arnsberg-Bergheim</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <AnimatePresence>
        {showFloatingCall && (
          <motion.a 
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            href="tel:0293282902"
            className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl flex items-center space-x-3 hover:scale-105 transition-transform active:scale-95 md:hidden"
          >
            <Phone size={24} />
            <span className="font-bold pr-2">Jetzt anrufen</span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
