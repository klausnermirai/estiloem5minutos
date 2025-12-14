import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AdviceTone } from "../types";

// Initialize client securely using process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStyleMantra = async (tone: AdviceTone): Promise<{ mantra: string; tip: string }> => {
  if (!process.env.API_KEY) {
    // Fallback if no API key is present (for demo purposes if env is missing)
    return {
      mantra: "Hoje eu escolho me sentir radiante e capaz.",
      tip: "Use um acessório que conte uma história sobre quem você é."
    };
  }

  try {
    const prompt = `
      Você é uma consultora de imagem e especialista em autoestima feminina.
      O contexto é o curso "Estilo em 5 Minutos", que ensina planejamento de look, meditação rápida e elegância prática.
      
      A usuária está buscando uma vibração de: "${tone}".
      
      Gere uma resposta JSON curta com dois campos:
      1. "mantra": Uma frase de afirmação positiva curta (máximo 15 palavras) para ela repetir enquanto se veste.
      2. "tip": Uma dica de estilo prática e rápida (máximo 20 palavras) relacionada a essa vibração.
      
      Responda APENAS o JSON.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const json = JSON.parse(text);
    return {
      mantra: json.mantra || "Sua confiança é seu melhor acessório.",
      tip: json.tip || "Respire fundo e sorria ao se olhar no espelho."
    };

  } catch (error) {
    console.error("Error generating style tip:", error);
    return {
      mantra: "Eu mereço me sentir bonita todos os dias.",
      tip: "Aposte em uma terceira peça para elevar o visual instantaneamente."
    };
  }
};