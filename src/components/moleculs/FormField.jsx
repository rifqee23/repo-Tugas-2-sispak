import React from "react";
import Select from "../atoms/Select";
import Input from "../atoms/Input";

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  options,
  id,
  classNameSelect,
  classNameInput,
  classNameLabel,
}) => {
  return (
    <div>
      <label htmlFor={id} className={`${classNameLabel}`}>
        {label}
      </label>
      {type === "select" ? (
        <Select
          name={name}
          value={value}
          onChange={onChange}
          options={options}
          id={id}
          className={classNameSelect}
        />
      ) : (
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          className={classNameInput}
        />
      )}
    </div>
  );
};

export default FormField;
