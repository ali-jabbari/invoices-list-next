import { Invoice } from "@/types/views/invoice.models";

export interface InvoiceTableModels {
  invoices: Invoice[];
  className?: string
}

export interface InvoiceTableRowModels {
  invoice: Invoice;
}