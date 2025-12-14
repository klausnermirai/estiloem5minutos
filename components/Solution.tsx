import React from 'react';
import { Sparkles, Heart, CheckCircle } from 'lucide-react';
import { EditableText, EditableImage } from './ui/Editable';

export const Solution: React.FC = () => {
  return (
    <div id="details" className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-serif mb-6">
              <EditableText 
                id="solution_headline" 
                defaultText='Apresentando: <span class="text-brand-600">Estilo em 5 Minutos</span>' 
                tag="span"
              />
            </h2>
            <div className="text-lg text-gray-600 mb-6">
              <EditableText 
                id="solution_desc" 
                defaultText="Não é apenas sobre roupas. É sobre resgatar quem você é em meio ao caos do dia a dia. Uma Masterclass de 1 hora, direta ao ponto, onde eu te ensino:"
                tag="p"
                multiline={true}
              />
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3 text-lg text-gray-700">
                  <strong><EditableText id="solution_li1_title" defaultText="Planejamento Estratégico:" /></strong>{' '}
                  <EditableText id="solution_li1_desc" defaultText="Como separar seu look na noite anterior para acordar tranquila." />
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Heart className="h-6 w-6 text-brand-500" />
                </div>
                <div className="ml-3 text-lg text-gray-700">
                  <strong><EditableText id="solution_li2_title" defaultText="Ritual de Autoamor:" /></strong>{' '}
                  <EditableText id="solution_li2_desc" defaultText="Técnicas de meditação rápida para começar o dia centrada e em paz." />
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-gold-500" />
                </div>
                <div className="ml-3 text-lg text-gray-700">
                  <strong><EditableText id="solution_li3_title" defaultText="Fórmula da Elegância Prática:" /></strong>{' '}
                  <EditableText id="solution_li3_desc" defaultText="O que ter e o que fazer para estar bem vestida repetidamente, sem esforço." />
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <p className="text-gray-500 italic border-l-4 border-brand-300 pl-4 py-2 bg-white rounded-r-md">
                "<EditableText 
                   id="solution_quote" 
                   defaultText="Eu vou te ensinar a repetição exata que você precisa fazer todos os dias para se sentir confiante, elegante e bonita."
                   multiline={true}
                 />"
              </p>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 relative">
             <div className="absolute -inset-4 bg-brand-200 rounded-xl transform -rotate-2 opacity-50"></div>
             <EditableImage 
               id="solution_image"
               defaultSrc="https://picsum.photos/600/600" 
               alt="Detalhe de organização de roupas e acessórios" 
               className="relative rounded-xl shadow-xl w-full object-cover"
             />
          </div>
        </div>
      </div>
    </div>
  );
};