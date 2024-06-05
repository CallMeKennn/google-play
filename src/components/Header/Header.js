"use client";

import React from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/img/Google_Play_2022_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faCircleUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <div className={`bg-orange-400 h-16 flex items-center justify-between fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className="flex h-full items-center w-1/4 justify-between ml-8">
                <img className="h-10 object-cover object-center m-0" src={logo.src} />
                <ul className="flex h-full ml-6">
                    <li className="bg-green-300 w-20 h-full flex justify-center items-center cursor-pointer">Games</li>
                    <li className="bg-green-300 w-20 h-full flex justify-center items-center cursor-pointer">Apps</li>
                    <li className="bg-green-300 w-20 h-full flex justify-center items-center cursor-pointer">Moives</li>
                    <li className="bg-green-300 w-20 h-full flex justify-center items-center cursor-pointer">Books</li>
                    <li className="bg-green-300 w-20 h-full flex justify-center items-center cursor-pointer">Kids</li>
                </ul>
            </div>
            <div className="flex">
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
            </div>
        </div>
    );
};

export default Header;
