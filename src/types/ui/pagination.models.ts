import { ParamsModels } from "@/types/route/params.models";
import { Invoice } from "@/types/views/invoice.models";
import { ComponentProps } from "react";

export interface IndexProps {
  count?: number;
  className?: ComponentProps<"div">["className"];
  page: number;
  pageSize: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
}
export type pageSizeProps = {
  pageSizeValue: string;
  pageSizeHandler: (param: string) => void;
  pageSizeOptions: string[];
};
export type PaginationCounterProps = {
  count: number;
  page_size: string | string[] | undefined;
  currentPage: number;
};
export type PaginationProps = {
  currentPage: number;
  pageCount: number;
  handlePageChange: (selectedPage: number) => void;
};
