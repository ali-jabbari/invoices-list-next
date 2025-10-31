import { Invoice } from "@/types/views/invoice.models";
export const INVOICES_DATA: Invoice[] = [
  {
    id: 101,
    invoice_number: "FAK-12345",
    customer_name: "شرکت تجارت نوین",
    customer_phone: "09121234567",
    invoice_date: "1402/08/20",
    total: 125000000,
    status: "pending_sales_deputy_approval",
    commission_exempt: false,
    rejection_reason: null,
    user_id: 1,
    factor_status: Math.random() < 0.5 ? "normal" : "exception",
  },
  {
    id: 102,
    invoice_number: "FAK-12346",
    customer_name: "صنایع فولاد کاوه",
    customer_phone: "09199876543",
    invoice_date: "1402/07/15",
    total: 450000000,
    status: "rejected",
    commission_exempt: true,
    rejection_reason: "کسری موجودی انبار برای کالای X.",
    user_id: 2,
    factor_status: Math.random() < 0.5 ? "normal" : "exception",
  },
  {
    id: 103,
    invoice_number: "FAK-12347",
    customer_name: "مرکز پخش پارس",
    customer_phone: "09355432109",
    invoice_date: "1402/09/01",
    total: 9800000,
    status: "completed",
    commission_exempt: false,
    rejection_reason: null,
    user_id: 1,
    factor_status: Math.random() < 0.5 ? "normal" : "exception",
  },
  {
    id: 104,
    invoice_number: "FAK-12348",
    customer_name: "فروشگاه آنلاین کالا",
    customer_phone: "09151112233",
    invoice_date: "1402/09/10",
    total: 55000000,
    status: "pending_ceo_approval",
    commission_exempt: false,
    rejection_reason: null,
    user_id: 3,
    factor_status: Math.random() < 0.5 ? "normal" : "exception",
  },
  {
    id: 105,
    invoice_number: "FAK-12349",
    customer_name: "دفتر مرکزی تهران",
    customer_phone: "02188887777",
    invoice_date: "1402/06/05",
    total: 3000000,
    status: "draft",
    commission_exempt: true,
    rejection_reason: null,
    user_id: 2,
    factor_status: Math.random() < 0.5 ? "normal" : "exception",
  },

  ...Array.from({ length: 70 }, (_, i) => {
    const id = 106 + i;
    const statuses = [
      "pending_sales_deputy_approval",
      "rejected",
      "completed",
      "pending_ceo_approval",
      "draft",
    ];
    const names = [
      "شرکت البرز تجارت",
      "فروشگاه مرکزی شرق",
      "پخش مواد غذایی نیکان",
      "شرکت توسعه فناوران",
      "کارخانه پارس‌پلاست",
      "صنایع سیمان خوزستان",
      "شرکت بازرگانی رادین",
      "فروشگاه اطلس دیجیتال",
      "پخش دارویی سپهر",
      "شرکت مهندسی آریا",
      "تعمیرگاه مرکزی ایران‌خودرو",
      "فروشگاه ابزار دقیق",
      "شرکت ساختمانی نقش‌جهان",
      "پخش نوشیدنی بهار",
      "فروشگاه لباس مدرن",
      "صنایع پتروشیمی خلیج‌فارس",
      "شرکت فناوری آریا‌گستر",
      "مرکز خدمات هوشمند پارسا",
      "شرکت مهندسی نوین‌تک",
      "دفتر نمایندگی شمال‌غرب",
    ];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPhone = `09${Math.floor(
      100000000 + Math.random() * 899999999
    )}`;
    const randomDate = `1402/${String(
      1 + Math.floor(Math.random() * 12)
    ).padStart(2, "0")}/${String(1 + Math.floor(Math.random() * 28)).padStart(
      2,
      "0"
    )}`;
    const randomTotal = Math.floor(1_000_000 + Math.random() * 500_000_000);
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const commissionExempt = Math.random() < 0.3;
    const rejectionReasons = [
      "مدارک ناقص ارسال شده است.",
      "مغایرت مبلغ با پیش‌فاکتور.",
      "عدم تأیید توسط مدیر فروش.",
      "موجودی انبار کافی نیست.",
      "در انتظار تأیید مالی.",
      null,
    ];
    const rejection_reason =
      randomStatus === "rejected"
        ? rejectionReasons[
            Math.floor(Math.random() * (rejectionReasons.length - 1))
          ]
        : null;

    return {
      id,
      invoice_number: `FAK-${12349 + (i + 1)}`,
      customer_name: randomName,
      customer_phone: randomPhone,
      invoice_date: randomDate,
      total: randomTotal,
      status: randomStatus as Invoice["status"],
      commission_exempt: commissionExempt,
      rejection_reason,
      user_id: 1 + Math.floor(Math.random() * 3),
      factor_status: Math.random() < 0.5 ? "normal" : "exception",
    };
  }),
];
