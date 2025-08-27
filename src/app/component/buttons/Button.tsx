const Button = ({
  text,
  cssCode,
  className,         
  onClick
}: {
  text: string;
  cssCode: string;
  className?: string;  
  onClick: (code: string) => void;
}) => {
  return (
    <button
      className={className} 
      onClick={() => onClick(cssCode)}
    >
      {text}
    </button>
  )
}

export default Button;

