import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";
import { ChangeEvent } from "react";

const TypeField = () => {
  const currentWord = useStore(useWordStore, (store) => store.currentWord);
  const setCurrentWord = useStore(
    useWordStore,
    (store) => store.setCurrentWord
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
