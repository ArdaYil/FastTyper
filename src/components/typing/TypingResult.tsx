import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";
import get from "../../util/configuration";

const TypingResult = () => {
  const rightWords = useStore(useWordStore, (store) => store.rightWords);
  const wrongWords = useStore(useWordStore, (store) => store.wrongWords);
  const typingFinished = useStore(
    useWordStore,
    (store) => store.typingFinished
  );

  const getWPM = () => {
    const totalRightCharacters = rightWords.reduce(
      (acc, word) => acc + word.length,
      0
    );

    return Math.max(
      Math.floor(totalRightCharacters / get("charactersPerWord")) -
        wrongWords.length,
      0
    );
  };

  if (typingFinished === false) return null;

  return <p>{getWPM()}</p>;
};

export default TypingResult;
