// CreateProduct.js

import FormInput from "@/components/organisms/FormInput";
import { useLocation } from "react-router-dom";

const CreateProduct = () => {
  // Ambil array head yang dikirimkan melalui state
  const location = useLocation();
  const inputFields = location.state?.head || [];
  const productData = location.state?.data || [];

  return (
    <div className="px-10">
      <FormInput input={inputFields} />
    </div>
  );
};

export default CreateProduct;
