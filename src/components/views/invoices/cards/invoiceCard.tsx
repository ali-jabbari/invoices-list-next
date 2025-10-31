import Typography from "@/ui/typography/typography";
import ActionMenu from "@/views/invoices/fields/actionMenu";
import { InvoiceTableRowModels } from "@/types/views/invoiceTable.models";
import React from "react";
import { formatNumberWithCommas } from "@/utils/helpers/format";
import InvoiceStatusChip from "@/components/views/invoices/fields/invoiceStatusChip";

const InvoiceCard: React.FC<InvoiceTableRowModels> = ({ invoice }) => {
  return (
    <div className="bg-white rounded">
      <div className="flex items-center justify-between w-full p-4">
        <Typography
          variants="label-md-medium"
          weight="semibold"
          className="bg-neutral-100 px-2 py-1 rounded-full"
        >
          {invoice.id}
        </Typography>
        <ActionMenu />
      </div>

      <table className="w-full overflow-hidden mt-3">
        <tbody>
          <tr className="bg-white">
            <td className="py-3 px-4 text-right font-medium text-neutral-600 w-1/2 label-lg-medium">
              شماره فاکتور
            </td>
            <td className="py-3 px-4 text-left text-gray-600 w-1/2 label-lg-medium">
              {invoice.invoice_number}
            </td>
          </tr>
          <tr className="bg-neutral-100">
            <td className="py-3 px-4 text-right font-medium text-neutral-600 w-1/2 label-lg-medium">
              نام مشتری
            </td>
            <td className="py-3 px-4 text-left text-gray-600 w-1/2 label-lg-medium">
              {invoice.customer_name}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 text-right font-medium text-neutral-600 w-1/2 label-lg-medium">
              تاریخ
            </td>
            <td className="py-3 px-4 text-left text-gray-600 w-1/2 label-lg-medium">
              {invoice.invoice_date}
            </td>
          </tr>
          <tr className="bg-neutral-100">
            <td className="py-3 px-4 text-right font-medium text-neutral-600 w-1/2 label-lg-medium">
              مبلغ کل <span className="text-12 text-txt-subtitle">(ریال)</span>
            </td>
            <td className="py-3 px-4 text-left text-gray-600 w-1/2 label-lg-medium">
              {formatNumberWithCommas(invoice.total)}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 text-right font-medium text-neutral-600 w-1/2 label-lg-medium">
              وضعیت
            </td>
            <td className="py-3 px-4 text-left text-gray-600 w-1/2 label-lg-medium">
              <div className="flex justify-end">
                <InvoiceStatusChip status={invoice.status} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceCard;
