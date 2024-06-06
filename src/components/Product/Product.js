import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = ({ video, logo, nameGame, typeGame, rateGame }) => {
    return (
        <div className="h-30">
            <img src={video} />
            <div className="flex">
                <img src={logo} />
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
    );
};

export default Product;
