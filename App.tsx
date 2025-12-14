import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { BeforeAfter } from './components/BeforeAfter';
import { GeminiStyleTeaser } from './components/GeminiStyleTeaser';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AdminProvider } from './context/AdminContext';
import { AdminControl } from './components/AdminControl';
import { EditableText } from './components/ui/Editable';

export default function App() {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <AdminControl />
        
        {/* Sticky Top Bar for Urgency/CTA on scroll */}
        <div className="fixed top-0 inset-x-0 z-40 bg-brand-900 text-white text-center py-2.5 text-xs sm:text-sm font-medium shadow-md">
          <span className="animate-pulse mr-2">🔥</span> 
          <EditableText id="top_bar_text" defaultText="Oferta especial: Curso completo de R$ 97,00 por <span class='font-bold text-gold-400'>apenas R$ 37,00</span> hoje!" />
        </div>

        <div className="pt-10"> {/* Padding for sticky bar */}
          <Hero />
          <PainPoints />
          <Solution />
          <GeminiStyleTeaser />
          <BeforeAfter />
          
          {/* Testimonials text section with better styling */}
          <div className="bg-brand-50 py-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
               <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                     <circle cx="2" cy="2" r="1" className="text-brand-500" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#pattern-circles)" />
               </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">O que dizem quem já aplicou o método</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-left transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex text-gold-500 mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-6 text-lg italic">
                    "<EditableText id="testim_1_text" defaultText="Eu gastava 40 minutos pra escolher uma roupa e saía insatisfeita. Hoje demoro 5 e me sinto linda. O módulo de meditação mudou minha ansiedade matinal. Vale cada centavo!" multiline={true} />"
                  </p>
                  <div className="flex items-center">
                     <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold mr-3">JC</div>
                     <div>
                        <p className="font-bold text-gray-900"><EditableText id="testim_1_name" defaultText="Juliana Costa" /></p>
                        <p className="text-xs text-gray-500">Aluna há 2 meses</p>
                     </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-left transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex text-gold-500 mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-6 text-lg italic">
                    "<EditableText id="testim_2_text" defaultText="Por 37 reais eu não esperava tanto conteúdo. A técnica de planejamento salvou minhas manhãs com as crianças. Me sinto uma nova mulher." multiline={true} />"
                  </p>
                  <div className="flex items-center">
                     <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold mr-3">CM</div>
                     <div>
                        <p className="font-bold text-gray-900"><EditableText id="testim_2_name" defaultText="Carla Mendes" /></p>
                        <p className="text-xs text-gray-500">Aluna há 1 mês</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <About />
          <Pricing />
          <Footer />
        </div>
      </div>
    </AdminProvider>
  );
}