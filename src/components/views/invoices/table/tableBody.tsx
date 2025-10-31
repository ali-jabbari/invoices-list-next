import React from "react";
import TableRow from "./tableRow";
import { InvoiceTableModels } from "@/types/views/invoiceTable.models";

const TableBody: React.FC<InvoiceTableModels> = ({ invoices }) => {
  return (
    <tbody className="h-full">
      {invoices?.map((invoice) => (
        <TableRow key={invoice.id} invoice={invoice} />
      ))}
    </tbody>
  );
};

export default TableBody;
