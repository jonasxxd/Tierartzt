/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Stethoscope, 
  Scissors, 
  Activity, 
  ShieldCheck, 
  Video, 
  AlertCircle,
  Award,
  GraduationCap,
  FlaskConical,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  primary: '#2D6A4F',
  secondary: '#FAF7F2',
  accent: '#C9A84C',
  dark: '#1C2B20',
  bgLight: '#F2F0EB',
};

const IMAGES = {
  portrait: 'https://www.dr-janssen-sinn.de/.cm4all/uproc.php/0/.IMG_0682(1).JPG/picture-200?_=195194db75a',
  entrance: 'https://www.dr-janssen-sinn.de/.cm4all/uproc.php/0/Praxiseingang/.05_anhang5.jpg/picture-200?_=17087cb65f8',
  logo: 'https://www.dr-janssen-sinn.de/.cm4all/uproc.php/0/logo/.img107.jpg/picture-200?_=166825f32e8',
  onlineConsultation: 'https://www.dr-janssen-sinn.de/.cm4all/uproc.php/0/.button-online-sprechstunde.jpg/picture-200?_=19560c0e70a',
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloatingCall, setShowFloatingCall] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowFloatingCall(window.scrollY > 300);
    };

    const checkOpenStatus = () => {
      const now = new Date();
      const dayIndex = (now.getDay() + 6) % 7; // Adjust to Monday-start
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const navLinks = [
    { name: 'Über mich', href: '#ueber-mich' },
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Diagnostik', href: '#diagnostik' },
    { name: 'Öffnungszeiten', href: '#oeffnungszeiten' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Sticky Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={IMAGES.logo} alt="Logo" className="h-10 w-10 rounded-full object-cover border border-primary/20" referrerPolicy="no-referrer" />
            <span className="text-primary font-serif font-bold text-xl hidden sm:block">Dr. Janßen-Sinn</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-dark hover:text-primary font-medium transition-colors">
                {link.name}
              </a>
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
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="block text-lg font-medium text-dark hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                Fachtierärztin · 38 Jahre Erfahrung
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img src={IMAGES.portrait} alt="Dr. med. vet. Guntrun Janßen-Sinn" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden sm:block border border-primary/10">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Erreichbarkeit</p>
                    <p className="text-sm font-bold text-dark">Nur nach Termin</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl text-primary leading-tight">
                Weil Ihr Tier die beste Fürsorge verdient.
              </h1>
              <p className="text-xl text-dark/80 leading-relaxed max-w-xl">
                Fachtierärztliche Kleintierpraxis in Arnsberg-Bergheim. Persönlich, erfahren, mit Herz.
              </p>
              
              <div className="pl-6 border-l-4 border-accent italic text-lg text-dark/70 py-2">
                „Ich behandle jedes Tier als wäre es mein eigenes."
                <span className="block mt-2 font-bold text-dark not-italic">— Dr. Guntrun Janßen-Sinn</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:0293282902" className="flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl active:scale-95">
                  <Phone size={20} />
                  <span>02932-82902 anrufen</span>
                </a>
                <a href="https://www.dr-janssen-sinn.de/Kontakt/Online-Sprechstunde" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all active:scale-95">
                  <Video size={20} />
                  <span>Online-Sprechstunde</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 text-dark/60 text-sm font-medium">
                <Clock size={16} />
                <span>Terminvergabe telefonisch: 02932-82902</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#E8F4EE] py-10 border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="text-primary" />, text: "38 Jahre Erfahrung" },
              { icon: <GraduationCap className="text-primary" />, text: "Fachtierärztin für Kleintiere" },
              { icon: <FlaskConical className="text-primary" />, text: "Eigenes Praxislabor" },
              { icon: <Heart className="text-primary" />, text: "Persönliche Betreuung" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className="bg-white p-3 rounded-full shadow-sm">{item.icon}</div>
                <span className="font-bold text-dark text-sm sm:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img src={IMAGES.entrance} alt="Praxiseingang" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
                Über die Praxis
              </div>
              <h2 className="text-3xl md:text-4xl text-primary">Ihre Tierärztin in Arnsberg-Bergheim</h2>
              <div className="space-y-4 text-lg text-dark/80 leading-relaxed border-l-4 border-primary/20 pl-6">
                <p>
                  Meine Kleintierpraxis ist fachtierärztlich geführt und ich blicke auf mehr als 38 Jahre praktische Erfahrung auf diesem Gebiet zurück.
                </p>
                <p>
                  Bei alltäglichen Problemen helfen wir Ihnen mit dem gleichen Engagement wie bei komplizierten Fragestellungen. Die Gesundheit und das Wohlbefinden Ihrer Tiere stehen bei uns an erster Stelle.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { label: 'Hunde', emoji: '🐕' },
                  { label: 'Katzen', emoji: '🐱' },
                  { label: 'Kleintiere', emoji: '🐰' },
                ].map((pet) => (
                  <div key={pet.label} className="bg-bg-light p-4 rounded-xl text-center hover-lift border border-primary/5">
                    <span className="text-3xl block mb-2">{pet.emoji}</span>
                    <span className="font-bold text-dark">{pet.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-primary mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-dark/60 max-w-2xl mx-auto">
            Umfassende medizinische Versorgung für Ihre Liebsten – von der Vorsorge bis zur Chirurgie.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <FlaskConical />, 
                title: "Diagnostik & Labor", 
                desc: "Hauseigenes Labor, Röntgen, Dentalröntgen, Ultraschall, EKG, Blutdruckmessung.",
                link: "#diagnostik"
              },
              { 
                icon: <Stethoscope />, 
                title: "Operationen", 
                desc: "Erfahrene Anästhesie und chirurgische Eingriffe – vor und nach der OP bestens betreut.",
                link: "#kontakt"
              },
              { 
                icon: <Scissors />, 
                title: "Zahnmedizin für Tiere", 
                desc: "Professionelle Zahnbehandlung inkl. Dentalröntgen für Hunde und Katzen.",
                link: "#diagnostik"
              },
              { 
                icon: <ShieldCheck />, 
                title: "Vorsorge & Impfungen", 
                desc: "Regelmäßige Gesundheitschecks, Impfungen, Entwurmung und Parasitenvorsorge.",
                link: "#kontakt"
              },
              { 
                icon: <Video />, 
                title: "Online-Sprechstunde", 
                desc: "Erste Einschätzung bequem von zu Hause — für unkomplizierte Fragen und Folgekonsultationen.",
                link: "https://www.dr-janssen-sinn.de/Kontakt/Online-Sprechstunde"
              },
              { 
                icon: <AlertCircle />, 
                title: "Notfallberatung", 
                desc: "Hinweise für den Notfall und Tipps, was Sie sofort tun können.",
                link: "#notfall"
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover-lift border-t-4 border-primary/0 hover:border-primary group">
                <div className="bg-primary/10 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">{service.desc}</p>
                <a href={service.link} className="text-primary font-bold flex items-center space-x-1 hover:underline">
                  <span>Mehr erfahren</span>
                  <ChevronDown size={16} className="-rotate-90" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Sprechstunde CTA */}
      <section className="bg-primary py-20 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-10 inline-block p-2 bg-white rounded-2xl shadow-2xl hover:scale-105 transition-transform cursor-pointer">
            <a href="https://www.dr-janssen-sinn.de/Kontakt/Online-Sprechstunde" target="_blank" rel="noopener noreferrer">
              <img src={IMAGES.onlineConsultation} alt="Online Sprechstunde" className="rounded-xl max-w-[250px] mx-auto" referrerPolicy="no-referrer" />
            </a>
          </div>
          <h2 className="text-3xl md:text-5xl mb-6">Jetzt Online-Sprechstunde nutzen</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Für erste Einschätzungen und Folgekonsultationen – bequem von zu Hause aus. Klicken Sie auf den Button oder rufen Sie uns an.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://www.dr-janssen-sinn.de/Kontakt/Online-Sprechstunde" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-lg active:scale-95">
              Zur Online-Sprechstunde
            </a>
            <a href="tel:0293282902" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
              02932-82902 anrufen
            </a>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Diagnostik Details */}
      <section id="diagnostik" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Modernste Diagnostik unter einem Dach</h2>
            <p className="text-lg text-dark/60">Schnelle Ergebnisse für eine gezielte Behandlung.</p>
          </div>

          <div className="space-y-4">
            {[
              { title: "Hauseigenes Labor", content: "Schnelle Blutbild- und Urinanalysen direkt in der Praxis – ohne Wartezeit auf externe Labore. Das ermöglicht uns eine sofortige Therapieeinleitung in kritischen Situationen." },
              { title: "Röntgen", content: "Digitales Röntgen für präzise Diagnosen bei Knochen, Gelenken und inneren Organen. Die Bilder sind sofort verfügbar und können am Bildschirm detailliert ausgewertet werden." },
              { title: "Dentalröntgen", content: "Spezielles Zahnröntgen zur Beurteilung von Zahnwurzeln und Kieferknochen. Unerlässlich für die moderne Tierzahnheilkunde, um verborgene Schmerzquellen zu finden." },
              { title: "Ultraschall", content: "Schonende Echtzeit-Bildgebung zur Beurteilung von Organen und Weichteilen. Besonders wichtig für Herz- und Bauchraumuntersuchungen." },
              { title: "EKG", content: "Herzrhythmusüberwachung für präzise Herzdiagnostik. Wir führen sowohl Ruhe-EKGs als auch Belastungstests durch." },
              { title: "Blutdruckmessung", content: "Nicht-invasive Blutdruckkontrolle – besonders wichtig bei älteren Tieren, Katzen mit Nierenerkrankungen oder Herzpatienten." },
            ].map((item, i) => (
              <div key={i} className={`border border-primary/10 rounded-xl overflow-hidden transition-all ${openAccordion === i ? 'shadow-md ring-1 ring-primary/20' : ''}`}>
                <button 
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-light transition-colors"
                  onClick={() => toggleAccordion(i)}
                >
                  <span className="text-lg font-bold text-dark">{item.title}</span>
                  <ChevronDown className={`text-primary transition-transform duration-300 ${openAccordion === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`accordion-content ${openAccordion === i ? 'accordion-open' : ''}`}>
                  <div className="p-6 pt-0 text-dark/70 leading-relaxed border-t border-primary/5 bg-bg-light/30">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Öffnungszeiten + Kontakt */}
      <section id="oeffnungszeiten" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Öffnungszeiten */}
            <div className="space-y-8">
              <h2 className="text-3xl text-primary">Öffnungszeiten</h2>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-primary/5">
                <table className="w-full text-left">
                  <tbody>
                    {OPENING_HOURS.map((item, i) => {
                      const isToday = new Date().getDay() === (i + 1) % 7;
                      return (
                        <tr key={item.day} className={`border-b border-primary/5 ${isToday ? 'bg-primary/5' : ''}`}>
                          <td className="p-4 font-bold text-dark">{item.day}</td>
                          <td className="p-4 text-dark/70">{item.hours}</td>
                          {isToday && (
                            <td className="p-4 text-right">
                              <span className="text-[10px] font-bold uppercase tracking-widest bg-primary text-white px-2 py-1 rounded">Heute</span>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-yellow-600 shrink-0" size={24} />
                  <p className="text-yellow-800 font-medium">
                    <strong>Wichtiger Hinweis:</strong> Bitte immer vorher telefonisch anmelden. Wir sind eine reine Terminpraxis, um Wartezeiten für Sie und Stress für Ihr Tier zu minimieren.
                  </p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div id="kontakt" className="space-y-8">
              <h2 className="text-3xl text-primary">Kontakt & Anfahrt</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Adresse</p>
                    <p className="text-dark/70">Kardinal-Jaeger-Str. 16<br />59757 Arnsberg-Bergheim</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Telefon</p>
                    <a href="tel:0293282902" className="text-2xl font-bold text-primary hover:underline">02932-82902</a>
                    <p className="text-xs text-dark/50 mt-1">Medikamente bitte telefonisch vorbestellen.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="bg-bg-light rounded-xl h-48 flex flex-col items-center justify-center text-center p-6 border border-primary/10">
                    <MapPin className="text-dark/30 mb-2" size={32} />
                    <p className="text-dark/60 text-sm mb-4">Kardinal-Jaeger-Str. 16, 59757 Arnsberg</p>
                    <a 
                      href="https://maps.google.com/?q=Kardinal-Jaeger-Str.+16,+59757+Arnsberg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-dark text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-dark/90 transition-all"
                    >
                      Karte laden & Route planen
                    </a>
                  </div>
                </div>

                <a href="tel:0293282902" className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
                  Jetzt Termin anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notfall Box */}
      <section id="notfall" className="bg-[#C0392B] py-12 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full animate-pulse">
              <AlertCircle size={40} />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Im Notfall außerhalb der Öffnungszeiten</h2>
          <p className="text-lg text-white/90 mb-6">
            Bitte rufen Sie zunächst unter <strong>02932-82902</strong> an. Für tierärztliche Notfälle außerhalb der Sprechzeiten wenden Sie sich an den tierärztlichen Notdienst in Ihrer Region.
          </p>
          <a href="https://www.dr-janssen-sinn.de/Tipps-fuer-den-Tierarztbesuch" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/40 px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-all">
            Tipps für den Tierarztbesuch
          </a>
        </div>
      </section>

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
              <div className="flex space-x-4">
                <a href="tel:0293282902" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                  <Phone size={20} />
                </a>
                <a href="https://maps.google.com/?q=Kardinal-Jaeger-Str.+16,+59757+Arnsberg" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                  <MapPin size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg uppercase tracking-wider">Leistungen</h4>
              <ul className="space-y-3">
                {['Diagnostik & Labor', 'Operationen', 'Zahnmedizin', 'Vorsorge', 'Online-Sprechstunde'].map((item) => (
                  <li key={item}>
                    <a href="#leistungen" className="text-secondary/60 hover:text-white transition-colors">{item}</a>
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
