import HeaderTitle from "@/components/layout/header/headerTitle";
import InvoicesFilter from "@/views/invoices/filter/invoicesFilter";
import { ParamsModels } from "@/types/route/params.models";
import InvoicesList from "@/views/invoices/invoicesList";
import React from "react";
import { FaFileInvoice } from "react-icons/fa6";

const InvoicesPage: React.FC<ParamsModels> = ({ searchParams }) => {
  return (
    <main>
      <HeaderTitle
        title="لیست فاکتور ها"
        description="مدیریت تمام فاکتور های صادر شده"
        icon={FaFileInvoice}
      />

      <InvoicesFilter />
      <InvoicesList searchParams={searchParams} />
    </main>
  );
};

export default InvoicesPage;
