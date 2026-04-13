import React from 'react';
import { 
  Stethoscope, 
  ChevronLeft,
  ShieldCheck,
  Activity,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Operationen() {
  return (
    <div className="pt-32 pb-24">
      <section className="bg-white py-16 border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary font-bold mb-8 hover:translate-x-1 transition-transform">
            <ChevronLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="text-4xl md:text-6xl text-primary mb-6">Operationen & Chirurgie</h1>
          <p className="text-xl text-dark/70 max-w-3xl leading-relaxed">
            In unserer Praxis führen wir eine Vielzahl von chirurgischen Eingriffen mit modernster Technik und höchster Sorgfalt durch.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-12"
            >
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                    <Stethoscope size={32} />
                  </div>
                  <h2 className="text-3xl text-primary">Chirurgische Leistungen</h2>
                </div>
                <div className="prose prose-lg text-dark/80 max-w-none space-y-6">
                  <p>
                    Wir führen sowohl Weichteiloperationen als auch Knochenchirurgie durch. Dabei legen wir besonderen Wert auf eine sichere Anästhesie und eine lückenlose Überwachung während des gesamten Eingriffs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-bg-light p-6 rounded-2xl border border-primary/5">
                      <h3 className="font-bold text-primary mb-3 flex items-center space-x-2">
                        <Activity size={18} />
                        <span>Weichteilchirurgie</span>
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Kastrationen</li>
                        <li>• Tumoroperationen</li>
                        <li>• Wundversorgungen</li>
                        <li>• Bauchhöhlenoperationen</li>
                      </ul>
                    </div>
                    <div className="bg-bg-light p-6 rounded-2xl border border-primary/5">
                      <h3 className="font-bold text-primary mb-3 flex items-center space-x-2">
                        <Heart size={18} />
                        <span>Anästhesie & Überwachung</span>
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Inhalationsnarkose</li>
                        <li>• Pulsoxymetrie</li>
                        <li>• EKG-Überwachung</li>
                        <li>• Individuelles Schmerzmanagement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-serif mb-4">Wichtige Infos</h3>
                <p className="mb-6 text-white/80">
                  Bitte bringen Sie Ihr Tier am OP-Tag nüchtern zu uns (ca. 12 Stunden vorher kein Futter). Wasser ist erlaubt.
                </p>
                <div className="pt-8 border-t border-white/20">
                  <a href="tel:0293282902" className="block text-center bg-white text-primary py-3 rounded-full font-bold hover:bg-secondary transition-colors">
                    Termin vereinbaren
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
