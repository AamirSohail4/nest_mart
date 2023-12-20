/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./footer/Footer";
import { NewsLetterForm } from "./NewsLetterForm";
import { CopyRight } from "./footer/CopyRight";

export const FrontendLayout = ({ setMydata }) => {
  return (
    <div className="app_layout">
      <Navbar setMydata={setMydata} />
      <Outlet />
      <NewsLetterForm />
      <footer className="main">
        <Footer />
        <CopyRight />
      </footer>
    </div>
  );
};
