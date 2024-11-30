import React, { useState, useEffect } from "react";
import FormField from "../moleculs/FormField"; // Pastikan jalur ini benar
import Button from "../atoms/Button"; // Pastikan jalur ini benar
import Cookies from "js-cookie";
import { Typography } from "@material-tailwind/react";
import axios from "axios";

const TransactionForm = () => {
  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplierOptions, setSupplierOptions] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [error, setError] = useState("");

  const token = Cookies.get("access_token");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
          {
            headers: {
              Authorization: `${token}`,
            },
          },
        );
        const responseData = response.data.data;
        // Menggunakan Set untuk menyaring nilai yang unik
        const uniqueSuppliers = new Set();
        const optionsDataSupplier = [];

        responseData.forEach((response) => {
          const userID = String(response.userID);
          const username = response.supplier.username;

          if (!uniqueSuppliers.has(userID)) {
            uniqueSuppliers.add(userID);
            optionsDataSupplier.push({
              value: userID,
              label: username,
            });
          }
        });
        setSupplierOptions(optionsDataSupplier);
        if (supplier) {
          setLoadingProducts(true);
          const filteredProducts = responseData.filter(
            (product) => product.userID === Number(supplier),
          );
          const optionsDataProduct = filteredProducts.map((response) => ({
            value: String(response.productID),
            label: response.name,
          }));
          setProductOptions(optionsDataProduct);
          setLoadingProducts(false);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [supplier]);

  const validateQuantity = (quantity) => {
    const re = /^[0-9]+$/;
    return re.test(quantity);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    if (validateQuantity(value)) {
      setError("");
    } else {
      setError("Input hanya boleh angka.");
      setQuantity("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/orders`,
        {
          userID: Number(supplier),
          productID: Number(product),
          quantity: Number(quantity),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        },
      );
      if (response.data.message === "Order created successfully") {
        window.location.href = "/stakeholder/report";
      }
    } catch (error) {
      setError(error.response?.data?.message || "Gagal mengirim pesanan.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Typography variant="paragraph" color="red" className="mb-2">
          {error}
        </Typography>
      )}
      {loading ? (
        <p>Memuat supplier...</p>
      ) : (
        <>
          <FormField
            label="Supplier"
            type="select"
            name="transactionName"
            options={supplierOptions}
            value={supplier}
            onChange={(value) => {
              setSupplier(value);
              setProduct("");
            }}
            classNameLabel={"block text-sm font-medium text-gray-900 mt-2"}
          />
          <FormField
            label="Product"
            type="select"
            name="transactionName"
            options={productOptions}
            value={product}
            onChange={(value) => {
              setProduct(value);
            }}
            disabled={loadingProducts}
            classNameLabel={"block text-sm font-medium text-gray-900 mt-2"}
          />
          <FormField
            label="Kuantitas"
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            classNameLabel={"block text-sm font-medium text-gray-900 mt-2"}
            classNameInput={
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            }
          />
        </>
      )}
      <Button
        type={"submit"}
        className={
          "mb-2 me-2 mt-4 w-full rounded-lg border border-gray-300 bg-blue-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100"
        }
      >
        Order
      </Button>
    </form>
  );
};

export default TransactionForm;
