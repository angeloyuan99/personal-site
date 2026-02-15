// Added React import to satisfy the React.ReactNode namespace requirement
import React from 'react';

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  metrics: string[];
}

export enum Archetype {
  STRATEGIST = 'Strategist',
  OPTIMIZER = 'Optimizer',
  OPERATOR = 'Operator'
}
