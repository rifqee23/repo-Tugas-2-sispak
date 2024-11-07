const Input = ({ type, name, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        className="py-1 rounded-xl px-2 w-full outline-none border border-gray-300 bg-blue-gray-50"
        onChange={onChange}
      />
    </>
  );
};

export default Input;
