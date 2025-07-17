import React, { useEffect, useState } from "react";
import "./App.css";
import SiteRoutes from "./Routes/SiteRoutes.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";
import Lenis from "lenis";
import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore the original, simple Lenis setup for smooth scrolling.
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate a loading time.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Using a shorter, more reasonable load time.

    // Cleanup timer and destroy Lenis instance to prevent memory leaks.
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return <Loader />; // Show the loader while content is preparing.
  }

  // Render the main application content once loading is complete.
  return (
    <>
      <Navbar />
      <SiteRoutes />
    </>
  );
};

export default App;
