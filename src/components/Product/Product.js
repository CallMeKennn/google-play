import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = ({ game }) => {
    const { imgVideo, video, logo, nameGame, typeGame, rateGame } = game;
    console.log(imgVideo);
    return (
        <div className="h-80 flex flex-col justify-center items-center">
            <div className="w-11/12">
                <img className="h-56 w-full" src={imgVideo.src} />
                <div className="flex w-32">
                    <img className="" src={logo.src} />
                    <div>
                        <div>{nameGame}</div>
                        <div>{typeGame}</div>
                        <span>{rateGame}</span>
                        <span>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
