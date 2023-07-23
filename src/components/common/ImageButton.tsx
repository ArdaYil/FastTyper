import Button from "./Button";

interface Props {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

const ImageButton = ({ src, alt, className, onClick }: Props) => {
  return (
    <Button onClick={onClick} className={className}>
      <img className={`${className}__image`} src={src} alt={alt} />
    </Button>
  );
};

export default ImageButton;
