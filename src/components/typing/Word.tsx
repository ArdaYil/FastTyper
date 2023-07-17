import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";

interface Props {
  word: string;
}

const Word = ({ word }: Props) => {
  const wordToType = useStore(useWordStore, (store) => store.getWordToType)();
  const currentWord = useStore(useWordStore, (store) => store.currentWord);
  const rightWords = useStore(useWordStore, (store) => store.rightWords);
  const wrongWords = useStore(useWordStore, (store) => store.wrongWords);
  const totalWords = rightWords + wrongWords;
  const letters = word.split("");

  if (word != wordToType) return <p className="word">{word}</p>;

  const getMatchingWords = () => {
    if (currentWord === "") return -1;

    for (let i = 0; i < currentWord.length; i++) {
      const letterToType = letters[i];
      const currentLetter = currentWord.substring(i, i + 1);

      console.log(letterToType, currentLetter);

      if (currentLetter === "" && i != 0) return i;
      if (letterToType !== currentLetter) return 0;
    }

    return currentWord.length;
  };

  const getWordJSX = () => {
    const matchingWords = getMatchingWords();
    console.log(matchingWords);
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
