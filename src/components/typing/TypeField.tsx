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

  const isLastWord = () => {
    const words = document.querySelectorAll(".word");

    let lastTop: number | undefined;

    try {
      words.forEach((word, index) => {
        if (index + 1 === words.length) throw "true";

        const theWord = word.textContent;
        const wordToType = getWordToType();

        if (theWord === wordToType) {
          lastTop = word.getBoundingClientRect().top;

          return;
        }

        if (
          lastTop !== undefined &&
          word.getBoundingClientRect().top !== lastTop
        ) {
          throw "true";
        } else throw "false";
      });
    } catch (ex) {
      if (ex === "true") return true;

      return false;
    }

    return false;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(" ")) {
      const word = e.target.value.trim();
      const wordToType = getWordToType().trim();
      const endOfLine = isLastWord();

      if (word !== wordToType) {
        appendWrongWords(wordToType);
      } else {
        appendRightWords(wordToType);
      }

      setCurrentWord("");

      if (endOfLine) next();

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
