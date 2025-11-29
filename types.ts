import { LucideIcon } from 'lucide-react';

export interface StructuredAnalysis {
  peopleImpact: string;    // Impacto en personas
  companyImpact: string;   // Impacto en empresas
  economicImpact: string;  // Impacto en actividad económica
  measuresTaken: string;   // Medidas tomadas
  measuresNeeded: string;  // Medidas necesarias
}

export interface InfoCardData {
  id: string;
  title: string;
  detail: string;
  icon?: LucideIcon;
  imageUrl: string;
  category: 'impact' | 'measure';
  sourceLinks: { title: string; url: string }[];
  statValue: string;
  statLabel: string;
  statPercentage: number;
  longDescription: string;
  keyPoints: string[];
  studentOpinion: string; // New field for student perspective
  analysis: StructuredAnalysis;
}