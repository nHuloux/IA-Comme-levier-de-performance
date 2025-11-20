import React from 'react';

export enum TabId {
  INTRO = 'intro',
  PROMPT = 'prompt',
  DATA = 'data',
  PROCESS = 'process',
  PLANNING = 'planning',
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video'
}

export interface PromptExercise {
  text: string;
  quality: 'Médiocre' | 'Moyenne' | 'Bonne' | 'Complexe';
  solution?: Record<string, string[]>;
}

export interface SlideData {
  title: string;
  content: React.ReactNode;
  image?: string;
}