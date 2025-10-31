import Typography from "@/ui/typography/typography";
import React from "react";
import { Invoice } from "@/types/views/invoice.models";

interface Props {
  status: Invoice["status"];
  className?: string;
}

const titleText: Record<string, string> = {
  pending_sales_deputy_approval: "منتظر تایید معاون فروش",
  rejected: "رد شده",
  completed: "نهایی شده",
  pending_ceo_approval: "منتظر تایید مدیرعامل",
  draft: "پیش‌نویس",
};

const InvoiceStatusChip: React.FC<Props> = ({ status, className }) => {
  const classNames = {
    base: "rounded-full flex items-center gap-2 py-[8px] px-3 w-fit whitespace-nowrap",
    variants: {
      pending_sales_deputy_approval:
        "text-tags-delivered bg-tags-delivered-bg bg-opacity-[60%]",
      rejected:
        "text-error bg-error bg-opacity-[15%]",
      completed:
        "text-secondary-darker bg-tags-completed-bg bg-opacity-[70%] dark:bg-opacity-[90%]",
      pending_ceo_approval: "text-tags-purple bg-tags-purple bg-opacity-[15%]",
      draft:
        "text-button-primary-text bg-button-primary-text bg-opacity-[10%]",
      canceled: "text-error bg-error bg-opacity-[10%]",
    },
  };

  return (
    <div
      className={`${classNames.base} ${classNames.variants[status]} ${className}`}
    >
      <Typography variants="label-md-medium" color="custom" weight="semibold">
        {titleText[status]}
      </Typography>
    </div>
  );
};

export default InvoiceStatusChip;
