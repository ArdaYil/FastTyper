import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";
import Word from "./Word";

const WordField = () => {
  const currentWords = useStore(useWordStore, (store) => store.currentWords);
  const rightWords = useStore(useWordStore, (store) => store.rightWords);
  const wrongWords = useStore(useWordStore, (store) => store.wrongWords);

  const getState = (index: number) => {
    if (rightWords.find((i) => i === index) != undefined) return "RIGHT";
    if (wrongWords.find((i) => i === index) != undefined) return "WRONG";

    return "NEUTRAL";
  };

  return (
    <div className="typing__word-field">
      {currentWords.map((word, index) => (
        <Word state={getState(index)} key={word} word={word} />
      ))}
    </div>
  );
};

export default WordField;
