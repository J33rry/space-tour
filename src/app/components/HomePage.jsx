"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function HomePage({ setCurrent }) {
    const HomeRef = useRef(null);
    useEffect(() => {
        const document = HomeRef.current;
        gsap.fromTo(
            document,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "linear",
            }
        );
    }, []);

    return (
        <div
            id="HOME"
            ref={HomeRef}
            className="h-auto w-screen bg-cover md:px-[40px] md:py-[128px] xl:px-[165px] xl:py-[128px] flex-1 opacity-100"
        >
            <div className="flex flex-col xl:flex-row w-[100%] h-[100%] md:justify-between xl:items-end items-center justify-center gap-[24px] xl:gap-[30px] p-[24px] md:px-[88px] text-center">
                <div className="xl:flex-1/2">
                    <div className="font-barlow text-[16px] md:text-[28px] xl:text-[28px] tracking-[15%] md:tracking-[4px] text-Blue-300">
                        SO, YOU WANT TO TRAVEL TO
                    </div>
                    <div className="font-bellefair text-[80px] md:text-[144px] text-white">
                        SPACE
                    </div>
                    <div className="font-barlow text-[15px] leading-[180%] md:text-[16px] xl:text-[18px] text-Blue-300">
                        Let&apos;s face it; if you want to go to space, you
                        might as well genuinely go to outer space and not hover
                        kind of on the edge of it. Well sit back, and relax
                        because we&apos;ll give you a truly out of this world
                        experience!
                    </div>
                </div>
                <div className="xl:flex-1/2 flex xl:items-end xl:justify-end">
                    <div
                        className="size-[144px] md:size-[272px] bg-white rounded-full flex items-center justify-center text-Blue-900 font-bellefair text-[18px] md:text-[32px] hover:ring-[88px] ring-white/10 transition-all duration-200"
                        onClick={() => {
                            setCurrent("DESTINATION");
                        }}
                    >
                        EXPLORE
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;
