import { useStore } from "zustand";
import useWordStore from "../../stores/WordStore";

interface Props {
  words: string[];
}

const NameField = ({ words }: Props) => {
  const { currentWords } = useStore(useWordStore);
  console.log(currentWords);
  return <div className="name-field"></div>;
};

export default NameField;
