import React from 'react';
import { ArrowRight, Clock, Star, PlayCircle } from 'lucide-react';
import { EditableText, EditableImage } from './ui/Editable';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-brand-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-200 bg-white shadow-sm text-brand-700 text-sm font-bold mb-6 animate-fade-in-up">
                <Clock className="w-4 h-4 mr-2 text-brand-500" />
                <EditableText 
                  id="hero_badge" 
                  defaultText='Pare de sair de casa se sentindo "mais ou menos"' 
                />
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif leading-tight">
                <EditableText 
                  id="hero_headline" 
                  defaultText='O Segredo para se <span class="text-brand-600">Vestir Bem em 5 Minutos</span> (Mesmo na Correria)'
                  tag="span"
                />
              </h1>
              <div className="mt-4 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <EditableText 
                  id="hero_description" 
                  defaultText="Transforme sua manhã caótica em um ritual de autoestima. Aprenda a planejar looks elegantes, meditar e se sentir poderosa todos os dias, sem gastar horas na frente do espelho."
                  tag="p"
                  multiline={true}
                />
              </div>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="#pricing"
                    className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-brand-600 hover:bg-brand-700 md:text-lg transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <EditableText id="hero_cta_primary" defaultText="Quero Meu Estilo de Volta" />
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0">
                  <a
                    href="#details"
                    className="w-full flex items-center justify-center px-8 py-4 border-2 border-brand-100 text-base font-medium rounded-full text-brand-700 bg-transparent hover:bg-brand-50 md:text-lg transition-colors"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    <EditableText id="hero_cta_secondary" defaultText="Como funciona?" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-2">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://picsum.photos/100/100?random=10" alt="" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://picsum.photos/100/100?random=11" alt="" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://picsum.photos/100/100?random=12" alt="" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://picsum.photos/100/100?random=13" alt="" />
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-medium text-gray-900">Aprovado por +1.000 mulheres</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100 h-full">
        <EditableImage 
           id="hero_main_image"
           defaultSrc="https://picsum.photos/800/1200?grayscale"
           alt="Mulher confiante se vestindo"
           className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
           containerClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-transparent lg:via-brand-50/20 pointer-events-none"></div>
      </div>
    </div>
  );
};