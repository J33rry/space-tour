"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Technology({ technology }) {
    const [currentTechnology, setCurrentTechnolgy] = useState(technology[0]);

    const imageRef = useRef(null);
    const contentRef = useRef(null);

    function HandleClick(item) {
        if (item.name === currentTechnology.name) return; // prevent repeat animation
        setCurrentTechnolgy(item);
    }

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: "easeIn" }
        );
        gsap.fromTo(
            contentRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "easeIn" }
        );
    }, [currentTechnology]);

    return (
        <div
            id="TECHNOLOGY"
            className="py-[48px] pl-[165px] flex-1 overflow-hidden w-screen"
        >
            <div className="flex font-barlow text-[28px] tracking-[4px] gap-[24px]">
                <div className="font-bold tracking-[4.72px] text-white opacity-25">
                    03
                </div>
                <div>SPACE LAUNCH 101</div>
            </div>

            <div className="mt-[58px] flex gap-[32px] py-[67px] justify-between flex-row-reverse">
                <div className="w-[608px]">
                    <img
                        ref={imageRef}
                        src={currentTechnology.images.portrait}
                        alt={currentTechnology.name}
                        className="w-[600px]"
                    />
                </div>

                <div className="flex flex-1 gap-[64px] items-center">
                    <div>
                        {technology.map((item, index) => (
                            <div
                                key={index}
                                className={`${
                                    item.name === currentTechnology.name
                                        ? "bg-white text-black"
                                        : "text-white/50 hover:text-white hover:ring-white ring-[1px] ring-white/50"
                                } size-[80px] rounded-full flex items-center justify-center text-[32px] font-bellefair mb-[32px] transition-colors duration-200 cursor-pointer`}
                                onClick={() => HandleClick(item)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex flex-col justify-between gap-[24px]"
                        ref={contentRef}
                    >
                        <div>
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
