import { Card, Typography } from "@material-tailwind/react";

function MaterialTable({ tableHead, tableRows }) {
  return (
    <Card className="h-full w-full overflow-scroll mt-10">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {tableHead.map((head, index) => (
              <th
                key={index}
                className="text-center border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head.label}
                </Typography>
              </th>
            ))}
            <th className="text-center border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Action
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => {
            const isLast = index === tableRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={row.id}>
                {tableHead.map((head, index) => (
                  <td key={index} className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {row[head.label.toLowerCase()] ?? "-"}
                    </Typography>
                  </td>
                ))}
                <td className="flex gap-x-4 pt-2 justify-center">
                  <button className="bg-green-500 text-white text-sm py-1 w-16 rounded-full">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white text-sm py-1 w-16 rounded-full">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default MaterialTable;
