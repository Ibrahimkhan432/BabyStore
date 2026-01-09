interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  title,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
}
