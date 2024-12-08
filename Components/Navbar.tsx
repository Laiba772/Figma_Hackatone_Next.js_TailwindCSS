"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* Top Bar */}
            <div className="md:px-56 hidden text-gray-200 md:flex justify-between items-center px-4 py-2 bg-[#272343]">
                {/* Left Section */}
                <div className="flex items-center">
                    <FaCheck className="text-white text-lg mr-2" />
                    <span>Summer Sale Free Delivery on Orders Over $50!</span>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-6 text-sm">
                    <select className="bg-customGray text-white border-none outline-none">
                        <option>English</option>
                        <option>French</option>
                        <option>Spanish</option>
                        <option>Urdu</option>
                    </select>
                    <div className="flex items-center space-x-1 hover:underline cursor-pointer">
                        <Link href="/faq">
                            FAQ&apos;s
                        </Link>
                    </div>
                    <div className="flex items-center space-x-1">
                        <CiCircleAlert size={16} />
                        <span className="hover:underline cursor-pointer">Need Help</span>
                    </div>
                </div>
            </div>

            {/* Middle Bar */}
            <div className="bg-gray-100 md:px-56 shadow-md border-b border-gray-200 px-4 py-3">
                <div className="container h-19 mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 size-10">
                        <Image src="/Logo Icon.png" alt="Logo" width={50} height={50} priority />
                        <span className="text-xl font-bold text-gray-700">Comforty</span>
                    </div>

                    {/* Cart */}
                    <div className="relative hidden md:flex items-center">
                        <Link href="/cart">
                            <BsCartDash size={30} className="text-gray-700" />
                        </Link>
                        <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs rounded-full px-1">
                            4
                        </span>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <FaBars
                            size={20}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="cursor-pointer text-gray-700"
                        />
                    </div>
                </div>
            </div>

            {/* Section 3 - Menu and Contact */}
            <div className="hidden md:px-56 md:flex bg-white px-4 py-5 border-white shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Links */}
                    <div className="flex space-x-6 font-thin text-gray-700">
                        <Link href="/" className="text-teal-600 underline">
                            Home
                        </Link>
                        <Link href="/productsection" className="hover:text-teal-600 hover:underline">
                            Product
                        </Link>
                        <Link href="/contact" className="hover:text-teal-600 hover:underline">
                            Contact
                        </Link>
                        <Link href="/about" className="hover:text-teal-500 hover:underline">
                            About
                        </Link>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-500 hover:underline">
                            Contact: (999) 654-1111
                        </span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
                    <Link href="/" className="text-teal-600">
                        Home
                    </Link>
                    <Link href="/productsection" className="hover:text-teal-600 hover:underline">
                        Product
                    </Link>
                    <Link href="/contact" className="hover:text-teal-600 hover:underline">
                        Contact
                    </Link>
                    <Link href="/about" className="hover:text-teal-600 hover:underline">
                        About
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
