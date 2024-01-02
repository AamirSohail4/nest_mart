/* eslint-disable react/prop-types */
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./footer/Footer";
import { NewsLetterForm } from "./NewsLetterForm";
import { CopyRight } from "./footer/CopyRight";
import { useEffect } from "react";
// import { MyAccountContext } from '../context/AccountContext';

export const DashboardLayout = ({ setMydata }) => {
  const userId = localStorage.getItem("userId");
  // const { userId } = useContext(MyAccountContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId || userId === null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
