"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Crew({ crew }) {
    const [selectedCrew, setSelectedCrew] = useState(crew[0]);
    const [previousCrew, setPreviousCrew] = useState(null);

    const imageRef = useRef(null);
    const prevImageRef = useRef(null);
    const contentRef = useRef(null);

    function handleClick(item) {
        if (item.name === selectedCrew.name) return;

        setPreviousCrew(selectedCrew); // store current crew before switching
        setSelectedCrew(item);
    }

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setPreviousCrew(null); // clean up after transition
            },
        });

        // Animate previous image out
        if (prevImageRef.current) {
            tl.to(
                prevImageRef.current,
                {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power1.out",
                },
                0
            );
        }

        // Animate new image + content in
        tl.fromTo(
            [imageRef.current, contentRef.current],
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.2,
                ease: "power1.inOut",
            },
            0.1
        );
    }, [selectedCrew]);

    return (
        <div className="flex-1 p-[24px] md:p-[40px] xl:px-[165px] xl:py-[48px] w-screen xl:overflow-hidden">
            <div className="flex font-barlow text-[16px] tracking-[15%] xl:text-[28px] xl:tracking-[4px] gap-[24px] justify-center md:justify-start">
                <div className="text-center md:text-left font-bold xl:tracking-[4.72px] text-white opacity-25">
                    02
                </div>
                <div>MEET YOUR CREW</div>
            </div>

            <div className="mt-[24px] flex flex-col-reverse xl:flex-row-reverse gap-[24px] xl:gap-[32px]">
                {/* Image Section */}
                <div className="xl:flex-1/2 flex items-center justify-center relative px-[27.5px] md:px-[120px] xl:h-[600px] xl:w-[400px]">
                    {/* Previous Image (fading out) */}
                    {previousCrew && (
                        <img
                            ref={prevImageRef}
                            src={previousCrew.images.png}
                            alt=""
                            className="absolute xl:h-[600px] w-auto object-contain transition-opacity opacity-100"
                            style={{ zIndex: 1 }}
                        />
                    )}
                    {/* Selected Image (fading in) */}
                    <img
                        ref={imageRef}
                        src={selectedCrew.images.png}
                        alt=""
                        className="mask-b-from-70% mask-b-to-100% xl:h-[600px] w-auto object-contain relative z-10 opacity-0"
                    />
                </div>

                {/* Text Section */}
                <div className="xl:flex-1/2 mt-[40px] flex items-center xl:items-start xl:justify-end flex-col ">
                    <div
                        className="flex flex-col relative my-auto opacity-0 md:px-[88px] xl:px-0"
                        ref={contentRef}
                    >
                        <div className="text-white opacity-50 font-bellefair text-[18px] md:text-[24px] text-center xl:text-left xl:text-[32px] uppercase">
                            {selectedCrew.role}
                        </div>
                        <div className="font-bellefair text-[24px] md:text-[40px] text-center xl:text-left xl:text-[56px] text-white uppercase">
                            {selectedCrew.name}
                        </div>
                        <div className="mt-[24px] text-[15px] md:text-[16px] text-center xl:text-left xl:text-[18px] text-Blue-300 leading-[180%] font-barlow">
                            {selectedCrew.bio}
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex gap-[16px] xl:gap-[40px] mt-[64px]">
                        {crew.map((item, index) => (
                            <div key={index} onClick={() => handleClick(item)}>
                                <div
                                    className={`size-[10px] xl:size-[15px] rounded-full cursor-pointer transition-colors duration-200 ${
                                        item.name === selectedCrew.name
                                            ? "bg-white"
                                            : "bg-white/17 hover:bg-white/40"
                                    }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crew;
