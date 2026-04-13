import React from 'react';
import { 
  FlaskConical, 
  Activity, 
  ChevronLeft,
  ShieldCheck,
  Search,
  Microscope,
  Zap,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Diagnostik() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="bg-white py-16 border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary font-bold mb-8 hover:translate-x-1 transition-transform">
            <ChevronLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="text-4xl md:text-6xl text-primary mb-6">Diagnostik & Hauseigenes Labor</h1>
          <p className="text-xl text-dark/70 max-w-3xl leading-relaxed">
            Präzise Diagnosen sind der Grundstein für eine erfolgreiche Behandlung. In unserer Praxis in Arnsberg-Bergheim setzen wir auf modernste Technik und jahrelange Erfahrung.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Hauseigenes Labor */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-12"
            >
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                    <FlaskConical size={32} />
                  </div>
                  <h2 className="text-3xl text-primary">Hauseigenes Labor</h2>
                </div>
                <div className="prose prose-lg text-dark/80 max-w-none space-y-6">
                  <p>
                    Zeit ist oft ein entscheidender Faktor. Durch unser voll ausgestattetes hauseigenes Labor können wir viele Untersuchungen direkt vor Ort durchführen. Das bedeutet für Sie und Ihr Tier: <strong>Keine langen Wartezeiten</strong> auf externe Labore und eine <strong>sofortige Therapieeinleitung</strong>.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-bg-light p-6 rounded-2xl border border-primary/5">
                      <h3 className="font-bold text-primary mb-3 flex items-center space-x-2">
                        <Activity size={18} />
                        <span>Blutanalysen</span>
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Großes Blutbild (rote & weiße Blutkörperchen)</li>
                        <li>• Organprofile (Leber, Niere, Bauchspeicheldrüse)</li>
                        <li>• Elektrolyte & Blutzucker</li>
                        <li>• Schilddrüsenwerte</li>
                      </ul>
                    </div>
                    <div className="bg-bg-light p-6 rounded-2xl border border-primary/5">
                      <h3 className="font-bold text-primary mb-3 flex items-center space-x-2">
                        <Search size={18} />
                        <span>Urin- & Kotuntersuchungen</span>
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Harnstatus & Sedimentanalyse</li>
                        <li>• Parasitologische Kotuntersuchungen</li>
                        <li>• Schnelltests auf Giardien</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bildgebende Verfahren */}
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                    <Zap size={32} />
                  </div>
                  <h2 className="text-3xl text-primary">Digitales Röntgen & Ultraschall</h2>
                </div>
                <div className="space-y-8">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-dark mb-2">Digitales Röntgen</h3>
                    <p className="text-dark/70">
                      Unsere moderne digitale Röntgenanlage liefert innerhalb von Sekunden hochauflösende Bilder. Die Strahlenbelastung ist im Vergleich zum herkömmlichen Röntgen deutlich reduziert.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-dark mb-2">Ultraschall (Sonographie)</h3>
                    <p className="text-dark/70">
                      Eine schmerzfreie und schonende Methode zur Untersuchung der inneren Organe in Echtzeit. Besonders wertvoll für die Beurteilung der Bauchorgane.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-dark mb-2">Dentalröntgen</h3>
                    <p className="text-dark/70">
                      Zahnprobleme liegen oft unter dem Zahnfleisch verborgen. Mit unserem speziellen Dentalröntgengerät können wir Zahnwurzeln und Kieferknochen präzise beurteilen.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-serif mb-4">Vorteile</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <ShieldCheck className="shrink-0 text-accent" size={24} />
                    <span><strong>Schnelligkeit:</strong> Ergebnisse oft innerhalb von 15-30 Min.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Microscope className="shrink-0 text-accent" size={24} />
                    <span><strong>Präzision:</strong> Modernste Geräte vor Ort.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="shrink-0 text-accent" size={24} />
                    <span><strong>Erfahrung:</strong> Über 38 Jahre Expertise.</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <a href="tel:0293282902" className="block text-center bg-white text-primary py-3 rounded-full font-bold hover:bg-secondary transition-colors">
                    02932-82902 anrufen
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
