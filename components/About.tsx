import React from 'react';
import { EditableText, EditableImage } from './ui/Editable';

export const About: React.FC = () => {
  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-10 lg:mb-0">
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-24 h-24 rounded-full bg-brand-100 z-0"></div>
            <div className="absolute bottom-0 right-0 -mr-4 -mb-4 w-40 h-40 rounded-full bg-gold-100 z-0"></div>
            <EditableImage
              id="about_mentor_image"
              defaultSrc="https://picsum.photos/600/800?random=20"
              alt="Mentora de Estilo"
              className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          
          <div>
            <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase mb-2">
                <EditableText id="about_pretitle" defaultText="Quem vai te guiar" />
            </h2>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                <EditableText id="about_title" defaultText="Olá, eu sou a sua nova Mentora de Estilo" />
            </h3>
            
            <div className="prose prose-lg text-gray-500">
              <div className="mb-4">
                  <EditableText 
                    id="about_p1" 
                    defaultText="Por muito tempo, eu também olhava para o guarda-roupa cheio e sentia que não tinha nada para vestir. A correria do dia a dia, o trabalho e a casa consumiam todo o meu tempo, e minha autoestima ficava sempre em segundo plano."
                    tag="p"
                    multiline={true}
                  />
              </div>
              <div className="mb-4">
                  <EditableText 
                    id="about_p2" 
                    defaultText="Foi aí que desenvolvi o método <strong>Estilo em 5 Minutos</strong>. Eu descobri que não precisamos de horas para nos sentirmos bonitas. Precisamos de <span class='text-brand-600 font-bold'>estratégia e intenção</span>."
                    tag="p"
                    multiline={true}
                  />
              </div>
              <div className="mb-6">
                 <EditableText 
                    id="about_p3" 
                    defaultText="Hoje, ensino mulheres reais a resgatarem aquele momento sagrado de autocuidado, usando a moda como ferramenta de confiança, não de frustração."
                    tag="p"
                    multiline={true}
                  />
              </div>
              
              <div className="bg-gray-50 border-l-4 border-brand-500 p-4 rounded-r-lg">
                <p className="italic text-gray-700 font-medium">
                  "<EditableText id="about_quote" defaultText="Minha missão é fazer você se olhar no espelho todos os dias e dizer: Uau, eu estou pronta para conquistar o mundo!" />"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};