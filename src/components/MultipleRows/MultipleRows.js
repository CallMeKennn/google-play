import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import ProductTrend from "@/components/ProductTrend/ProductTrend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

function MultipleRows({data}) {
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
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 3,
        slidesPerRow: 1,
        slidesToScroll: 9,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((game, index) => (
                    <ProductTrend game={{ index, ...game }} />
                ))}
            </Slider>
        </div>
    );
}

export default MultipleRows;
