import MaterialTable from "@/components/ui/MaterialTable";
import { Link } from "react-router-dom";
import { useProductContext } from "@/contexts/ProductContext";

const head = [
  { label: "Name", type: "text", name: "name" },
  { label: "Category", type: "text", name: "category" },
  { label: "Price", type: "number", name: "price" },
  { label: "Stock", type: "number", name: "stock" },
  { label: "Supplier", type: "text", name: "supplier" },
];

const ProductPages = () => {
  const { products } = useProductContext();

  return (
    <div className="pt-10">
      <Link
        className="mb-4 bg-blue-200 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
        to="/product/create"
        state={{ head }}
      >
        Create Product
      </Link>
      <MaterialTable tableHead={head} tableRows={products} />
    </div>
  );
};

export default ProductPages;
