import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";

interface Props {
  word: string;
}

const Word = ({ word }: Props) => {
  const currentWords = useStore(useWordStore, (store) => store.currentWords);
  const currentWord = useStore(useWordStore, (store) => store.currentWord);
  const rightWords = useStore(useWordStore, (store) => store.rightWords);
  const wrongWords = useStore(useWordStore, (store) => store.wrongWords);
  const totalWords = rightWords + wrongWords;

  const letters = word.split("");

  return <p className="word">{letters}</p>;
};

export default Word;
