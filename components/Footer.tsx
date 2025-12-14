import React from 'react';
import { EditableText } from './ui/Editable';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-xl font-serif font-bold text-brand-400 mb-4">
           <EditableText id="footer_brand" defaultText="Estilo em 5 Minutos" />
        </p>
        <div className="flex space-x-6 md:order-2 mb-4">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <EditableText id="footer_link_insta" defaultText="Instagram" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <EditableText id="footer_link_face" defaultText="Facebook" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <EditableText id="footer_link_contact" defaultText="Contato" />
          </a>
        </div>
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <EditableText id="footer_copyright" defaultText="Estilo em 5 Minutos. Todos os direitos reservados." />
        </div>
        <div className="text-center text-xs text-gray-600 mt-2">
          <EditableText 
            id="footer_disclaimer" 
            defaultText="Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Os resultados podem variar de pessoa para pessoa." 
            multiline={true}
            className="block max-w-lg"
          />
        </div>
      </div>
    </footer>
  );
};