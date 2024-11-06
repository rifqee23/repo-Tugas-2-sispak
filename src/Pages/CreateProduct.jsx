// CreateProduct.jsx
import FormInput from "@/components/organisms/FormInput";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProductStore } from "@/stores/ProductStore";

const CreateProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const addProduct = useProductStore((state) => state.addProduct);
  const inputFields = location.state?.head || [];
  const [inputValues, setInputValues] = useState({});

  const handleChange = (event, fieldName) => {
    setInputValues({ ...inputValues, [fieldName]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValues) {
      addProduct({ id: Date.now(), ...inputValues }); // Tambah ID dan input values ke data
      setInputValues({});
      navigate("/product");
    }
  };

  return (
    <div className="px-10">
      <FormInput
        input={inputFields}
        onSubmit={handleFormSubmit}
        value={inputValues}
        onChange={handleChange}
      />
    </div>
  );
};

export default CreateProduct;
