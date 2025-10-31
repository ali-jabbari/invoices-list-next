"use client";

import Typography from "../typography/typography";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import useHandleSearchParam from "@/hooks/custom-hooks/useHandleSearchParam";

const ResultsPerPage = () => {
  const pageSizeOptions: string[] = useMemo(() => ["10", "25", "50", "100"], []);
  const searchParams = useSearchParams();
  const page_size = searchParams.get("page_size");

  const handleSearchParam = useHandleSearchParam();

  const pageSizeHandler = (param: string) => {
    handleSearchParam("page", "1");
    handleSearchParam("page_size", param);
  };

  return (
    <div className="flex items-center gap-[8px]">
      <Typography
        variants="label-lg-medium"
        color="title"
        className="whitespace-nowrap"
      >
        آیتم در صفحه:
      </Typography>
      <select
        name="page_size"
        id="page_size"
        aria-label="page_size"
        className="ml-[2px] cursor-pointer rounded-[4px] border-l-[12px] border-l-transparent bg-transparent py-[6px] pr-[8px] ring-[1px] ring-primary hover:bg-neutral-100 focus:outline-none"
        value={page_size ? String(page_size) : "20"}
        onChange={(e) => pageSizeHandler(e.target.value)}
      >
        {pageSizeOptions.map((option) => (
          <option key={option} value={option} aria-label={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ResultsPerPage;
