import React from "react";
import Home from "../components/Home/Home";
import { Route, Routes } from "react-router-dom";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";
import Notfound from "../components/NotFound/Notfound";
import Execoms from "../components/Execoms/Execoms";
import ScrollToTop from "../components/NotFound/ScrollToTop";
import AuthLogin from "../pages/login";
import AuthRegister from "../pages/register";
import CheckAuth from "../components/common";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../store/auth-slice";
import AuthLayout from "../components/auth/layout";
import QRScanner from "../components/QRScanner";
import CommitteePage from "../pages/CommitteePage";
// import UnderConstructionExecom from "../components/ExeCom/UnderConstruction";
// Assuming this is the correct import path

const SiteRoutes = () => {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
         
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/operate"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
             <QRScanner />
            </CheckAuth>
          }
        ></Route>
        {/* <Route path="/operate" element={<QRScanner />} /> */}
        <Route path="/about" element={<UnderConstruction />} />
       
        <Route path="/events" element={<UnderConstruction />} />
        <Route path="/achievements" element={<UnderConstruction />} />
        <Route path="/execoms" element={<CommitteePage />} />
        <Route path="/societies" element={<UnderConstruction />} />
        <Route path="/affinities" element={<UnderConstruction />} />
        <Route path="/membership" element={<UnderConstruction />} />
        <Route path="/photo-gallery" element={<UnderConstruction />} />
        <Route path="/joinIEEE" element={<UnderConstruction />} />
       
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default SiteRoutes;
