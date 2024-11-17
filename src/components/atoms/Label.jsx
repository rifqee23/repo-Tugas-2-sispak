const Label = ({ id, text, classLabel }) => {
  return (
    <div>
      <label className={`${classLabel}`} htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default Label;
