import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";
import Word from "./Word";

interface Props {
  words: string[];
}

const WordField = ({ words }: Props) => {
  const currentWords = useStore(useWordStore, (store) => store.currentWords);

  return (
    <div className="name-field">
      {currentWords.map((word) => (
        <Word key={word} word={word} />
      ))}
    </div>
  );
};

export default WordField;
