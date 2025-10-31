import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";

export type PageResult<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
};

function normalize(input: unknown): string {
  const s = String(input ?? "").toLowerCase().trim();
  const map: Record<string, string> = {
    "۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",
    "٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9",
  };
  return s.replace(/[۰-۹٠-٩]/g, (d) => map[d] ?? d);
}

function parseJalaliDateStamp(raw: string): number | null {
  const s = normalize(raw);

  const m = s.match(/^\s*(\d{3,4})\D+(\d{1,2})\D+(\d{1,2})\s*$/);
  if (!m) return null;
  const y = m[1].padStart(4, "0");
  const mo = m[2].padStart(2, "0");
  const d = m[3].padStart(2, "0");

  const mi = Number(mo), di = Number(d);
  if (mi < 1 || mi > 12 || di < 1 || di > 31) return null;
  return Number(`${y}${mo}${d}`);
}


function buildPricePredicate(query: string): (n: number) => boolean {
  const q = normalize(query).replace(/,/g, "");
  if (!q) return () => true;

  const range = q.match(/^\s*(\d+)\s*-\s*(\d+)\s*$/);
  if (range) {
    const min = Number(range[1]);
    const max = Number(range[2]);
    if (Number.isFinite(min) && Number.isFinite(max)) {
      return (n) => n >= min && n <= max;
    }
  }

  const comp = q.match(/^(>=|<=|>|<|=)?\s*(\d+)\s*$/);
  if (comp) {
    const op = comp[1] ?? "=";
    const val = Number(comp[2]);
    if (!Number.isFinite(val)) return () => true;
    switch (op) {
      case ">":  return (n) => n > val;
      case "<":  return (n) => n < val;
      case ">=": return (n) => n >= val;
      case "<=": return (n) => n <= val;
      default:   return (n) => n === val;
    }
  }

  return (n) => String(n).includes(q);
}

export function filterViewModel<T extends Record<string, any>>(
  data: T[],
  pageParam: string | number,
  pageSizeParam: string | number,
  factorSearch: string,         
  searchCustomerName: string,  
  searchPrice: string,         
  search: string,          
  from_date: string,           
  to_date: string       
): PageResult<T> {
  const pageSize = Math.max(1, Number(pageSizeParam ?? 10));
  const rawPage  = Number(pageParam ?? 1);

  const qFactor   = normalize(factorSearch);
  const qCustomer = normalize(searchCustomerName);
  const qCombined = normalize(search);
  const pricePred = buildPricePredicate(searchPrice);

  const fromStamp = from_date ? parseJalaliDateStamp(new DateObject(from_date).convert(persian).format("YYYY/MM/DD")) : null;
  const toStamp   = to_date   ? parseJalaliDateStamp(new DateObject(to_date).convert(persian).format("YYYY/MM/DD"))   : null;

  const filtered = data.filter((item) => {
    const inv   = normalize(item.invoice_number);
    const cust  = normalize(item.customer_name);
    const phone = normalize(item.customer_phone);
    const dateS = normalize(item.invoice_date);
    const total: number = Number(item.total ?? 0);
    const itemStamp = parseJalaliDateStamp(dateS);
    if ((fromStamp !== null || toStamp !== null) && itemStamp === null) return false;
    if (fromStamp !== null && itemStamp! < fromStamp) return false;
    if (toStamp   !== null && itemStamp! > toStamp)   return false;
    if (qFactor && !inv.includes(qFactor)) return false;
    if (qCustomer && !cust.includes(qCustomer)) return false;
    if (searchPrice && !pricePred(total)) return false;
    if (qCombined) {
      const hay = `${inv} ${cust} ${phone} ${dateS}`;
      if (!hay.includes(qCombined)) return false;
    }
    return true;
  });

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(Math.max(1, rawPage), totalPages);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: filtered.slice(start, end),
    page,
    pageSize,
    total,
    totalPages,
    hasPrev: page > 1,
    hasNext: page < totalPages,
  };
}
