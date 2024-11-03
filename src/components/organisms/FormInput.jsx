import Form from "@/components/moleculs/Form";
import { Card } from "@material-tailwind/react";
const FormInput = ({ input }) => {
  return (
    <Card color="transparent" className="pt-5 bg-gray-500 ">
      <h3 className="text-2xl font-semibold pl-16">Add Product</h3>
      <Form input={input} />
    </Card>
  );
};

export default FormInput;
