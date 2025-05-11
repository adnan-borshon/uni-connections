import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/uiu-logo.png";
import hamburger from "/Icons/hamburger.png";
import SearchBar from "/Icons/search.png";
function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const HamburgerOpen = () => {
    setHamburgerOpen(true);
  };
  const HamburgerClose = () => {
    setHamburgerOpen(false);
  };

  return (
    <section className="overflow-hidden fixed w-full top-0 z-50 bg-white shadow-md">
      {/* whole navbar container */}
      <div className="container flex items-center shrink border-b-2 border-gray-300 pb-2">
        {/* logo */}
        <div className="logo center ">
          <img src={logo} className="w-15 h-15 rounded-sm object-cover mx-3" />
          <h1 className="font-semibold">
            United International <br />
            University
          </h1>
        </div>

        {/* All Navigations buttons for pc*/}
        <div className="Navigation lg:flex shrink hidden ">
          <Link to="/" className="nav-items">
            Home
          </Link>
          <Link to="/news" className="nav-items">
            News
          </Link>
          <Link to="/achievements" className="nav-items">
            Achievements
          </Link>
          <Link to="/study-groups" className="nav-items">
            Study Groups
          </Link>
          <Link to="/job-postings" className="nav-items">
            Job Postings
          </Link>
          <Link to="/tutoring" className="nav-items">
            Tutoring
          </Link>
          <Link to="/forums" className="nav-items">
            {" "}
            Forums
          </Link>
          <Link to="/about" className="nav-items">
            About
          </Link>
        </div>

        {/* Hamburger menu  for mobile */}
        <div
          className="hamburger hover-effect-normal lg:hidden cursor-pointer flex-1 flex justify-end "
        >

          <img src={hamburger} onClick={() => setHamburgerOpen((prev) => !prev)} className="w-10 h-7 mr-2 " />
        </div>

        {/* Search bar and login button section */}
        <div className="hidden lg:flex gap-6 mx-auto ">
          <div className="border-2 border-gray-300 rounded-xl flex items-center px-1 shadow-md focus-within:border-black">
            <img src={SearchBar} className=" h-6 w-6 p-[2px] pointer-events-none "/>
          <input
            type="text"
            className="inputs border-none focus:outline-none"
            placeholder="Search"
          />
            </div>
          <div className="button hover-effect-normal">Login</div>
        </div>
      </div>

      {/* Hamburger menu items which will only show on smaller devices*/}
      {hamburgerOpen && (
        
        <div className="Navigation flex flex-col gap-2 bg-gray-100 rounded w-full ">
             <div className="border-2 border-gray-300 border-b-2 flex items-center px-1 py-2  focus-within:border-black">
            <img src={SearchBar} className=" h-6 w-6 p-[2px] pointer-events-none "/>
          <input
            type="text"
            className="inputs border-none focus:outline-none"
            placeholder="Search"
          />
            </div>
          <Link
            to="/"
            onClick={HamburgerClose}
            className="nav-items border-b-1 border-gray-300 hover:bg-gray-500"
          >
            Home
          </Link>
          <Link
            to="/news"
            onClick={HamburgerClose}
            className="nav-items border-b-1 border-gray-300 hover:bg-gray-500"
          >
            News
          </Link>
          <Link
            to="/achievements"
            onClick={HamburgerClose}
            className="nav-items border-b-1 border-gray-300 hover:bg-gray-500"
          >
            Achievements
          </Link>
          <Link
            to="/study-groups"
            onClick={HamburgerClose}
            className="nav-items border-b-1 border-gray-300 hover:bg-gray-500"
          >
            Study Groups
          </Link>
          <Link
            to="/job-postings"
            onClick={HamburgerClose}
            className="nav-items border-b-1 border-gray-300 hover:bg-gray-500"
          >
            Job Postings
          </Link>
          <Link
            to="/tutoring"
            onClick={HamburgerClose}
            className="nav-items border-b-1 border-gray-300 hover:bg-gray-500"
          >
            Tutoring
          </Link>
          <Link
            to="/forums"
            onClick={HamburgerClose}
            className="nav-items border-b-1 border-gray-300 hover:bg-gray-500"
          >
            {" "}
            Forums
          </Link>
          <Link
            to="/about"
            onClick={HamburgerClose}
            className="nav-items border-b-1 border-gray-300 hover:bg-gray-500"
          >
            About
          </Link>
        </div>
      )}
    </section>
  );
}

export default Navbar;
