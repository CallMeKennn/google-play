"use client";

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Product from "../Product/Product";

const Slick = ({ data }) => {
    console.log(data)
    const [isOpen, setIsOpen] = useState(false);
    const [videoId, setVideoId] = useState("")

    const handleSelectVideo = (videoId) => {
        setIsOpen(true)
        setVideoId(videoId)
    }

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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((game, index) => (
                    <Product key={index} game={{...game}} onSelect={handleSelectVideo}/>
                ))}
            </Slider>

            <ModalVideo
                channel="youtube"
                youtube={{ autoplay: 1, mute: 0 }}
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};

export default Slick;
