import { useSearchParams } from "next/navigation";
import useHandleSearchParam from "@/hooks/custom-hooks/useHandleSearchParam";
import { useState } from "react";

export const useInvoiceFilterVm = () => {
  const queryParams = useSearchParams();
  const handleSearchParam = useHandleSearchParam();

  const factorSearchParam = queryParams.get("factor_search");
  const customerSearchParam = queryParams.get("customer_search");
  const priceSearchParam = queryParams.get("price_search");
  const searchParam = queryParams.get("search");
  const fromDateParam = queryParams.get("from_date");
  const toDateParam = queryParams.get("to_date");

  const initialDates: Date[] | undefined =
    fromDateParam && toDateParam
      ? [new Date(fromDateParam), new Date(toDateParam)]
      : undefined;

  const handleDateChange = (dates: Date[] | undefined) => {
    handleSearchParam("page", "1");
    if (dates) {
      handleSearchParam("from_date", dates[0]?.toISOString().split("T")[0]);
      handleSearchParam("to_date", dates[1]?.toISOString().split("T")[0]);
    } else {
      handleSearchParam("from_date", "");
      handleSearchParam("to_date", "");
    }
  };

  const [factorInput, setFactorInput] = useState<string>("");
  const [customerInput, setCustomerInput] = useState<string>("");
  const [priceInput, setPriceInput] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  const onSubmitFactorSearch = (value: string) => {
    handleSearchParam("factor_search", value);
  };

  const onSubmitCustomerSearch = (value: string) => {
    handleSearchParam("customer_search", value);
  };

  const onSubmitPriceSearch = (value: string) => {
    handleSearchParam("price_search", value);
  };

  const onSubmitSearchSearch = (value: string) => {
    handleSearchParam("search", value);
  };

  const removeAllFilters = () => {
    handleSearchParam("factor_search", "");
    handleSearchParam("customer_search", "");
    handleSearchParam("price_search", "");
    handleSearchParam("search", "");
    handleSearchParam("from_date", "");
    handleSearchParam("to_date", "");
    setFactorInput("");
    setCustomerInput("");
    setPriceInput("");
    setSearchInput("");
  };

  const emptySearch = () => {
    setSearchInput("");
    handleSearchParam("search", "");
  };

  const emptyFactor = () => {
    setFactorInput("");
    handleSearchParam("factor_search", "");
  };

  const emptyCustomer = () => {
    setCustomerInput("");
    handleSearchParam("customer_search", "");
  };

  const emptyPrice = () => {
    setPriceInput("");
    handleSearchParam("price_search", "");
  };

  return {
    searchInput,
    setSearchInput,
    onSubmitSearchSearch,
    emptySearch,
    factorInput,
    setFactorInput,
    onSubmitFactorSearch,
    emptyFactor,
    priceInput,
    setPriceInput,
    onSubmitPriceSearch,
    emptyPrice,
    initialDates,
    handleDateChange,
    factorSearchParam,
    customerSearchParam,
    priceSearchParam,
    searchParam,
    fromDateParam,
    customerInput,
    setCustomerInput,
    onSubmitCustomerSearch,
    toDateParam,
    removeAllFilters,
    emptyCustomer,
  };
};
