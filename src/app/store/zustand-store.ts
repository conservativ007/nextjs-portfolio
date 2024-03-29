import { create } from 'zustand'

export interface State {
  language: 'ru' | 'en'
  toggleLanguage: (text: 'ru' | 'en') => void
}

export const languageStore = create<State>((set) => ({
  language: 'en',
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === 'ru' ? 'en' : 'ru',
    })),
}))
