import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

0;

const ProductTrend = ({ game }) => {
    const { index, logo, nameGame, typeGame, rateGame } = game;

    return (
        <div className="h-20 flex justify-center mt-5 mr-3">
            <div className="flex w-8/12	 items-center ">
                <div className=" mr-3">{index + 1}</div>
                <img className="w-20 h-auto object-cover object-center rounded-lg mr-3" src={logo.src} />
                <div className="flex flex-col justify- mr-3">
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
