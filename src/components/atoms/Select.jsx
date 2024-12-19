import React from "react";
import { Select, Option } from "@material-tailwind/react";

const Select = ({ name, value, onChange, options, id, className }) => {
  return (
    <>
      <Select
        label="Pilih"
        name={name}
        value={value}
        id={id}
        className={`${className}`}
        onChange={onChange}
      >
        {options.map((options) => (
          <Option key={options.value} value={options.value}>
            {options.label}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default Select;
