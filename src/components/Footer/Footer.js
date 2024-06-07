import React from "react";

const Footer = () => {
    return (
        <div className="mb-20 mt-7">
            <hr className="mb-10" />
            <div className="flex w-1/4 justify-between">
                <ul>
                    <li className="font-medium leading-7 text-[#5f6368] hover:text-[#056046]">Google Play</li>
                    <li className="cursor-pointer leading-7 text-[#5f6368] hover:text-[#056046]">Play Pass</li>
                    <li className="cursor-pointer leading-7 text-[#5f6368] hover:text-[#056046]">Play Points</li>
                    <li className="cursor-pointer leading-7 text-[#5f6368] hover:text-[#056046]">Gift cards</li>
                    <li className="cursor-pointer leading-7 text-[#5f6368] hover:text-[#056046]">Redeem</li>
                    <li className="cursor-pointer leading-7 text-[#5f6368] hover:text-[#056046]">Refund policy</li>
                </ul>
                <ul>
                    <li className="font-medium leading-7 text-[#5f6368] hover:text-[#056046]">Kids & family</li>
                    <li className="cursor-pointer leading-7 text-[#5f6368] hover:text-[#056046]">Parent Guide</li>
                    <li className="cursor-pointer leading-7 text-[#5f6368] hover:text-[#056046]">Family sharing</li>
                </ul>
            </div>
            <div className="w-full flex justify-between mt-10">
                <ul className="flex w-1/2">
                    <li className="text-sm mr-8 text-[#5f6368]">Terms of Service</li>
                    <li className="text-sm mr-8 text-[#5f6368]">Privacy</li>
                    <li className="text-sm mr-8 text-[#5f6368]">About Google Play</li>
                    <li className="text-sm mr-8 text-[#5f6368]">Developers</li>
                    <li className="text-sm text-[#5f6368]">Google Store</li>
                </ul>
                <div className="text-sm text-[#5f6368]">Vietnam (English)</div>
            </div>
        </div>
    );
};

export default Footer;
