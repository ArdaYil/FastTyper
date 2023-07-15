interface Props {
  word: string;
}

const Word = ({ word }: Props) => {
  const letters = word.split("");

  return <p className="word">{letters}</p>;
};

export default Word;
