import Form from "@/components/moleculs/Form";
import { Card } from "@material-tailwind/react";
import { useState } from "react";

const FormInput = ({
  input,
  onSubmit,
  value,
  onChange,
  classCard,
  classTitle,
  title,
  classButton,
  hideLabel = false,
  styleForm,
  classLabel,
  hideLogo = false,
  children,
}) => {
  return (
    <Card shadow={false} className={`${classCard}`}>
      {hideLogo && (
        <div className="flex justify-center mx-10">
          <img src="/public/images/Z4IN 1.png" alt="logo name" />
          <img src="/public/images/Z4IN.png" alt="logo name" />
        </div>
      )}

      <h3 className={`text-2xl font-semibold  ${classTitle}`}>{title}</h3>
      <Form
        input={input}
        onSubmit={onSubmit}
        value={value}
        onChange={onChange}
        classButton={classButton}
        hideLabel={hideLabel}
        styleForm={styleForm}
        classLabel={classLabel}
      />
    </Card>
  );
};

export default FormInput;
