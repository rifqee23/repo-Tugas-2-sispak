import React from "react";
import SupplierTableTransaction from "../organisms/SupplierTableTransaction";

const SupplierTransactionPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full p-5">
        <SupplierTableTransaction />
      </div>
    </div>
  );
};

export default SupplierTransactionPage;
