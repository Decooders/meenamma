import React from "react";
import "../layout/Layout.css";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main>{children}</main>
    </div>
  );
};
Layout.defaultProps = {
  title: "Meenamma",
  description:
    "Im sorry meenamma nuv kavali manchiga unta manchiga chuskunta inkeppudu em ananu",
  keywords: "neha, meena,meenamma, subbu, subhani,meena loves subbu",
};
export default Layout;
