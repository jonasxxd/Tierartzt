import React from 'react';
import { 
  Scissors, 
  ChevronLeft,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Zahnmedizin() {
  return (
    <div className="pt-32 pb-24">
      <section className="bg-white py-16 border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary font-bold mb-8 hover:translate-x-1 transition-transform">
            <ChevronLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="text-4xl md:text-6xl text-primary mb-6">Zahnmedizin für Tiere</h1>
          <p className="text-xl text-dark/70 max-w-3xl leading-relaxed">
            Gesunde Zähne sind entscheidend für die allgemeine Gesundheit Ihres Tieres. Wir bieten professionelle Zahnbehandlungen für Hunde und Katzen.
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
                    <Scissors size={32} />
                  </div>
                  <h2 className="text-3xl text-primary">Zahnbehandlungen</h2>
                </div>
                <div className="prose prose-lg text-dark/80 max-w-none space-y-6">
                  <p>
                    Zahnerkrankungen werden oft unterschätzt, können aber Schmerzen und Entzündungen im ganzen Körper verursachen. Wir nutzen Dentalröntgen, um Probleme unter dem Zahnfleisch zu finden.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-bg-light p-6 rounded-2xl border border-primary/5">
                      <h3 className="font-bold text-primary mb-3 flex items-center space-x-2">
                        <Zap size={18} />
                        <span>Dentalröntgen</span>
                      </h3>
                      <p className="text-sm">Präzise Darstellung der Zahnwurzeln und des Kieferknochens zur Erkennung von FORL oder Parodontitis.</p>
                    </div>
                    <div className="bg-bg-light p-6 rounded-2xl border border-primary/5">
                      <h3 className="font-bold text-primary mb-3 flex items-center space-x-2">
                        <Activity size={18} />
                        <span>Zahnreinigung</span>
                      </h3>
                      <p className="text-sm">Professionelle Zahnsteinentfernung mittels Ultraschall und anschließende Politur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-serif mb-4">Symptome</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Mundgeruch</li>
                  <li>• Verändertes Fressverhalten</li>
                  <li>• Rotes Zahnfleisch</li>
                  <li>• Speicheln</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
