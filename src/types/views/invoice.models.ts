export interface Invoice {
  id: number;
  invoice_number: string;
  customer_name: string;
  customer_phone: string;
  invoice_date: string;
  total: number;
  status:
    | "pending_sales_deputy_approval"
    | "rejected"
    | "completed"
    | "pending_ceo_approval"
    | "draft"
  commission_exempt: boolean;
  rejection_reason: string | null;
  user_id: number;
  factor_status: string
}