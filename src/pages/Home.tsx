import React from 'react';
import { 
  Phone, 
  Clock, 
  ChevronDown, 
  Stethoscope, 
  Scissors, 
  ShieldCheck, 
  Video, 
  AlertCircle,
  Award,
  GraduationCap,
  FlaskConical,
  Heart,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const IMAGES = {
  portrait: 'https://www.dr-janssen-sinn.de/.cm4all/uproc.php/0/.IMG_0682(1).JPG/picture-200?_=195194db75a',
  entrance: 'https://www.dr-janssen-sinn.de/.cm4all/uproc.php/0/Praxiseingang/.05_anhang5.jpg/picture-200?_=17087cb65f8',
  onlineConsultation: 'https://www.dr-janssen-sinn.de/.cm4all/uproc.php/0/.button-online-sprechstunde.jpg/picture-200?_=19560c0e70a',
};

const OPENING_HOURS = [
  { day: 'Montag', hours: '10:00–12:00 | 16:00–19:00' },
  { day: 'Dienstag', hours: '10:00–12:00 | 16:00–19:00' },
  { day: 'Mittwoch', hours: '16:00–19:00' },
  { day: 'Donnerstag', hours: 'Nur Sondertermine (lang)' },
  { day: 'Freitag', hours: '10:00–14:00' },
  { day: 'Samstag', hours: 'Geschlossen' },
  { day: 'Sonntag', hours: 'Geschlossen' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                Fachtierärztin · 38 Jahre Erfahrung
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img src={IMAGES.portrait} alt="Dr. med. vet. Guntrun Janßen-Sinn" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              <h2 className="text-3xl md:text-4xl text-primary">Ihre Tierärztin in Arnsberg-Bergheim</h2>
              <div className="space-y-4 text-lg text-dark/80 leading-relaxed border-l-4 border-primary/20 pl-6">
                <p>
                  Meine Kleintierpraxis ist fachtierärztlich geführt und ich blicke auf mehr als 38 Jahre praktische Erfahrung auf diesem Gebiet zurück.
                </p>
                <p>
                  Bei alltäglichen Problemen helfen wir Ihnen mit dem gleichen Engagement wie bei komplizierten Fragestellungen. Die Gesundheit und das Wohlbefinden Ihrer Tiere stehen bei uns an erster Stelle.
                </p>
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
            Umfassende medizinische Versorgung für Ihre Liebsten.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <FlaskConical />, 
                title: "Diagnostik & Labor", 
                desc: "Hauseigenes Labor, Röntgen, Dentalröntgen, Ultraschall, EKG, Blutdruckmessung.",
                link: "/diagnostik.html"
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
                link: "/diagnostik.html"
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
                desc: "Erste Einschätzung bequem von zu Hause — für unkomplizierte Fragen.",
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
                {service.link.startsWith('/') ? (
                  <Link to={service.link} className="text-primary font-bold flex items-center space-x-1 hover:underline">
                    <span>Mehr erfahren</span>
                    <ChevronDown size={16} className="-rotate-90" />
                  </Link>
                ) : (
                  <a href={service.link} className="text-primary font-bold flex items-center space-x-1 hover:underline">
                    <span>Mehr erfahren</span>
                    <ChevronDown size={16} className="-rotate-90" />
                  </a>
                )}
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://www.dr-janssen-sinn.de/Kontakt/Online-Sprechstunde" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-lg active:scale-95">
              Zur Online-Sprechstunde
            </a>
          </div>
        </div>
      </section>

      {/* Öffnungszeiten + Kontakt */}
      <section id="oeffnungszeiten" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Im Notfall außerhalb der Öffnungszeiten</h2>
          <p className="text-lg text-white/90 mb-6">
            Bitte rufen Sie zunächst unter <strong>02932-82902</strong> an.
          </p>
        </div>
      </section>
    </>
  );
}
