import React from 'react';

export const BeforeAfter: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif">Transformações Reais</h2>
          <p className="mt-4 text-lg text-gray-500">Veja como a confiança muda a postura e a elegância de uma mulher.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 relative">
               {/* Simulating a split screen before/after */}
               <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <img src="https://picsum.photos/400/600?random=1" className="object-cover w-full h-full filter grayscale contrast-75" alt="Antes" />
                    <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">ANTES</span>
                  </div>
                  <div className="w-1/2 relative">
                    <img src="https://picsum.photos/400/600?random=2" className="object-cover w-full h-full" alt="Depois" />
                    <span className="absolute bottom-2 left-2 bg-brand-600 text-white text-xs px-2 py-1 rounded">DEPOIS</span>
                  </div>
               </div>
            </div>
            <p className="mt-4 text-gray-700 italic">"Antes eu me escondia em roupas largas. Hoje me sinto poderosa até de calça jeans." — <strong>Mariana S.</strong></p>
          </div>

          <div className="group relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 relative">
               <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <img src="https://picsum.photos/400/600?random=3" className="object-cover w-full h-full filter grayscale contrast-75" alt="Antes" />
                    <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">ANTES</span>
                  </div>
                  <div className="w-1/2 relative">
                    <img src="https://picsum.photos/400/600?random=4" className="object-cover w-full h-full" alt="Depois" />
                    <span className="absolute bottom-2 left-2 bg-brand-600 text-white text-xs px-2 py-1 rounded">DEPOIS</span>
                  </div>
               </div>
            </div>
             <p className="mt-4 text-gray-700 italic">"Aprendi que 5 minutos é tudo que preciso para mudar meu dia. Minha autoestima está renovada!" — <strong>Carla M.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};