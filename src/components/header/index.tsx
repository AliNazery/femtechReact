import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { navLinks } from "./HeaderData";
import { DownSvg } from "../Common/Icons/hero/hero1";


// Define type for navLinks if necessary
interface NavItem {
  label: string;
  href?: string;
  dropdown?: Array<{ label: string; href: string }>;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLElement | null)[]>([]);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleClickOutside = (event: MouseEvent | Event) => {
    if (
      activeDropdown !== null &&
      !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
    ) {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header
      className={`header z-50 bg-quaternary/20 top-[-1px] sticky transition-colors duration-200 ease-out ${
        sticky ? "bg-white z-999 shadow-shdwhead" : "bg-opacity-0"
      }`}
    >
      <nav className="navbar container relative z-30 flex flex-wrap items-center justify-center sm:px-6 py-3 transition-[padding] duration-200 ease-out">
        <Link className="navbar-brand h-14 w-24" to="/">
          <img
            alt="Wama-solution"
            width="158"
            height="36"
            src="/images/logo/logo2.png" // You can modify the src path as necessary
          />
        </Link>
        <button
          className={`navbar-toggler group lg:hidden relative ml-auto lg:ml-4 block rounded-md border-2 border-black/75 p-1 ${
            isOpen ? "active" : ""
          }`}
          aria-label="navbar toggler"
          onClick={toggleMenu}
        >
          <div className="relative flex h-[30px] w-[30px] transform items-center justify-center overflow-hidden rounded-full ring-0 transition-all duration-200">
            <div
              className={`flex h-[15px] w-[18px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${
                isOpen ? "h-[21px]" : ""
              }`}
            >
              <div
                className={`h-[2px] w-7 origin-left transform bg-dark transition-all duration-300 ${
                  isOpen ? "translate-x-10" : ""
                }`}
              ></div>
              <div
                className={`h-[2px] w-7 transform rounded bg-dark transition-all delay-75 duration-300 ${
                  isOpen ? "translate-x-10" : ""
                }`}
              ></div>
              <div
                className={`h-[2px] w-7 origin-left transform bg-dark transition-all delay-150 duration-300 ${
                  isOpen ? "translate-x-10" : ""
                }`}
              ></div>
              <div
                className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
                  isOpen ? "w-12 translate-x-0" : ""
                }`}
              >
                <div
                  className={`absolute h-[2px] w-5 rotate-0 transform bg-dark transition-all delay-300 duration-500 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`absolute h-[2px] w-5 -rotate-0 transform bg-dark transition-all delay-300 duration-500 ${
                    isOpen ? "-rotate-45" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
        <div
          className={`navbar-wrapper ${
            isOpen
              ? "h-auto rounded-lg p-3 opacity-100 shadow-md max-h-[calc(100vh-250%)] overflow-auto"
              : "hidden"
          } lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto`}
        >
          <ul className="navbar-nav flex w-full flex-col items-center text-center order-3 mx-auto md:text-left lg:order-2 lg:ml-auto lg:mr-0 lg:flex-row lg:w-auto lg:bg-transparent">
            {navLinks.map((navItem: NavItem, index: number) => {
              if (navItem.dropdown) {
                return (
                  <li
                    className="nav-item nav-dropdown group"
                    key={index}
                    ref={(el) => {
                      dropdownRefs.current[index] = el;
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <label
                      htmlFor={`expand-${index}`}
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="nav-link inline-flex items-center lg:py-4 xl:px-6 cursor-pointer select-none">
                        {navItem.label}
                        <DownSvg />
                      </span>
                    </label>
                    <ul
                      className={`nav-dropdown-list m-auto w-[250px] shadow-navdrop rounded-lg bg-white z-10 lg:hover:block lg:m-0 lg:absolute p-3 transition-all duration-300 ${
                        activeDropdown === index
                          ? "block opacity-100"
                          : "hidden opacity-0"
                      }`}
                    >
                      {navItem.dropdown.map((dropdownItem, dropdownIndex) => (
                        <li
                          className="nav-dropdown-item py-2 hover:bg-hoverCo hover:rounded-lg"
                          key={dropdownIndex}
                        >
                          <Link
                            className="nav-dropdown-link py-1 lg:py-2"
                            to={dropdownItem.href}
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li
                  className="nav-item relative text-center z-10 mr-0 lg:text-left"
                  key={index}
                >
                  <Link
                    className="nav-link lg:pl-0 pointer select-none lg:py-4 xl:pr-6"
                    to={navItem.href}
                  >
                    {navItem.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="order-2 mx-auto mb-[0.75rem] flex flex-col items-center lg:mx-0 lg:mb-0 lg:ml-3 lg:flex-row">
            <div className="flex flex-col justify-center gap-5 pt-4 text-center lg:ml-7 lg:flex-row lg:gap-7 lg:pt-0 lg:text-left">
              <Link
                className="btn-login btn-primary w-[100px] min-[340px]:w-[300px] lg:w-auto"
                to="/contact"
              >
                Reach Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
