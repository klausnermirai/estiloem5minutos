import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-xl font-serif font-bold text-brand-400 mb-4">Estilo em 5 Minutos</p>
        <div className="flex space-x-6 md:order-2 mb-4">
          <a href="#" className="text-gray-400 hover:text-gray-300">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-gray-300">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-gray-300">Contato</a>
        </div>
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Estilo em 5 Minutos. Todos os direitos reservados.
        </p>
        <p className="text-center text-xs text-gray-600 mt-2">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
          Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};