import { InvoiceTableModels } from "@/types/views/invoiceTable.models";
import TableBody from "@/views/invoices/table/tableBody";
import TableHead from "@/views/invoices/table/tableHead";
import React from "react";

const Table: React.FC<InvoiceTableModels> = ({ invoices, className }) => {
  return (
    <div className={`${className} h-full w-full overflow-auto`} dir="rtl">
      <table dir="rtl" className="mb-[90px] w-full table-fixed">
        <TableHead />
        <TableBody invoices={invoices} />
      </table>
    </div>
  );
};

export default Table;