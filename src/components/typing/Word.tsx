import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";

interface Props {
  word: string;
  state: "RIGHT" | "WRONG" | "NEUTRAL";
}

const Word = ({ word, state }: Props) => {
  const wordToType = useStore(useWordStore, (store) => store.getWordToType)();
  const currentWord = useStore(useWordStore, (store) => store.currentWord);
  const rightWords = useStore(useWordStore, (store) => store.rightWords);
  const wrongWords = useStore(useWordStore, (store) => store.wrongWords);
  const getCurrentWordIndex = useStore(
    useWordStore,
    (store) => store.getCurrentWordIndex
  );
  const totalWords = getCurrentWordIndex();
  const letters = word.split("");

  const getClassName = () => {
    if (state !== "NEUTRAL") return "--" + state.toLowerCase();

    return "";
  };

  if (word != wordToType)
    return <p className={`word${getClassName()}`}>{word}</p>;

  const getMatchingWords = () => {
    if (currentWord === "") return -1;

    for (let i = 0; i < currentWord.length; i++) {
      const letterToType = letters[i];
      const currentLetter = currentWord.substring(i, i + 1);

      if (currentLetter === "" && i != 0) return i;
      if (letterToType !== currentLetter) return 0;
    }

    return currentWord.length;
  };

  const getWordJSX = () => {
    const matchingWords = getMatchingWords();

    if (!matchingWords) return <p className="word--wrong">{word}</p>;
    if (matchingWords === -1) return <p className="word">{word}</p>;

    return (
      <p className="word">
        <span className="word__right">{letters.splice(0, matchingWords)}</span>
        {letters}
      </p>
    );
  };

  return getWordJSX();
};

export default Word;
