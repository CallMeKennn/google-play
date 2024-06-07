"use client";

import Header from "@/components/Header/Header";
import MultipleRows from "@/components/MultipleRows/MultipleRows";
import { useState } from "react";
import Slick from "@/components/Slick/Slick";
import "./globals.css";
import "./globalsicon.css";
import { topRatedGame, topFree, topPaid, topGrossing } from "@/fakedata/data";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [data, setData] = useState(topFree);
    const [text, setText] = useState("Top free");
    const [selectDevice, setSelectDevice] = useState("");

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

                <Footer/>
            </div>  
        </div>
    );
}
