import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = ({ game, onSelect }) => {
    const { imgVideo, video, logo, nameGame, typeGame, rateGame } = game;

    const handleClick = () => {
        onSelect(video);
    };

    console.log(imgVideo);
    return (
        <div className="h-80 flex flex-col justify-center items-center p-2 hover:bg-[#F6F6F6]" onClick={handleClick}>
            <div className="w-11/12 ">
                <div className="w-full h-52 relative">
                    <img className="w-full h-full object-cover object-center rounded-md" src={imgVideo.src} />
                    <svg className="absolute top-1/2 left-1/2 w-14 h-auto transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:border-8	;" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path    
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                            fill="black"
                            fill-opacity="0.54"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M39.6667 28L21 17.5V38.5L39.6667 28Z"
                            fill="white"
                        ></path>
                    </svg>
                    ;
                </div>
                <div className="flex h-16 mt-2">
                    <img className="w-16 h-auto object-cover object-center" src={logo.src} />
                    <div className="w-full ml-6 flex flex-col justify-around">
                        <div className="text-base font-normal leading-4 text-[#5f6368]">{nameGame}</div>
                        <div className="text-base font-normal text-[#5f6368]">{typeGame}</div>
                        <div className="flex">
                            <div className="text-base leading-none font-normal text-[#5f6368] mr-1">{rateGame}</div>
                            <FontAwesomeIcon icon={faStar} className="text-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
