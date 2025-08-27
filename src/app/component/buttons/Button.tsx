const Button = ({
  text,
  cssCode,
  className,          // <-- nueva prop
  onClick
}: {
  text: string;
  cssCode: string;
  className?: string;  // opcional
  onClick: (code: string) => void;
}) => {
  return (
    <button
      className={className} // combina la clase base con la personalizada
      onClick={() => onClick(cssCode)}
    >
      {text}
    </button>
  )
}

export default Button;

