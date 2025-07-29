"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

function Destination({ destinations }) {
    const [selectedDestination, setSelectedDestination] = useState(
        destinations[0]
    );
    const DestinationRef = useRef(null);
    const planetRef = useRef(null);
    const imageRef = useRef(null);

    function HandleClick(item) {
        if (item.name === selectedDestination.name) return; // prevent re-animation if already selected
        setSelectedDestination(item);
    }

    // Initial fade-in on mount
    useEffect(() => {
        gsap.fromTo(
            DestinationRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "linear" }
        );
    }, []);

    // Animate planet content and image on destination change
    useEffect(() => {
        gsap.fromTo(
            planetRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out" }
        );
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
        );
    }, [selectedDestination]);

    return (
        <div
            id="DESTINATION"
            ref={DestinationRef}
            className="flex-1 py-[48px] px-[165px] overflow-hidden w-screen opacity-100"
        >
            <div className="flex font-barlow text-[28px] tracking-[4px] gap-[24px]">
                <div className="font-bold tracking-[4.72px] text-white opacity-25">
                    01
                </div>
                <div>PICK YOUR DESTINATION</div>
            </div>
            <div className="flex pt-[24px] gap-[32px]">
                <div className="flex-1/2 px-[29.5px] py-[127px]">
                    <img
                        ref={imageRef}
                        src={selectedDestination.images.png}
                        alt={selectedDestination.name}
                        className="size-[480px]"
                    />
                </div>
                <div
                    className="flex-1/2 px-[47px] py-[133px] flex flex-col gap-[40px]"
                    ref={planetRef}
                >
                    {/* Tabs */}
                    <div className="flex gap-[32px] font-barlow">
                        {destinations.map((item, index) => (
                            <div
                                className={`${
                                    item.name === selectedDestination.name
                                        ? "text-white underline underline-offset-[10px] decoration-[3px]"
                                        : "text-Blue-300 hover:underline-offset-[10px] hover:decoration-[3px] hover:underline hover:decoration-White/50 hover:text-white"
                                } text-[16px] tracking-[2px] cursor-pointer transition-all duration-300`}
                                key={index}
                                onClick={() => HandleClick(item)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div>
                        <div className="font-bellefair text-[96px] uppercase">
                            {selectedDestination.name}
                        </div>
                        <div className="font-barlow text-[18px] leading-[180%] text-wrap text-Blue-300">
                            {selectedDestination.description}
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-white opacity-25"></div>

                    <div className="flex gap-[24px]">
                        <div className="flex-1/2">
                            <div className="text-Blue-300 font-barlow text-[14px] tracking-[2px]">
                                AVG. DISTANCE
                            </div>
                            <div className="text-white font-bellefair text-[28px] uppercase">
                                {selectedDestination.distance}
                            </div>
                        </div>
                        <div className="flex-1/2">
                            <div className="text-Blue-300 font-barlow text-[14px] tracking-[2px] uppercase">
                                EST. TRAVEL TIME
                            </div>
                            <div className="text-white font-bellefair text-[28px] uppercase">
                                {selectedDestination.travel}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
