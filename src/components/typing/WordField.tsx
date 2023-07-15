import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";
import Word from "./Word";

const WordField = () => {
  const currentWords = useStore(useWordStore, (store) => store.currentWords);

  return (
    <div className="typing__word-field">
      {currentWords.map((word) => (
        <Word key={word} word={word} />
      ))}
    </div>
  );
};

export default WordField;
