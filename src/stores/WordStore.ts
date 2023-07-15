import { create } from "zustand";

const wordsAtOnce = 20;

interface WordStore {
  rightWords: number;
  wrongWords: number;
  startTime: number;
  allWords: string[];
  currentWords: string[];
  resetStore: (words: string[]) => void;
  next: () => string[];
}

const getWords = (words: string[], totalWords: number) =>
  words.filter((_, i) => i >= totalWords && i < totalWords + wordsAtOnce);

const useWordStore = create<WordStore>((set, get) => ({
  rightWords: 0,
  wrongWords: 0,
  startTime: 0,
  allWords: [],
  currentWords: [],
  resetStore: (words: string[]) =>
    set(() => ({
      allWords: words,
      rightWords: 0,
      wrongWords: 0,
      startTime: new Date().getTime(),
      currentWords: getWords(words, 0),
    })),
  next: () => getWords(get().allWords, get().rightWords + get().wrongWords),
}));

export default useWordStore;
