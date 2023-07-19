import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";
import { ChangeEvent } from "react";

const TypeField = () => {
  const currentWord = useStore(useWordStore, (store) => store.currentWord);
  const getWordToType = useStore(useWordStore, (store) => store.getWordToType);
  const next = useStore(useWordStore, (store) => store.next);
  const appendRightWords = useStore(
    useWordStore,
    (store) => store.appendRightWords
  );
  const appendWrongWords = useStore(
    useWordStore,
    (store) => store.appendWrongWords
  );

  const setCurrentWord = useStore(
    useWordStore,
    (store) => store.setCurrentWord
  );

  const getCurrentWordIndex = useStore(
    useWordStore,
    (store) => store.getCurrentWordIndex
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(" ")) {
      const word = e.target.value.trim();
      const wordToType = getWordToType().trim();
      console.log(word, wordToType, word === wordToType);
      if (word !== wordToType) {
        appendWrongWords(getCurrentWordIndex());
      } else {
        appendRightWords(getCurrentWordIndex());
      }

      setCurrentWord("");
      next();
      return;
    }

    setCurrentWord(e.target.value);
  };

  return (
    <input
      onChange={handleChange}
      value={currentWord}
      className="typing__type-field"
    />
  );
};

export default TypeField;
