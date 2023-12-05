import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./footer/Footer";
import { NewsLetterForm } from "./NewsLetterForm";
import { FeaturedSection } from "./FeaturedSection";
import { CopyRight } from "./footer/CopyRight";

export const FrontendLayout = () => {
  return (
    <div className="app_layout">
      <Navbar />
      <Outlet />
      <footer className="main">
        <NewsLetterForm />
        <FeaturedSection />
        <Footer />
        <CopyRight />
      </footer>
    </div>
  );
};
