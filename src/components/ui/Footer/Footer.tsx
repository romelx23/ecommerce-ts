import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className="mt-auto h-40 bg-blue-800 py-8 print:hidden">
      <div className="flex flex-col items-center justify-center gap-3">
          <Logo />
        <ul className="text-white text-center laptop:hidden">
          <li>
            <Link to="/"  className="block" style={{textDecoration:'none',color:'#fff'}}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us"  className="block" style={{textDecoration:'none',color:'#fff'}}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block" style={{textDecoration:'none',color:'#fff'}}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
