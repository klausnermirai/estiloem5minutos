import React from 'react';
import { EditableText, EditableImage } from './ui/Editable';

export const BeforeAfter: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif">
            <EditableText id="ba_title" defaultText="Transformações Reais" />
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            <EditableText id="ba_subtitle" defaultText="Veja como a confiança muda a postura e a elegância de uma mulher." />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 relative h-96">
               <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <EditableImage 
                      id="ba_1_before"
                      defaultSrc="https://picsum.photos/400/600?random=1" 
                      className="object-cover w-full h-full filter grayscale contrast-75" 
                      alt="Antes" 
                      containerClassName="w-full h-full"
                    />
                    <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">ANTES</span>
                  </div>
                  <div className="w-1/2 relative">
                    <EditableImage 
                      id="ba_1_after"
                      defaultSrc="https://picsum.photos/400/600?random=2" 
                      className="object-cover w-full h-full" 
                      alt="Depois" 
                      containerClassName="w-full h-full"
                    />
                    <span className="absolute bottom-2 left-2 bg-brand-600 text-white text-xs px-2 py-1 rounded">DEPOIS</span>
                  </div>
               </div>
            </div>
            <p className="mt-4 text-gray-700 italic">
              "<EditableText id="ba_1_quote" defaultText="Antes eu me escondia em roupas largas. Hoje me sinto poderosa até de calça jeans." />" — <strong><EditableText id="ba_1_author" defaultText="Mariana S." /></strong>
            </p>
          </div>

          <div className="group relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 relative h-96">
               <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <EditableImage 
                      id="ba_2_before"
                      defaultSrc="https://picsum.photos/400/600?random=3" 
                      className="object-cover w-full h-full filter grayscale contrast-75" 
                      alt="Antes" 
                      containerClassName="w-full h-full"
                    />
                    <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">ANTES</span>
                  </div>
                  <div className="w-1/2 relative">
                     <EditableImage 
                      id="ba_2_after"
                      defaultSrc="https://picsum.photos/400/600?random=4" 
                      className="object-cover w-full h-full" 
                      alt="Depois" 
                      containerClassName="w-full h-full"
                    />
                    <span className="absolute bottom-2 left-2 bg-brand-600 text-white text-xs px-2 py-1 rounded">DEPOIS</span>
                  </div>
               </div>
            </div>
             <p className="mt-4 text-gray-700 italic">
               "<EditableText id="ba_2_quote" defaultText="Aprendi que 5 minutos é tudo que preciso para mudar meu dia. Minha autoestima está renovada!" />" — <strong><EditableText id="ba_2_author" defaultText="Carla M." /></strong>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};