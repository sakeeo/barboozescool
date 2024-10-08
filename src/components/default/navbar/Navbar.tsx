"use client"
import Image from "next/image";
import  Logo from "@/assets/logo.png"
import {MenuOutlined} from "@ant-design/icons";
import { useState } from 'react';

export default function (

){

    const [isMenuOpen, setMenuOpen] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div className="sticky top-0 bg-white z-50">
            <div
                className="w-full flex justify-between border-b-[1px] border-b-slate-300 shadow-xl py-3 px-4 items-center">
                <div className="lg:w-1/2">
                    <div className="lg:text-3xl flex items-center">
                        <Image width={50} height={50} src={Logo} alt="barboozescool"/>
                        <div className="px-4 font-bold">BAR Booze'S Cool</div>
                    </div>
                </div>
                <ul className="lg:w-1/2 flex justify-end">
                    <li className="hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300">
                        <a href="#Hero">Home</a>
                    </li>
                    <li className="hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300">
                        <a href="#AboutUs">About Us</a>
                    </li>
                    <li className="hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300">
                        <a href="#Services">Packages</a>
                    </li>
                    <li className="hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300">
                        <a href="#Gallery">Gallery</a>
                    </li>
                    <li className="hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300">
                        <a href="#Contact">Contact</a>
                    </li>
                    <li className="lg:hidden inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300">
                        <MenuOutlined onClick={toggleMenu}/>
                    </li>
                </ul>
            </div>

            {/* Side Menu */}
            <div
                className={`fixed top-0 left-0 h-full bg-white text-black w-64 transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out shadow-lg z-50`}
            >
                <div className="p-4 text-xl font-semibold">BAR Booze'S Cool</div>
                <ul className="space-y-4 p-3">
                    <li>
                        <a href="#Hero" className="hover:bg-amber-300 block px-4 py-2 rounded-md">Home</a>
                    </li>
                    <li>
                        <a href="#AboutUs" className="hover:bg-amber-300 block px-4 py-2 rounded-md">About Us</a>
                    </li>
                    <li>
                        <a href="#Services" className="hover:bg-amber-300 block px-4 py-2 rounded-md">Packages</a>
                    </li>
                    <li>
                        <a href="#Gallery" className="hover:bg-amber-300 block px-4 py-2 rounded-md">Gallery</a>
                    </li>
                    <li>
                        <a href="#Contact" className="hover:bg-amber-300 block px-4 py-2 rounded-md">Contact</a>
                    </li>
                </ul>
            </div>

            {/* Overlay (when the side menu is open) */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMenu} // Close the menu when clicking outside
                ></div>
            )}
        </div>

    )
}