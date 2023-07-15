import { useStore } from "zustand";
import useWords from "../hooks/useWords";
import useWordStore from "../stores/WordStore";
import { useEffect } from "react";
import WordField from "../components/typing/WordField";

const Homepage = () => {
  const resetStore = useStore(useWordStore, (store) => store.resetStore);
  const { data: result } = useWords();

  const data = result?.data || [];

  useEffect(() => {
    resetStore(data);
  });

  return (
    <>
      <WordField words={data} />
    </>
  );
};

export default Homepage;
