"use client";
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import SearchModal from "../components/ui/NavSearch";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Become a Partner",
    "Contact Us",
    "Business Consulting",
  ];

  const navigationItems = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "#" },
    { title: "Services", link: "#" },
    { title: "Become a Partner", link: "#" },
    { title: "Contact Us", link: "#" },
    { title: "Business Consulting", link: "#" },
  ];

  return (
    <nav className="w-full bg-black border-b border-gray-200">
      <div className="w-full  px-2 md:px-4">
        <div className="flex h-20 items-center justify-between lg:justify-around">
          {/* Left section */}
          <div className="flex items-center h-full w-[200px] xl:w-[250px]">
            <div className="flex items-center gap-2 w-full h-full xl:p-3">
              <div className="w-full h-full relative">
                <Image
                  alt="Careertronic company logo"
                  src="/Logo.png"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Center section - Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="relative p-1 text-xs xl:text-sm font-medium text-gray-100 transition-colors  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative flex items-center">
              {/* Search button and input */}

              <SearchModal />

              {/* Collapsible search input */}
            </div>

            {/* Login button */}
            <button className="flex items-center justify-center bg-transparent border-1 border-red-700 text-white p-2 rounded-lg hover:bg-red-700">
              <LogIn className="w-4 xl:w-4.5 h-4 xl:h-4.5" />
              <span className="ml-2 hidden sm:inline text-xs xl:text-sm">
                Login
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 rounded-lg text-gray-100  lg:hidden bg-transparent border-1 border-red-700 hover:bg-red-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed z-10 inset-x-0 top-16 bg-black border-b border-gray-200 lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ maxHeight: isMenuOpen ? "100vh" : "0" }}
        >
          <div className="px-4 py-2 space-y-1 mt-5">
            {menuItems.map((item, index) => (
              <Link
                key={`${item}-${index}`}
                href="#"
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  index === 2
                    ? "text-gray-100 hover:text-red-400"
                    : index === menuItems.length - 1
                    ? "text-gray-100 hover:text-red-400"
                    : "text-gray-100 hover:text-red-400"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
