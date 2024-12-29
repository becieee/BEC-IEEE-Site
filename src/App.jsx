import React, { useEffect, useState } from "react";
import "./App.css";
import SiteRoutes from "./Routes/SiteRoutes.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";
import Lenis from "lenis";
import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate a loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6500);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (loading) {
    return <Loader />; // Show the loader
  }

  return (
    <>
      <Navbar />
      <SiteRoutes />
    </>
  );
};

export default App;
