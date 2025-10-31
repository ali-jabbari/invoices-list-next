import Header from "@/components/layout/header";
import React from "react";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <div className="mt-[80px] p-10 max-lg:p-4 w-full">{children}</div>
    </>
  );
};

export default Layout;
