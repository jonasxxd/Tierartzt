import React from 'react';
import { 
  AlertCircle, 
  ChevronLeft,
  Phone,
  Clock,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Notfall() {
  return (
    <div className="pt-32 pb-24">
      <section className="bg-white py-16 border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary font-bold mb-8 hover:translate-x-1 transition-transform">
            <ChevronLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="text-4xl md:text-6xl text-primary mb-6">Notfallberatung</h1>
          <p className="text-xl text-dark/70 max-w-3xl leading-relaxed">
            Was tun im Notfall? Hier finden Sie wichtige Informationen und Kontakte.
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
              <div className="bg-[#C0392B] text-white p-10 rounded-3xl shadow-lg">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-white/20 p-4 rounded-2xl">
                    <AlertCircle size={32} />
                  </div>
                  <h2 className="text-3xl">Erste Schritte</h2>
                </div>
                <div className="space-y-6 text-white/90">
                  <p className="text-xl font-bold">1. Ruhe bewahren!</p>
                  <p>Ihr Tier spürt Ihre Aufregung. Versuchen Sie, besonnen zu handeln.</p>
                  <p className="text-xl font-bold">2. Telefonische Voranmeldung</p>
                  <p>Rufen Sie uns immer zuerst an, damit wir alles für Ihr Eintreffen vorbereiten können.</p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5">
                <h3 className="text-2xl text-primary mb-6">Wichtige Rufnummern</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-bg-light rounded-xl">
                    <span className="font-bold">Unsere Praxis:</span>
                    <a href="tel:0293282902" className="text-primary font-bold">02932-82902</a>
                  </div>
                  <p className="text-sm text-dark/60 italic">
                    Außerhalb unserer Sprechzeiten erfahren Sie über unseren Anrufbeantworter, welcher Notdienst aktuell zuständig ist.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-4">Anfahrt</h3>
                <p className="text-dark/70 mb-4">
                  Kardinal-Jaeger-Str. 16<br />
                  59757 Arnsberg-Bergheim
                </p>
                <div className="aspect-video bg-primary/5 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary/20" size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
