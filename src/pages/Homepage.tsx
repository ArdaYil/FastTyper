import { useStore } from "zustand";
import NameField from "../components/typing/NameField";
import useWords from "../hooks/useWords";
import useWordStore from "../stores/WordStore";
import { useEffect } from "react";

const Homepage = () => {
  const resetStore = useStore(useWordStore, (store) => store.resetStore);
  const { data: result } = useWords();

  const data = result?.data || [];

  useEffect(() => {
    resetStore(data);
  });

  return (
    <>
      <NameField words={data} />
    </>
  );
};

export default Homepage;
