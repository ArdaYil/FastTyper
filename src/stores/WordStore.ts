import { create } from "zustand";

const wordsAtOnce = 20;

interface WordStore {
  rightWords: string[];
  wrongWords: string[];
  startTime: number;
  allWords: string[];
  currentWord: string;
  currentWords: string[];
  getWordToType: () => string;
  appendRightWords: (word: string) => void;
  appendWrongWords: (word: string) => void;
  resetRightWords: () => void;
  resetWrongWords: () => void;
  resetStore: (words: string[]) => void;
  setCurrentWord: (word: string) => void;
  next: () => void;
  getCurrentWordIndex: () => number;
}

const getWords = (words: string[], totalWords: number) =>
  words.filter((_, i) => i >= totalWords);

const useWordStore = create<WordStore>((set, get) => ({
  rightWords: [],
  wrongWords: [],
  startTime: 0,
  allWords: [],
  currentWords: [],
  currentWord: "",
  getWordToType: () => {
    const state = get();
    const rightWords = state.rightWords.length;
    const wrongWords = state.wrongWords.length;

    return state.allWords[rightWords + wrongWords];
  },
  setCurrentWord: (word: string) =>
    set((store) => ({ ...store, currentWord: word })),
  resetStore: (words: string[]) =>
    set((store) => ({
      ...store,
      allWords: words,
      rightWords: [],
      wrongWords: [],
      startTime: new Date().getTime(),
      currentWords: [...words],
    })),
  next: () =>
    set((store) => ({
      ...store,
      currentWords: getWords(
        get().allWords,
        get().rightWords.length + get().wrongWords.length
      ),
    })),
  appendRightWords: (word: string) =>
    set((store) => ({ ...store, rightWords: [...get().rightWords, word] })),
  appendWrongWords: (word: string) =>
    set((store) => ({ ...store, wrongWords: [...get().wrongWords, word] })),
  resetRightWords: () => set((store) => ({ ...store, rightWords: [] })),
  resetWrongWords: () => set((store) => ({ ...store, wrongWords: [] })),
  getCurrentWordIndex: () => get().rightWords.length + get().wrongWords.length,
}));

export default useWordStore;
