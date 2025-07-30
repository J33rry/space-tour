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
        setSelectedDestination(item);
    }

    useEffect(() => {
        gsap.fromTo(
            DestinationRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "linear" }
        );
    }, []);

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
            className="xl:flex-1 p-[24px] md:p-[40px] xl:py-[48px] xl:px-[165px]  xl:overflow-hidden w-screen opacity-100"
        >
            <div className="flex font-barlow text-[16px] md:text-[20px] xl:text-[28px] tracking-[15%] xl:tracking-[4px] gap-[24px] text-center md:text-left">
                <div className="font-bold  xl:tracking-[4.72px] text-white opacity-25">
                    01
                </div>
                <div>PICK YOUR DESTINATION</div>
            </div>
            <div className="flex flex-col items-center xl:flex-row pt-[24px] gap-[32px]">
                <div className="xl:flex-1/2 py-[26px] xl:px-[29.5px] xl:py-[127px]">
                    <img
                        ref={imageRef}
                        src={selectedDestination.images.png}
                        alt={selectedDestination.name}
                        className="size-[150px] md:size-[300px] xl:size-[480px]"
                    />
                </div>
                <div
                    className="xl:flex-1/2 md:px-[87px] md:py-[11.5px] xl:px-[47px] xl:py-[133px] flex flex-col gap-[24px] xl:gap-[40px] items-center xl:items-start justify-center"
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
                                }  text-[14px] tracking-[15%] md:text-[16px] md:tracking-[2px] cursor-pointer transition-all duration-300`}
                                key={index}
                                onClick={() => HandleClick(item)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div>
                        <div className="font-bellefair text-[56px] md:text-[80px] xl:text-[96px] uppercase text-center xl:text-left">
                            {selectedDestination.name}
                        </div>
                        <div className="font-barlow text-[15px] md:text-[16px] xl:text-[18px] leading-[180%] text-wrap text-Blue-300 text-center xl:text-left">
                            {selectedDestination.description}
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-white opacity-25"></div>

                    <div className="flex flex-col md:flex-row gap-[24px] justify-between w-full px-[87px]">
                        <div className="xl:flex-1/2 text-center text-nowrap">
                            <div className="text-Blue-300 font-barlow text-[14px] tracking-[2px]">
                                AVG. DISTANCE
                            </div>
                            <div className="text-white font-bellefair text-[28px] uppercase">
                                {selectedDestination.distance}
                            </div>
                        </div>
                        <div className="xl:flex-1/2">
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
