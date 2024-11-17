const Input = ({
  type,
  name,
  value,
  onChange,
  id,
  placeholder = "username",
}) => {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className="py-1 rounded-xl px-2 w-full outline-none border border-gray-300 bg-blue-gray-50"
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
