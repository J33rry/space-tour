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
            className="p-[24px] md:p-[40px] xl:py-[48px] xl:pl-[165px] flex-1 xl:overflow-hidden w-screen"
        >
            <div className="flex font-barlow justify-center md:justify-start text-[16px] md:text-[20px] text-center md:text-left tracking-[15%] xl:text-[28px] xl:tracking-[4px] gap-[24px]">
                <div className="font-bold tracking-[4.72px] text-white opacity-25">
                    03
                </div>
                <div>SPACE LAUNCH 101</div>
            </div>

            <div className="mt-[58px] flex gap-[32px] py-[24px] xl:py-[67px] justify-between flex-col xl:flex-row-reverse">
                <div className="xl:w-[608px]">
                    <img
                        ref={imageRef}
                        src={currentTechnology.images.portrait}
                        alt={currentTechnology.name}
                        className="w-full md:hidden xl:block"
                    />
                    <img
                        src={currentTechnology.images.landscape}
                        alt=""
                        className="hidden md:block xl:hidden"
                    />
                </div>

                <div className="flex flex-col xl:flex-row mt-[32px] xl:flex-1  gap-[40px] xl:gap-[64px] items-center">
                    <div className="flex xl:flex-col gap-[16px] xl:gap-[32px]">
                        {technology.map((item, index) => (
                            <div
                                key={index}
                                className={`${
                                    item.name === currentTechnology.name
                                        ? "bg-white text-black"
                                        : "text-white/50 hover:text-white hover:ring-white ring-[1px] ring-white/50"
                                } size-[40px] md:size-[56px] xl:size-[80px] rounded-full flex items-center justify-center text-[18px] md:text-[24px] xl:text-[32px] font-bellefai transition-colors duration-200 cursor-pointer`}
                                onClick={() => HandleClick(item)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex flex-col justify-between gap-[16px] xl:gap-[24px] text-center xl:text-left md:px-[88px] xl:px-0"
                        ref={contentRef}
                    >
                        <div>
                            <div className="text-white opacity-50 font-bellefair  text-[18px] md:text-[24px] xl:text-[32px]">
                                THE TERMINOLOGY...
                            </div>
                            <div className="text-[24px] md:text-[40px] xl:text-[56px] text-white font-bellefair uppercase">
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
