import { useStore } from "zustand";
import WordField from "./WordField";
import useWords from "../../hooks/useWords";
import { useEffect } from "react";
import useWordStore from "../../stores/WordStore";

const Typing = () => {
  const resetStore = useStore(useWordStore, (store) => store.resetStore);
  const { data: result } = useWords();

  const data = result?.data || [];

  useEffect(() => {
    resetStore(data);
  });

  return (
    <div className="typing">
      <WordField />
    </div>
  );
};

export default Typing;
