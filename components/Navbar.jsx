"use client";

import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { useAuth } from "../src/context/AuthContext"; 

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("signIn");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "Categories", "About", "Courses"];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="hidden lg:flex bg-[#031d24] text-white text-sm justify-between items-center px-8 py-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#0fb6e3]" />
            <span>Call: 016 37 652 900</span>
          </div>

          <span className="hidden sm:inline">|</span>

          <div className="flex items-center gap-2">
            <MdEmail className="text-[#0fb6e3]" />
            <span>Email: asheknabil11@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-sm bg-black">

        <div className="flex items-center gap-2 text-white">
          <div className="bg-[#0fb6e3] p-2 rounded-full font-bold text-2xl">E</div>
          <h2 className="font-bold text-2xl">School</h2>
        </div>

        <ul className="hidden lg:flex gap-8 text-white font-medium">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={
                idx === 1 ? "/categories" :
                idx === 2 ? "/about" :
                idx === 3 ? "/courses" :
                "/"
              }
              className="relative group hover:text-[#0fb6e3] cursor-pointer"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0fb6e3] scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          {!user ? (
            <>
              <button
                onClick={() => {
                  setModalType("signIn");
                  setOpenModal(true);
                }}
                className="group border border-[#0fb6e3] inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full hover:bg-[#0fb6e3] transition-all duration-300"
              >
                Sign In
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 w-5 h-5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setModalType("signUp");
                  setOpenModal(true);
                }}
                className="group bg-[#0fb6e3] inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-99 transition-all duration-300"
              >
                Sign Up
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 w-5 h-5 transition-transform" />
              </button>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-600 text-white px-6 py-3 rounded-full font-bold"
            >
              Logout ({user.name})
            </button>
          )}
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X className="text-white w-7 h-7" />
            ) : (
              <Menu className="text-white w-7 h-7" />
            )}
          </button>
        </div>

      </nav>

      <LoginModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        type={modalType}
        setType={setModalType}
      />
    </header>
  );
};

export default Navbar;
