"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function HomePage() {
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
            className="h-auto w-screen bg-cover px-[165px] py-[128px] flex-1 opacity-100"
        >
            <div className="flex w-[100%] h-[100%] justify-between items-end gap-[30px]">
                <div className="flex-1/2">
                    <div className="font-barlow text-[28px] tracking-[4px] text-Blue-300">
                        SO, YOU WANT TO TRAVEL TO
                    </div>
                    <div className="font-bellefair text-[144px] text-white">
                        SPACE
                    </div>
                    <div className="font-barlow text-[18px] text-Blue-300">
                        Let&apos;s face it; if you want to go to space, you
                        might as well genuinely go to outer space and not hover
                        kind of on the edge of it. Well sit back, and relax
                        because we&apos;ll give you a truly out of this world
                        experience!
                    </div>
                </div>
                <div className="flex-1/2 flex items-end justify-end">
                    <div className="size-[272px] bg-white rounded-full flex items-center justify-center text-Blue-900 font-bellefair text-[32px] hover:ring-[88px] ring-white/10 transition-all duration-200">
                        EXPLORE
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;
