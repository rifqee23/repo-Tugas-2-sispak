const Button = ({ text = "Button", classButton }) => {
  return (
    <button
      className={` mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${classButton}`}
    >
      {text}
    </button>
  );
};

export default Button;
