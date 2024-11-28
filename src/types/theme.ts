export type ThemeType = 'pastel' | 'neon' | 'elegant';

export interface Theme {
  id: ThemeType;
  name: string;
  background: string;
  cardBg: string;
  textColor: string;
  accentColor: string;
  buttonGradient: string;
}

export const themes: Record<ThemeType, Theme> = {
  pastel: {
    id: 'pastel',
    name: 'Pastel Paradise',
    background: 'from-blue-200 via-pink-200 to-yellow-200',
    cardBg: 'bg-white',
    textColor: 'text-pink-600',
    accentColor: 'text-pink-500',
    buttonGradient: 'from-purple-400 to-pink-400',
  },
  neon: {
    id: 'neon',
    name: 'Bold & Neon',
    background: 'from-purple-900 via-indigo-900 to-blue-900',
    cardBg: 'bg-black',
    textColor: 'text-green-400',
    accentColor: 'text-blue-400',
    buttonGradient: 'from-green-400 to-blue-400',
  },
  elegant: {
    id: 'elegant',
    name: 'Elegant & Classic',
    background: 'from-gray-900 via-gray-800 to-gray-900',
    cardBg: 'bg-gray-50',
    textColor: 'text-amber-700',
    accentColor: 'text-amber-500',
    buttonGradient: 'from-amber-500 to-amber-600',
  },
};