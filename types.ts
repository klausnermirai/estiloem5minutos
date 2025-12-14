import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export enum AdviceTone {
  CONFIDENT = 'Confiança e Poder',
  CALM = 'Leveza e Tranquilidade',
  CREATIVE = 'Criatividade e Ousadia',
  ELEGANT = 'Elegância Clássica'
}