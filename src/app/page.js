"use client";

import Header from "@/components/Header/Header";
import MultipleRows from "@/components/MultipleRows/MultipleRows";
import { useState } from "react";
import Slick from "@/components/Slick/Slick";
import "./globals.css";
import "./globalsicon.css";
import { topRatedGame, topFree, topPaid, topGrossing, everyoneHands } from "@/fakedata/data";
import Footer from "@/components/Footer/Footer";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faStar, faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [data, setData] = useState(topFree);
    const [text, setText] = useState("Top free");
    const [selectDevice, setSelectDevice] = useState("");

    const SampleNextArrow = ({ className, style, onClick }) => {
        return (
            <div>
                <FontAwesomeIcon
                    className={className}
                    style={{ ...style, color: "green", height: "35px", width: "35px", marginRight: "-1rem" }}
                    onClick={onClick}
                    icon={faCircleChevronRight}
                />
            </div>
        );
    };

    const SamplePrevArrow = ({ className, style, onClick }) => {
        return (
            <div>
                <FontAwesomeIcon
                    className={className}
                    style={{ ...style, color: "green", height: "35px", width: "35px", marginLeft: "-1rem" }}
                    onClick={onClick}
                    icon={faCircleChevronLeft}
                />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="w-full flex justify-center">
            <Header />

            {/* All device */}
            <div className="w-8/12 mt-20">
                <ul className="flex w-3/5 justify-between">
                    <li
                        className={`rounded-full py-1 px-4 border-slate-500 border flex cursor-pointer ${
                            selectDevice === 1 ? "text-[#056046] bg-[#DDE9E6] border-none" : ""
                        }`}
                        onClick={() => setSelectDevice(1)}
                    >
                        <span className="material-symbols-outlined">desktop_windows</span>
                        <span className="ml-2">Windows</span>
                    </li>
                    <li
                        className={`rounded-full py-1 px-4 border-slate-500 border flex cursor-pointer ${
                            selectDevice === 2 ? "text-[#056046] bg-[#DDE9E6] border-none" : ""
                        }`}
                        onClick={() => setSelectDevice(2)}
                    >
                        <span className="material-symbols-outlined">phone_iphone</span>
                        <span className="ml-2">Phone</span>
                    </li>
                    <li
                        className={`rounded-full py-1 px-4 border-slate-500 border flex cursor-pointer ${
                            selectDevice === 3 ? "text-[#056046] bg-[#DDE9E6] border-none" : ""
                        }`}
                        onClick={() => setSelectDevice(3)}
                    >
                        <span className="material-symbols-outlined">tablet_mac</span>
                        <span className="ml-2">Tablet</span>
                    </li>
                    <li
                        className={`rounded-full py-1 px-4 border-slate-500 border flex cursor-pointer ${
                            selectDevice === 4 ? "text-[#056046] bg-[#DDE9E6] border-none" : ""
                        }`}
                        onClick={() => setSelectDevice(4)}
                    >
                        <span className="material-symbols-outlined">tv</span>
                        <span className="ml-2">TV</span>
                    </li>
                    <li
                        className={`rounded-full py-1 px-4 border-slate-500 border flex cursor-pointer ${
                            selectDevice === 5 ? "text-[#056046] bg-[#DDE9E6] border-none" : ""
                        }`}
                        onClick={() => setSelectDevice(5)}
                    >
                        <span className="material-symbols-outlined">laptop_chromebook</span>
                        <span className="ml-2">Chromebook</span>
                    </li>
                    <li
                        className={`rounded-full py-1 px-4 border-slate-500 border flex ${
                            selectDevice === 6 ? "text-[#056046] bg-[#DDE9E6] border-none cursor-pointer" : ""
                        }`}
                        onClick={() => setSelectDevice(6)}
                    >
                        <span className="material-symbols-outlined">watch</span>
                        <span className="ml-2">Watch</span>
                    </li>
                </ul>

                {/* Top-rated games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Popular games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Top Free */}
                <div className="mt-7">
                    <h2 className="text-2xl font-medium">{text}</h2>
                    <div className="mt-4    ">
                        <button
                            className={`mr-2 rounded-full py-1 px-4 border-slate-500 border ${
                                selectedIndex === 1 ? "text-[#056046] bg-[#DDE9E6] border-none" : ""
                            }`}
                            onClick={() => {
                                setSelectedIndex(1);
                                setData(topFree);
                                setText("Top free");
                            }}
                        >
                            Top free
                        </button>
                        <button
                            className={`mr-2 rounded-full py-1 px-4 border-slate-500 border ${
                                selectedIndex === 2 ? "text-[#056046] bg-[#DDE9E6] border-none" : ""
                            }`}
                            onClick={() => {
                                setSelectedIndex(2);
                                setData(topGrossing);
                                setText("Top grossing");
                            }}
                        >
                            Top grossing
                        </button>
                        <button
                            className={`rounded-full py-1 px-4 border-slate-500 border ${
                                selectedIndex === 3 ? "text-[#056046] bg-[#DDE9E6] border-none" : ""
                            }`}
                            onClick={() => {
                                setSelectedIndex(3);
                                setData(topPaid);
                                setText("Top paid");
                            }}
                        >
                            Top paid
                        </button>
                    </div>

                    <div>
                        <MultipleRows data={data} />
                    </div>
                </div>

                {/* Top-rated games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Top-rated games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Recommended for you */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Recommended for you</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Multiplayer games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Multiplayer games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/*Offline games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Offline games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Casual games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Casual games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Non-stop action */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Non-stop action</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Abstract graphics */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Abstract graphics</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Round one, fight! */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Round one, fight!</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/*Stylized games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Stylized games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/*Board games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Board games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Zombie games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Zombie games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/*Rule the arcade */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Rule the arcade</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Runner games*/}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Runner games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Action-adventure games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Action-adventure games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Strategy games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Strategy games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/*Racing games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Racing games</h2>
                    <Slick data={topRatedGame} />
                </div>

                <div className="slider-container mt-7 text-2xl font-medium">
                    <h2>In everyone's hands</h2>
                    <Slider {...settings}>
                        {everyoneHands.map((game, index) => (
                            <div key={index} className="flex w-full mt-5">
                                <div className="flex items-center flex-col ">
                                    <img src={game.logo.src} className="w-28 h-auto object-cover object-center" />
                                    <div className=" w-24">{game.nameGame}</div>
                                    <div className="flex w-24 items-center">
                                        <div className="text-base leading-none font-normal text-[#5f6368] mr-1">
                                            {game.rateGame}
                                        </div>
                                        <FontAwesomeIcon icon={faStar} className="text-sm" />
                                        <div className="text-sm ml-2">đ{game.price ?? game.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Cartoony games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Cartoony games</h2>
                    <Slick data={topRatedGame} />
                </div>

                {/* Simulation games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Simulation games</h2>
                    <Slick data={topRatedGame} />
                </div>

                <Footer />
            </div>
        </div>
    );
}
