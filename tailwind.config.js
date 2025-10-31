/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "iran-yekan": ["var(--font-iran-yekan)"],
    },
    colors: {
      // Common
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      background: "#F6F6F6",
      // Primary
      primary: "#674399",
      "primary-light": "#8d63c7",
      "primary-dark": "#4a2d73",
      //Neutral
      "neutral-50": "#F8FAFC",
      "neutral-100": "#F1F5F9",
      "neutral-150": "#E2E8F0",
      "neutral-200": "#CBD5E1",
      "neutral-500": "#94A3B8",
      "neutral-600": "#64748B",
      // Typography
      "txt-title": "#1E293B",
      "txt-placeholder": "#94A3B8",
      "txt-body": "#64748B",
      "txt-subtitle": "#64748B",
      "txt-lable": "#94A3B8",
      "txt-lable-primary": "#674399",
      "txt-lable--on-primary": "#FFFFFF",
      //Error
      error: "#D93025",
      "error-dark": "#D93025",
      //Success
      success: "#1ab122",
      //Info
      info: "#555f6a",
      // Border
      border: "#E6E8EA",
      "border-dark": "#1B222C",
      "border-light": "#EAECEF",
      "border-lighter": "#374152",
      "border-light-dark": "#374152",
      "border-icon": "#929AA5",
      //Card
      card: "#F5F5F5",
      "card-lighter": "#f7f7f7",
      "card-darker": "#c4c4c4",
      "card-dark": "#1C2329",
      "card-lighter-dark": "#2B3139",
      "card-darker-dark": "#0B0E11",
      "card-yellow-bg": "#FFFCF5",
      "card-yellow-bg-dark": "#2E1F06",
      //Button
      "button-font": "#181A20",
      "button-main": "#674399",
      "button-light": "#FEF7D7",
      "button-light-bg-dark": "#84671D",
      "button-primary-text": "#C99400",
      "button-shadow-light": "#FDF5D5",
      "button-shadow-light-dark": "#2D3C54",
      "button-shadow-dark": "#FDEFB7",
      "button-icon": "#D9D9D9",
      "button-icon-dark": "#474D57",
      "button-icon-background": "#BDBDBD",
      //button status
      "button-primary-hover": "#FBD848",
      "button-primary-hover-dark": "#E4C131",
      "button-primary-light-hover-dark": "#C3A128",
      //secondary
      "secondary-main": "#55C39D",
      "secondary-light": "#77cfb1",
      "secondary-darker": "#03A66D",
      //Tags
      "tags-purple": "#9C62E5",
      "tags-delivered": "#19A5F3",
      "tags-delivered-bg": "#CAE6FF",
      "tags-canceled": "#E1800E",
      "tags-yellow": "#FBD848",
      "tags-canceled-bg": "#FEE8C5",
      "tags-completed-bg": "#D9F8EB",
      "tags-purple-bg": "#F3EDFE",
      "tags-red-light": "#FF707E",
      "tags-red-light-bg": "#FEF1F2",
      //Scrollbar
      scroll: "#d7d7d7",
      scrollDark: "#45535d",
    },
    fontSize: {
      11: "11px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      45: "45px",
      48: "48px",
      57: "57px",
    },
    lineHeight: {
      0: "0",
      16: "16px",
      24: "24px",
      20: "20px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      52: "52px",
      56: "56px",
      64: "64px",
      86: "86px",
    },
    extend: {
      screens: {
        s1920: "1920px",
      },
      boxShadow: {
        boxShadow:
          "0px 1px 2px 0px rgba(174, 191, 210, 0.3), 0px 2px 6px 2px rgba(174, 191, 210, 0.15)",
        modal:
          "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
        modalsEffect: "0px 13px 61px 0px rgba(169, 169, 169, 0.366);",
        primaryButton:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
