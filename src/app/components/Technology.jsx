"use client";
import React, { useState } from "react";

function Technology({ technology }) {
    const [currentTechnology, setCurrentTechnolgy] = useState(technology[0]);

    function HandleClick(item) {
        setCurrentTechnolgy(item);
    }
    return (
        <div
            id="TECHNOLOGY"
            className="py-[48px] pl-[165px] flex-1 overflow-hidden w-screen"
        >
            <div className="flex font-barlow text-[28px] tracking-[4px] gap-[24px]">
                <div className="font-bold tracking-[4.72px] text-white opacity-25">
                    03
                </div>
                <div className="">SPACE LAUNCH 101</div>
            </div>
            <div className="mt-[58px] flex gap-[32px] py-[67px] justify-between flex-row-reverse">
                <div className="w-[608px]">
                    <img
                        src={currentTechnology.images.portrait}
                        alt={currentTechnology.name}
                        className="w-[600px]"
                    />
                </div>
                <div className="flex flex-1 gap-[64px] items-center">
                    <div className="">
                        {technology.map((item, index) => (
                            <div
                                key={index}
                                className={`${
                                    item.name == currentTechnology.name
                                        ? "bg-white text-black"
                                        : "text-white/50 hover:text-white hover:ring-white ring-[1px] ring-white/50 "
                                } size-[80px] rounded-full  flex items-center justify-center text-[32px] font-bellefair mb-[32px] transition-colors duration-200 cursor-pointer`}
                                onClick={() => HandleClick(item)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col justify-between gap-[24px]">
                        <div className="">
                            <div className="text-white opacity-50 font-bellefair text-[32px]">
                                THE TERMINOLOGY
                            </div>
                            <div className="text-[56px] text-white font-bellefair uppercase">
                                {currentTechnology.name}
                            </div>
                        </div>
                        <div className="text-Blue-300 font-barlow text-[18px] text-wrap">
                            {currentTechnology.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;
