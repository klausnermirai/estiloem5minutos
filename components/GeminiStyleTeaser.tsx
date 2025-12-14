import React, { useState } from 'react';
import { generateStyleMantra } from '../services/geminiService';
import { AdviceTone } from '../types';
import { Sparkles, Loader2, Quote } from 'lucide-react';

export const GeminiStyleTeaser: React.FC = () => {
  const [selectedTone, setSelectedTone] = useState<AdviceTone | null>(null);
  const [result, setResult] = useState<{ mantra: string; tip: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!selectedTone) return;
    setLoading(true);
    setResult(null);
    const data = await generateStyleMantra(selectedTone);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-brand-700 to-brand-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles className="w-6 h-6 text-gold-400 mr-2" />
          <span className="font-semibold tracking-wider uppercase text-sm">IA Style Booster</span>
        </div>
        
        <h2 className="text-3xl font-serif font-bold mb-4">Experimente o Poder da Intenção</h2>
        <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
          No curso, ensinamos como alinhar sua mente com seu estilo. 
          Escolha como você quer se sentir hoje e receba uma <strong>dica exclusiva e um mantra</strong> gerado pela nossa Inteligência Artificial para te inspirar agora.
        </p>

        {!result ? (
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
            <p className="mb-6 text-lg font-medium">Como você deseja se sentir hoje?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {Object.values(AdviceTone).map((tone) => (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  className={`p-4 rounded-xl border transition-all duration-200 text-left hover:scale-105 ${
                    selectedTone === tone
                      ? 'bg-white text-brand-900 border-white shadow-lg'
                      : 'bg-transparent text-white border-white/30 hover:bg-white/10'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
            <button
              onClick={handleGenerate}
              disabled={!selectedTone || loading}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                !selectedTone || loading
                  ? 'bg-gray-500 cursor-not-allowed opacity-50'
                  : 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg hover:shadow-gold-500/50'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  Conectando com sua essência...
                </span>
              ) : (
                'Receber Meu Mantra & Dica'
              )}
            </button>
          </div>
        ) : (
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl animate-fade-in relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Quote size={120} />
             </div>
             
             <div className="relative z-10">
                <h3 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2">Seu Mantra do Dia</h3>
                <p className="text-3xl font-serif italic text-gray-800 mb-8">"{result.mantra}"</p>
                
                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500 text-left">
                  <h4 className="font-bold text-brand-800 flex items-center mb-2">
                    <Sparkles className="w-4 h-4 mr-2" /> Dica de Estilo Rápida:
                  </h4>
                  <p className="text-gray-700">{result.tip}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4">Gostou? Isso é só 1% do que você vai aprender no curso.</p>
                  <button 
                    onClick={() => { setResult(null); setSelectedTone(null); }}
                    className="text-brand-600 font-medium hover:text-brand-800 underline"
                  >
                    Tentar outra vibração
                  </button>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};