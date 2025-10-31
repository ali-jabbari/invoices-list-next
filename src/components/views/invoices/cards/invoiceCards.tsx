import InvoiceCard from "@/components/views/invoices/cards/invoiceCard";
import { InvoiceTableModels } from "@/types/views/invoiceTable.models";
import React from "react";

const InvoiceCards: React.FC<InvoiceTableModels> = ({
  invoices,
  className,
}) => {
  return (
    <div className={`${className} grid grid-cols-2 max-md:grid-cols-1 gap-4`}>
      {invoices?.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoiceCards;