import MaterialTable from "@/components/ui/MaterialTable";

const TABLE_HEAD = ["Name", "Email", "Role"];
const TABLE_ROWS = [
  {
    id: 1,
    name: "Budi",
    email: "budi@gmail.com",
    role: "stakeholder",
  },
  {
    id: 2,
    name: "Siti",
    email: "siti@gmail.com",
    role: "stakeholder",
  },
  {
    id: 3,
    name: "Andi",
    email: "andi@gmail.com",
    role: "stakeholder",
  },
  {
    id: 4,
    name: "Dewi",
    email: "dewi@gmail.com",
    role: "stakeholder",
  },
  {
    id: 5,
    name: "Rina",
    email: "rina@gmail.com",
    role: "stakeholder",
  },
];

const StackholderPages = () => {
  return (
    <div>
      <MaterialTable tableHead={TABLE_HEAD} tableRows={TABLE_ROWS} />
    </div>
  );
};

export default StackholderPages;
