import Layout from "@/components/layout";
import React from "react";

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>
};

export default LayoutPage;
