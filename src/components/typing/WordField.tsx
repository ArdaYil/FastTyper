import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";
import Word from "./Word";

const WordField = () => {
  const currentWords = useStore(useWordStore, (store) => store.currentWords);
  const rightWords = useStore(useWordStore, (store) => store.rightWords);
  const wrongWords = useStore(useWordStore, (store) => store.wrongWords);

  const getState = (word: string) => {
    word = word.replace("\r", "");

    if (rightWords.find((i) => i === word)) return "RIGHT";
    if (wrongWords.find((i) => i === word)) return "WRONG";

    return "NEUTRAL";
  };

  return (
    <div className="typing__word-field">
      {currentWords.map((word) => (
        <Word state={getState(word)} key={word} word={word} />
      ))}
    </div>
  );
};

export default WordField;
