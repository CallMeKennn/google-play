import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

0;

const ProductTrend = ({ game }) => {
    const { index, logo, nameGame, typeGame, rateGame } = game;

    return (
        <div className="h-16 col-span-1 flex justify-center mt-5">
            <div className="flex w-3/5 items-center justify-around">
                <div>{index + 1}</div>
                <img className="w-16 h-auto object-cover object-center" src={logo.src} />
                <div className="flex flex-col justify-around">
                    <div className="text-base font-normal leading-4 text-[#5f6368]">{nameGame}</div>
                    <div className="text-base font-normal text-[#5f6368]">{typeGame}</div>
                    <div className="flex">
                        <div className="text-base leading-none font-normal text-[#5f6368] mr-1">{rateGame}</div>
                        <FontAwesomeIcon icon={faStar} className="text-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTrend;
