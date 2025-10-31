import { PaginationProps } from "@/types/ui/pagination.models";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const CustomPagination = ({
  currentPage,
  handlePageChange,
  pageCount,
}: PaginationProps) => {
  return (
    <ReactPaginate
      className="flex items-center gap-[3px] self-center"
      pageLinkClassName={
        "p-[6px] rounded-[12px] text-neutral-600 min-w-[40px] label-lg-medium min-h-[40px] flex items-center justify-center hover:bg-primary hover:text-white"
      }
      breakClassName={"break-me"}
      activeClassName={"bg-primary text-white rounded-[12px]"}
      activeLinkClassName="text-white"
      nextClassName={"pageLabel"}
      previousClassName={"pageLabel"}
      previousLabel={
        <IoIosArrowForward size={24} className="text-txt-subtitle max-sm:hidden" />
      }
      nextLabel={
        <IoIosArrowBack size={24} className="text-txt-subtitle max-sm:hidden" />
      }
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      onPageChange={({ selected }) => handlePageChange(selected)}
      forcePage={currentPage - 1}
    />
  );
};

export default CustomPagination;
