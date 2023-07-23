import { useStore } from "zustand";
import WordField from "./WordField";
import useWords from "../../hooks/useWords";
import { useEffect } from "react";
import useWordStore from "../../stores/WordStore";
import TypeField from "./TypeField";
import Timer from "../common/Timer";
import ResetButton from "../common/ResetButton";

const Typing = () => {
  const resetStore = useStore(useWordStore, (store) => store.resetStore);
  const { data: result } = useWords();

  const data = result?.data || [];

  useEffect(() => {
    resetStore(data);
  });

  const handleReset = () => {};

  return (
    <div className="typing">
      <WordField />
      <div className="typing__controls">
        <TypeField />
        <ResetButton onReset={handleReset} />
        <Timer active={false} time={60} onTimerFinsh={() => {}} />
      </div>
    </div>
  );
};

export default Typing;
