import React from 'react';
import { Clock, Frown, Layers } from 'lucide-react';
import { EditableText } from './ui/Editable';

export const PainPoints: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">
            <EditableText id="pain_pretitle" defaultText="Identificou?" />
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif">
            <EditableText id="pain_title" defaultText="Você sente que nunca tem tempo para você?" />
          </p>
          <div className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            <EditableText 
              id="pain_subtitle" 
              defaultText='A rotina engole nossos desejos e, quando percebemos, estamos nos vestindo no "piloto automático", sem nos sentirmos bonitas de verdade.'
              tag="p"
              multiline={true}
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                <EditableText id="pain_card1_title" defaultText="A Correria da Manhã" />
              </h3>
              <div className="mt-2 text-base text-gray-500">
                <EditableText 
                  id="pain_card1_desc" 
                  defaultText='Acorda atrasada, pega a primeira roupa que vê pela frente e passa o dia se sentindo desconfortável ou "mal arrumada".'
                  tag="p"
                  multiline={true}
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-600 mb-4">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                <EditableText id="pain_card2_title" defaultText="Guarda-Roupa Cheio, Nada para Vestir" />
              </h3>
              <div className="mt-2 text-base text-gray-500">
                <EditableText 
                  id="pain_card2_desc" 
                  defaultText="Você tem roupas, mas não consegue combiná-las de forma que valorize sua beleza e seu corpo atual."
                  tag="p"
                  multiline={true}
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-600 mb-4">
                <Frown className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                 <EditableText id="pain_card3_title" defaultText="Baixa Autoestima" />
              </h3>
              <div className="mt-2 text-base text-gray-500">
                <EditableText 
                  id="pain_card3_desc" 
                  defaultText="Olha no espelho e não reconhece a mulher potente que existe aí dentro. Falta aquele brilho no olhar."
                  tag="p"
                  multiline={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};