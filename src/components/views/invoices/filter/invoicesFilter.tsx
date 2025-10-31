"use client";

import SearchInput from "@/views/invoices/filter/searchInput";
import InputRangePicker from "@/ui/inputs/inputRangePicker";

import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import Typography from "@/components/ui/typography/typography";
import { useInvoiceFilterVm } from "@/hooks/view-models/invoiceFilter.vm";
import { IoFilterCircle } from "react-icons/io5";

const InvoicesFilter: React.FC = () => {
  const {
    searchInput,
    customerSearchParam,
    emptyFactor,
    emptyPrice,
    emptySearch,
    factorInput,
    factorSearchParam,
    fromDateParam,
    handleDateChange,
    initialDates,
    onSubmitFactorSearch,
    onSubmitPriceSearch,
    onSubmitSearchSearch,
    priceInput,
    priceSearchParam,
    removeAllFilters,
    searchParam,
    setFactorInput,
    setPriceInput,
    setSearchInput,
    toDateParam,
    emptyCustomer,
    customerInput,
    onSubmitCustomerSearch,
    setCustomerInput,
  } = useInvoiceFilterVm();

  return (
    <div className="bg-white w-full p-6 max-lg:p-3 rounded-lg">
      <div className="max-md:hidden bg-background rounded-full py-3 px-4 max-lg:py-2 max-lg:px-2 w-fit h-fit mb-7 max-lg:mb-4 flex items-center gap-2">
        <IoFilterCircle size={24} className="text-txt-title max-lg:w-[20px] max-lg:h-[20px]"/>
        <Typography variants="title-md-medium" className="max-lg:title-sm-medium">فیلتر ها</Typography>
      </div>
      
      <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
        <SearchInput
          label="جستجو"
          value={searchInput}
          placeholder="جستجو"
          icon={FaMagnifyingGlass}
          onChange={setSearchInput}
          onEnter={onSubmitSearchSearch}
          onEmpty={emptySearch}
        />

        <SearchInput
          label="شماره فاکتور"
          placeholder="جستجو بر اساس شماره فاکتور"
          value={factorInput}
          icon={FaFileInvoice}
          onChange={setFactorInput}
          onEnter={onSubmitFactorSearch}
          onEmpty={emptyFactor}
        />

        <SearchInput
          label="نام مشتری"
          value={customerInput}
          placeholder="جستجو بر اساس نام مشتری"
          icon={FaClipboardUser}
          onChange={setCustomerInput}
          onEnter={onSubmitCustomerSearch}
          onEmpty={emptyCustomer}
        />

        <SearchInput
          label="مبلغ کل"
          value={priceInput}
          placeholder="جستجو بر اساس مبلغ کل"
          icon={FaCircleDollarToSlot}
          onChange={setPriceInput}
          onEnter={onSubmitPriceSearch}
          onEmpty={emptyPrice}
        />

        <InputRangePicker
          id="paymentDate"
          label="تاریخ"
          dateValue={initialDates}
          onChange={handleDateChange}
        />
      </div>

      {(factorSearchParam ||
        customerSearchParam ||
        priceSearchParam ||
        searchParam ||
        fromDateParam ||
        toDateParam) && (
        <button
          onClick={removeAllFilters}
          className="flex items-center gap-2 mt-6 bg-primary rounded-full py-3 px-4 text-white hover:bg-primary/70 transition-colors"
        >
          <FaRegCircleXmark />
          <Typography variants="label-md-medium">حذف همه فیلتر ها</Typography>
        </button>
      )}
    </div>
  );
};

export default InvoicesFilter;
