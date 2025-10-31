"use client";

import ResultsPerPage from "@/ui/pagination/resultsPerPage";
import { IndexProps } from "@/types/ui/pagination.models";
import PaginationCounter from "@/ui/pagination/paginationCounter";
import CustomPagination from "@/ui/pagination/customPagination";
import { useSearchParams } from "next/navigation";
import useHandleSearchParam from "@/hooks/custom-hooks/useHandleSearchParam";

import React from "react";

const Pagination: React.FC<IndexProps> = ({ count, className, totalPages }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const page_size = searchParams.get("page_size");

  const handleSearchParam = useHandleSearchParam();

  const handlePageChange = (selectedPage: number) => {
    console.log(selectedPage);
    handleSearchParam("page", String(selectedPage + 1));
  };

  return (
    <div
      className={`${className} ss02 right-10 px-4 left-10 max-lg:flex-col max-lg:right-4 max-lg:left-4 fixed bottom-0 flex min-h-[90px] max-lg:min-h-[20px] flex-wrap items-center md:justify-between gap-[10px] py-4 md:gap-[32px] border-t border-neutral-150 bg-neutral-50 md:flex-nowrap`}
    >
      <div className="flex items-center gap-5 max-lg:hidden">
        <ResultsPerPage />

        {count && (
          <PaginationCounter
            count={count}
            currentPage={page ? Number(page) : 1}
            page_size={page_size ? String(page_size) : "20"}
          />
        )}
      </div>

      <div className="flex w-full items-center justify-center md:w-fit">
        <CustomPagination
          currentPage={page ? Number(page) : 1}
          handlePageChange={handlePageChange}
          pageCount={totalPages}
        />
      </div>
    </div>
  );
};

export default Pagination;
