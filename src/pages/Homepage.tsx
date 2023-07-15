import NameField from "../components/typing/NameField";
import useWords from "../hooks/useWords";

const Homepage = () => {
  const { data: result } = useWords();
  const data = result?.data || [];

  return (
    <>
      <NameField words={data} />
    </>
  );
};

export default Homepage;
