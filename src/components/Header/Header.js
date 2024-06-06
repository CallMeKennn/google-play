"use client";

import React from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/img/Google_Play_2022_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faCircleUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`h-16 flex items-center justify-between fixed w-full z-10 transition-all duration-300 ${
                isScrolled ? "shadow-lg" : ""
            }`}
        >
            <div className="flex h-full items-center w-1/4 justify-between ml-8">
                <img className="h-10 object-cover object-center m-0" src={logo.src} />
                <ul className="flex h-full ml-6">
                    <li
                        onClick={() => handleClick(1)}
                        key={1}
                        className={` w-20 h-full font-medium flex justify-center items-center cursor-pointer ${
                            selectedIndex === 1 ? "text-[#01875F]" : ""
                        }`} 
                    >
                        Games
                    </li>
                    <li
                        onClick={() => handleClick(2)}
                        key={2}
                        className={` w-20 h-full font-medium flex justify-center items-center cursor-pointer ${
                            selectedIndex === 2 ? "text-[#01875F]" : ""
                        }`}
                    >
                        Apps
                    </li>
                    <li
                        onClick={() => handleClick(3)}
                        key={3}
                        className={` w-20 h-full font-medium flex justify-center items-center cursor-pointer ${
                            selectedIndex === 3 ? "text-[#01875F]" : ""
                        }`}
                    >
                        Moives
                    </li>
                    <li
                        onClick={() => handleClick(4)}
                        key={4}
                        className={` w-20 h-full font-medium flex justify-center items-center cursor-pointer ${
                            selectedIndex === 4 ? "text-[#01875F]" : ""
                        }`}
                    >
                        Books
                    </li>
                    <li
                        onClick={() => handleClick(5)}
                        key={5}
                        className={` w-20 h-full font-medium flex justify-center items-center cursor-pointer ${
                            selectedIndex === 5 ? "text-[#01875F]" : ""
                        }`}
                    >
                        Kids
                    </li>
                </ul>
            </div>
            <div className="flex mr-8 w-1/12 h-full items-center justify-around">
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="text-[#5f6368] cursor-pointer    " />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleQuestion} size="xl" className="text-[#5f6368] cursor-pointer " />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleUser} size="xl" className="text-[#5f6368] cursor-pointer " />
                </div>
            </div>
        </div>
    );
};

export default Header;
