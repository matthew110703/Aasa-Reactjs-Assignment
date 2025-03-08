const Button = ({ type = "button", id, text, className, ...rest }) => {
  return (
    <button
      type={type}
      id={id}
      className={`grad rounded-xl px-8 py-2 text-lg font-semibold text-white ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
