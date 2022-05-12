import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-blue-800">
      <div className="hidden bg-neutral-lightest justify-between px-20 py-24 laptop:flex">
        
      </div>

      <div className="bg-brand-black flex flex-col items-center justify-center gap-3 py-8 laptop:py-9">
        <Link to="/" >
          <Logo />
        </Link>

        <ul className="text-white text-center laptop:hidden">
          <li>
            <Link to="/"  className="block p-4">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us"  className="block p-4">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block p-4">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
