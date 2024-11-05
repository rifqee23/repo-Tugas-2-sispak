const Input = ({ type, name, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        className="py-1 rounded-xl px-2 w-full"
        onChange={onChange}
      />
    </>
  );
};

export default Input;
