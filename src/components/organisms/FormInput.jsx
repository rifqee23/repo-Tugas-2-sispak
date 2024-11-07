import Form from "@/components/moleculs/Form";
import { Card } from "@material-tailwind/react";

const FormInput = ({
  input,
  onSubmit,
  value,
  onChange,
  classCard,
  classTitle,
  title,
  classButton,
}) => {
  return (
    <Card shadow={false} className={`${classCard}`}>
      <h3 className={`text-2xl font-semibold pl-16 ${classTitle}`}>{title}</h3>
      <Form
        input={input}
        onSubmit={onSubmit}
        value={value}
        onChange={onChange}
        classButton={classButton}
      />
    </Card>
  );
};

export default FormInput;
