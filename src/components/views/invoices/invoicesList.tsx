import Pagination from "@/ui/pagination";
import { INVOICES_DATA } from "@/data/invoices";
import Table from "@/views/invoices/table/table";
import React from "react";
import { ParamsModels } from "@/types/route/params.models";
import { filterViewModel } from "@/lib/filterViewModel";
import InvoiceCards from "@/components/views/invoices/cards/invoiceCards";

const InvoicesList: React.FC<ParamsModels> = async ({ searchParams }) => {
  const params = await searchParams;

  const { items, hasNext, hasPrev, page, pageSize, totalPages } =
    await filterViewModel(
      INVOICES_DATA,
      params?.page as string,
      params?.page_size as string,
      params?.factor_search as string,
      params?.customer_search as string,
      params?.price_search as string,
      params?.search as string,
      params?.from_date as string,
      params?.to_date as string
    );

  return (
    <div className="lg:bg-white w-full p-0 rounded-lg mt-5">
      <Table invoices={items} className="max-lg:hidden" />
      <InvoiceCards invoices={items} className="lg:hidden" />
      <Pagination
        count={INVOICES_DATA.length}
        hasNext={hasNext}
        hasPrev={hasPrev}
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
      />
    </div>
  );
};

export default InvoicesList;
