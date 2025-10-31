import Typography from "@/ui/typography/typography";
import React from "react";

const TableHead: React.FC = () => {
  return (
    <thead className="sticky top-0 whitespace-nowrap bg-primary/10 shadow-list">
      <tr className="">
        <Typography
          tag="th"
          variants="label-lg-medium"
          color="title"
          className="w-[100px] whitespace-nowrap py-[18px] pe-[24px] ps-[32px] text-start"
        >
          شناسه
        </Typography>
        <Typography
          tag="th"
          variants="label-lg-medium"
          color="title"
          className="w-[150px] whitespace-nowrap py-[18px] pe-[24px] text-start"
        >
          شماره فاکتور
        </Typography>
        <Typography
          tag="th"
          variants="label-lg-medium"
          color="title"
          className="w-[182px] whitespace-nowrap py-[18px] pe-[24px] text-start"
        >
          نام مشتری
        </Typography>
        <Typography
          tag="th"
          variants="label-lg-medium"
          color="title"
          className="w-[120px] whitespace-nowrap py-[18px] pe-[24px] text-start"
        >
          <Typography tag="span" variants="label-lg-medium" color="title">
            تاریخ
          </Typography>
        </Typography>
        <Typography
          tag="th"
          variants="label-lg-medium"
          color="title"
          className="w-[150px] whitespace-nowrap py-[18px] pe-[24px] text-start"
        >
          مبلغ کل <span className="text-12 text-txt-subtitle">(ریال)</span>
        </Typography>
        <Typography
          tag="th"
          variants="label-lg-medium"
          color="title"
          className="w-[150px] whitespace-nowrap py-[18px] pe-[24px] text-start"
        >
          وضعیت
        </Typography>
        <Typography
          tag="th"
          variants="label-lg-medium"
          color="title"
          className="w-[90px] whitespace-nowrap py-[18px] pe-[24px] text-start"
        >
          {" "}
        </Typography>
      </tr>
    </thead>
  );
};

export default TableHead;
