import ImageButton from "./ImageButton";

interface Props {
  onReset: () => void;
}

const ResetButton = ({ onReset }: Props) => {
  return (
    <ImageButton
      onClick={onReset}
      className="reset-btn"
      src="src/assets/images/reset.png"
      alt="image of a reset button"
    />
  );
};

export default ResetButton;
