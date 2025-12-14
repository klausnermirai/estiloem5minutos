import React from 'react';
import { Check, ShieldCheck, CreditCard } from 'lucide-react';
import { EditableText } from './ui/Editable';

export const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 font-serif">
          <EditableText id="pricing_headline" defaultText="O Investimento na Sua Autoestima" />
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          <EditableText id="pricing_subhead" defaultText="Menos que o valor de um lanche no fim de semana." />
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto rounded-2xl shadow-xl bg-white overflow-hidden border-2 border-brand-100 relative">
        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
          <EditableText id="pricing_badge" defaultText="Oferta Limitada" />
        </div>
        
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="flex justify-center">
            <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-brand-100 text-brand-600">
              <EditableText id="pricing_access" defaultText="Acesso Vitalício" />
            </span>
          </div>
          <div className="mt-4 flex justify-center items-baseline text-6xl font-extrabold text-gray-900 font-serif">
            <span className="ml-1 text-2xl font-medium text-gray-500">R$</span>
            <EditableText id="pricing_value" defaultText="37,00" />
          </div>
          <p className="mt-2 text-center text-sm text-gray-400">
            <EditableText id="pricing_payment_info" defaultText="Pagamento único. Sem mensalidades." />
          </p>
        </div>
        
        <div className="flex flex-col px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <p className="ml-3 text-base text-gray-700">
                <EditableText id="pricing_feat_1" defaultText='Masterclass "Estilo em 5 Minutos" (1 hora)' />
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <p className="ml-3 text-base text-gray-700">
                <EditableText id="pricing_feat_2" defaultText="Técnicas de Meditação Guiada para Autoestima" />
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <p className="ml-3 text-base text-gray-700">
                 <EditableText id="pricing_feat_3" defaultText="Planner de Looks (PDF para impressão)" />
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <p className="ml-3 text-base text-gray-700">
                <EditableText id="pricing_feat_4" defaultText="Acesso imediato e vitalício" />
              </p>
            </li>
          </ul>
          
          <div className="mt-8">
            <button className="w-full flex items-center justify-center px-5 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
              <CreditCard className="w-6 h-6 mr-2" />
              <EditableText id="pricing_cta" defaultText="COMPRAR AGORA POR R$ 37" />
            </button>
          </div>
          
          <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
            <ShieldCheck className="w-5 h-5 text-gray-400 mr-2" />
            <EditableText id="pricing_guarantee" defaultText="Garantia de 7 dias incondicional" />
          </div>
        </div>
      </div>
    </div>
  );
};