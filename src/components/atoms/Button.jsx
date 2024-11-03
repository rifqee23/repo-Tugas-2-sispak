const Button = ({ text = "Button" }) => {
  return (
    <button className=" ml-16 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

export default Button;
