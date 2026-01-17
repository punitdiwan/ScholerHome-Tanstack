import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { Link } from "@tanstack/react-router";
import { IoHeart } from "react-icons/io5";
import { Users, GraduationCap, BookOpen, Trophy } from "lucide-react";

const stats = [
    {
        id: 1,
        icon: Users,
        value: "250+",
        title: "Teachers",
    },
    {
        id: 2,
        icon: GraduationCap,
        value: "5000+",
        title: "Students",
    },
    {
        id: 3,
        icon: BookOpen,
        value: "100+",
        title: "Courses",
    },
    {
        id: 4,
        icon: Trophy,
        value: "50+",
        title: "Achievements",
    },
];

interface Logo {
    id: number;
    image: string;
    alt: string;
}

const logos: Logo[] = [
    { id: 1, image: "/Header_Logo.png", alt: "Logo 1" },
    { id: 2, image: "https://via.placeholder.com/120x60?text=Logo+2", alt: "Logo 2" },
    { id: 3, image: "https://via.placeholder.com/120x60?text=Logo+3", alt: "Logo 3" },
    { id: 4, image: "https://via.placeholder.com/120x60?text=Logo+4", alt: "Logo 4" },
];

const footerLinks = [
    // { label: "Events", to: "" },
    // { label: "Placements", to: "/placements" },
    { label: "In Media", to: "" },
    { label: "Results", to: "/results" },
    // { label: "Work with us", to: "/careers" },
    { label: "Gallery", to: "/gallery" },
    { label: "Google Streetview", to: "/googleStreetView" },
    { label: "Student Council", to: "/admission" },
    { label: "Calendar", to: "/holidays" },
];


export const Footer: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Logo slider auto
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % logos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-school-primary  text-white">
            {/* First Row */}
            <div className="px-8 py-6 flex flex-col md:flex-row  gap-8">

                {/* Section 1: Logo Slider */}
                <div className="">
                    <h3 className="text-2xl font-abhaya text-center  font-semibold mb-4">Our Partners</h3>

                    <div className="relative overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {stats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.id}
                                        className="min-w-full flex flex-col justify-center items-center gap-2"
                                    >
                                        {/* ICON */}
                                        <Icon className="w-20 h-20 " />

                                        {/* VALUE */}
                                        <h3 className="text-xl font-bold text-secondary">
                                            {item.value}
                                        </h3>

                                        {/* TITLE */}
                                        <p className="text-md font-medium text-white/90">
                                            {item.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {logos.map((_, idx) => (
                            <span
                                key={idx}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-white scale-110" : "bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>


                {/* Section 2: Buttons */}
                <div className="">
                    <h3 className="text-2xl font-abhaya  font-semibold mb-4">Quick Links</h3>
                    <div className="flex flex-wrap gap-2">
                        {footerLinks.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="border border-white text-white px-3 py-1 rounded
                                         hover:bg-white hover:text-gray-900
                                           transition-colors duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>


                    {/* Social Media */}
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebook size={20} /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-sky-400 transition-colors"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedin size={20} /></a>
                    </div>
                </div>

                {/* Section 3: Contact */}
                <div className=" flex flex-col gap-4">

                    {/* Row 1: Logo + Address */}
                    <div className="flex items-start gap-4">

                        {/* Logo */}
                        <img
                            src="/Scholar_logo.png"
                            alt="School Logo"
                            className="w-14 h-14 object-contain"
                        />

                        {/* Address */}
                        <p className="text-gray-300 text-sm leading-relaxed capitalize">
                        Address E-2 arera colony 
                        </p>
                    </div>

                    {/* Row 2: Email + Phone (Column) */}
                    <div className="flex flex-col gap-2">

                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <HiMail size={18} />
                            <a
                                href="mailto:info@sh.com"
                                className="text-gray-300 hover:text-white text-sm"
                            >
                                info@sh.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2">
                            <HiPhone size={18} />
                            <a
                                href="tel:+91 9755052856"
                                className="text-gray-300 hover:text-white text-sm"
                            >
                                +91 9755052856
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Second Row */}
            <div className="bg-black  border-t border-gray-700 mt-4 py-4 text-center text-white text-sm flex flex-col md:flex-row md:justify-between items-center px-4 gap-2">
                <p>©2025. All rights reserved.</p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <a href="#" className=" hover:text-white/80">Disclaimer</a>
                    <a href="#" className=" hover:text-white/80">Privacy Policy</a>
                    <span className="flex items-center">Powered by <IoHeart color="red" size={20} className="mx-1"/> <a href="https://maitretech.com/" target="_blank" rel="noopener noreferrer" className=" hover:text-yellow-500">Matritech Solutions</a></span>
                </div>
            </div>
        </footer>
    );
};
