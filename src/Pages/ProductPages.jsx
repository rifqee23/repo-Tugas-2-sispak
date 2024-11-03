import MaterialTable from "@/components/ui/MaterialTable";
import { Link } from "react-router-dom";

const head = [
  { label: "Name", type: "text" },
  { label: "Category", type: "text" },
  { label: "Price", type: "number" },
  { label: "Stock", type: "number" },
  { label: "Supplier", type: "text" },
];

const data = [
  {
    id: 1,
    name: "Laptop ASUS",
    category: "Electronics",
    price: 7500000,
    stock: 25,
    supplier: "PT. Teknologi Nusantara",
  },
  {
    id: 2,
    name: "Smartphone Samsung Galaxy",
    category: "Electronics",
    price: 5000000,
    stock: 40,
    supplier: "PT. Samsung Indonesia",
  },
  {
    id: 3,
    name: "Meja Kayu",
    category: "Furniture",
    price: 1500000,
    stock: 15,
    supplier: "PT. Mebel Nusantara",
  },
  {
    id: 4,
    name: "Kursi Kantor",
    category: "Furniture",
    price: 750000,
    stock: 30,
    supplier: "PT. Mebel Nusantara",
  },
  {
    id: 5,
    name: "Printer Canon",
    category: "Electronics",
    price: 1200000,
    stock: 20,
    supplier: "PT. Canon Asia",
  },
  {
    id: 6,
    name: "Sepatu Nike",
    category: "Fashion",
    price: 500000,
    stock: 50,
    supplier: "PT. Olahraga Indonesia",
  },
  {
    id: 7,
    name: "Baju Kaos Polos",
    category: "Fashion",
    price: 80000,
    stock: 100,
    supplier: "PT. Tekstil Indonesia",
  },
];

const ProductPages = () => {
  head.map((item) => {
    console.log(item.label);
  });
  return (
    <div className="pt-10">
      <Link
        className=" mb-4 bg-blue-200 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
        to="/product/create"
        state={{ head, data }}
      >
        Create Product
      </Link>
      <MaterialTable tableHead={head} tableRows={data} />
    </div>
  );
};

export default ProductPages;
