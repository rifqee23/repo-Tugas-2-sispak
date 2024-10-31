import MaterialTable from "@/components/ui/MaterialTable";
const TABLE_HEAD = ["Name", "Email", "Role"];

const TABLE_ROWS = [
  {
    id: 1,
    name: "Asep",
    email: "asep@gmail.com",
    role: "supplier",
  },

  {
    id: 5,
    name: "Rina",
    email: "rina@gmail.com",
    role: "supplier",
  },
];

const SupplierPages = () => {
  return (
    <div>
      <h1>Tes;</h1>
      <MaterialTable tableHead={TABLE_HEAD} tableRows={TABLE_ROWS} />
    </div>
  );
};

export default SupplierPages;
