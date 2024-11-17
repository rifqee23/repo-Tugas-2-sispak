import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import { useState } from "react";

const Form = ({
  input,
  onSubmit,
  value,
  onChange,
  text = "Submit",
  classButton,
  hideLabel = false,
  styleForm,
  classLabel = "text-slate-800",
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-4 mt-8 mb-2  w-96 lg:max-w-7xl"
    >
      <div className={`mb-1 flex flex-wrap gap-y-4 ${styleForm}`}>
        {input.map((item, index) => (
          <div className="flex gap-x-4 " key={index}>
            {!hideLabel && (
              <div className="w-32 mb-2 text-right pr-0">
                <Label
                  classLabel={classLabel}
                  id={item.name}
                  text={item.label}
                />
              </div>
            )}
            <div>
              <Input
                id={item.name}
                type={item.type}
                value={value[item.name] || ""}
                name={item.name}
                placeholder={hideLabel ? item.label : ""}
                onChange={(e) => onChange(e, item.name)}
              />
            </div>
          </div>
        ))}
        <Button type="submit" text={text} classButton={classButton} />
      </div>
    </form>
  );
};

export default Form;
