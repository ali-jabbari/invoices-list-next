import React from "react";
import Typography from "@/ui/typography/typography";
import { InvoiceTableRowModels } from "@/types/views/invoiceTable.models";
import FactorStatusChip from "@/views/invoices/fields/factorStatusChip";
import { FactorStatusModel } from "@/types/views/factorStatus.models";
import { formatNumberWithCommas } from "@/utils/helpers/format";
import InvoiceStatusChip from "@/views/invoices/fields/invoiceStatusChip";
import ActionMenu from "@/components/views/invoices/fields/actionMenu";

const TableRow: React.FC<InvoiceTableRowModels> = ({ invoice }) => {
  return (
    <tr className="border-b border-border transition hover:border-primary-600 hover:bg-background">
      <Typography
        variants="body-md-regular"
        color="title"
        tag="td"
        className="py-[18px] pe-[24px] ps-[32px] ss02"
      >
        {invoice.id}
      </Typography>

      <td className="flex flex-col py-[18px] gap-1">
        <Typography
          variants="body-md-regular"
          color="title"
          weight="semibold"
          className=" pe-[24px]"
        >
          {invoice.invoice_number || "-"}
        </Typography>
        <FactorStatusChip status={invoice.factor_status as FactorStatusModel} />
      </td>
      <Typography
        variants="body-md-regular"
        color="title"
        tag="td"
        weight="semibold"
        className="py-[18px] pe-[24px]"
      >
        {invoice.customer_name}
      </Typography>
      <Typography
        variants="body-md-regular"
        color="title"
        tag="td"
        className="py-[18px] pe-[24px] ss02"
      >
        {invoice.invoice_date}
      </Typography>
      <Typography
        variants="body-md-regular"
        color="title"
        tag="td"
        className="py-[18px] pe-[24px] ss02"
      >
        {formatNumberWithCommas(invoice.total)}
      </Typography>

      <td>
        <InvoiceStatusChip status={invoice.status} />
      </td>

      <td className="">
        <div className="w-full flex justify-end pe-[24px]">
          <ActionMenu />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
