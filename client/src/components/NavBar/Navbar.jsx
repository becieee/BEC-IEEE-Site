import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BecLogo from "/assets/beclogo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const years = ["2025", "2024", "2023", "2022", "2021"];

  // Update dropdown state based on current route
  useEffect(() => {
    if (location.pathname.includes('/execoms/')) {
      setDropdownOpen(true);
      setActiveLink('/execoms');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
      setDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuRef, dropdownRef]);

  const links = [
    { name: "HOME", path: "/", width: "80px" },
    { name: "ABOUT", path: "/about", width: "80px" },
    { name: "EVENTS", path: "/events", width: "90px" },
    { name: "ACHIEVEMENTS", path: "/achievements", width: "140px" },
    { name: "EXECOMS", path: "/execoms", width: "100px" },
    { name: "SOCIETIES", path: "/societies", width: "100px" },
    { name: "AFFINITIES", path: "/affinities", width: "110px" },
    { name: "MEMBERSHIP", path: "/membership", width: "140px" },
  ];

  const activeIndex = links.findIndex((link) => link.path === activeLink);
  const activeWidth = links[activeIndex]?.width || "60px";

  const handleYearClick = (year) => {
    setActiveLink(`/execoms/${year}`);
    setDropdownOpen(true);
    navigate(`/execoms/${year}`);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden fixed h-36 w-full text-white lg:flex justify-center items-center z-10">
        <div className="relative h-12 w-[800px] bg-black rounded-full flex justify-between items-center text-sm font-light gap-10">
          <div
            className="absolute bg-white rounded-full leading-[3rem] h-12 transition-all duration-300 ease-in-out z-0"
            style={{
              left: `calc(${activeIndex < 3 ? activeIndex * 75 : activeIndex == 3 ? activeIndex * 79 : activeIndex == 4 ? activeIndex * 93 : activeIndex * 94}% / ${links.length})`,
              width: activeWidth,
              backgroundColor: (activeLink === '/execoms' || activeLink.includes('/execoms/')) ? 'transparent' : 'white'
            }}
          ></div>
          <div className="absolute w-full h-12 flex justify-between items-center z-10 px-5">
            {links.map((link) => 
              link.name === "EXECOMS" ? (
                <div key={link.path} ref={dropdownRef} className="relative group">
                  <Link
                    to={link.path}
                    onClick={() => {
                      setActiveLink(link.path);
                      setDropdownOpen(!dropdownOpen);
                    }}
                    className={`transition-all duration-300 ${
                      dropdownOpen ? "text-black font-bold" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-12 left-0 bg-black rounded-lg py-2 min-w-[100px] z-50">
                      {years.map((year) => (
                        <Link
                          key={year}
                          to={`/execoms/${year}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleYearClick(year);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-800 text-white"
                        >
                          {year}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setActiveLink(link.path)}
                  className={`transition-all duration-300 ${
                    activeLink === link.path ? "text-black font-bold" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sticky top-0 lg:hidden bg-black w-full h-20 z-[99] backdrop-blur-sm backdrop-filter">
        <div className="flex justify-between items-center h-20 px-5">
          <div onClick={() => { setActiveLink("/"); setMenuOpen(false); }}>
            <Link to="/" className="flex justify-start items-center text-white gap-3">
              <img src={BecLogo} alt="Logo" className="h-14 w-auto" />
              <h1 className="hidden sm:block text-2xl font-bold">BEC IEEE</h1>
            </Link>
          </div>
          <div className="text-white text-4xl" onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen ? <HiMenuAlt3 /> : <IoCloseSharp />}
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-600"></div>
        {menuOpen && (
          <div ref={menuRef} className="absolute flex flex-col px-5 text-lg gap-2 py-2 right-0 w-full sm:w-[60%] bg-[#0A0011] backdrop-blur-sm backdrop-filter text-white z-[99]">
            {links.map((link) => (
              <React.Fragment key={link.path}>
                {link.name === "EXECOMS" ? (
                  <>
                    <div className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full text-left flex items-center justify-between text-white"
                      >
                        <span>Execoms</span>
                        <span className="transform transition-transform duration-200">
                          {dropdownOpen ? "▼" : "▶"}
                        </span>
                      </button>
                      {dropdownOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-700">
                          {years.map((year) => (
                            <button
                              key={year}
                              onClick={() => {
                                setActiveLink(`/execoms/${year}`);
                                navigate(`/execoms/${year}`);
                                setMenuOpen(false);
                                setDropdownOpen(false);
                              }}
                              className={`block w-full text-left py-1 hover:text-gray-300 transition-colors duration-200 ${
                                activeLink === `/execoms/${year}` ? 'text-gray-300' : 'text-white'
                              }`}
                            >
                              {year}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="w-full h-[1px] bg-zinc-600"></div>
                  </>
                ) : (
                  <>
                    <Link
                      to={link.path}
                      onClick={() => {
                        setActiveLink(link.path);
                        setMenuOpen(false);
                      }}
                      className={`block py-1 ${
                        activeLink === link.path ? 'text-gray-300' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                    <div className="w-full h-[1px] bg-zinc-600"></div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;