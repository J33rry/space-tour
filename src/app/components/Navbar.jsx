"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Navbar({ nav, current, setCurrent }) {
    const underlineRefs = useRef([]);

    useEffect(() => {
        underlineRefs.current.forEach((el, i) => {
            if (!el) return;
            if (nav[i] === current) {
                gsap.fromTo(
                    el,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.4,
                        transformOrigin: "left",
                        ease: "power2.out",
                    }
                );
            } else {
                gsap.set(el, { scaleX: 0 });
            }
        });
    }, [current]);

    function handleClick(item) {
        setCurrent(item);
    }

    return (
        <div>
            <div className="flex items-center">
                <div className="flex items-center w-[50%]">
                    <div className="p-16">
                        <img
                            src="/assets/shared/logo.svg"
                            alt="logo"
                            className="size-12"
                        />
                    </div>
                    <div className="h-[1px] bg-white/40 flex-1"></div>
                </div>
                <div className="flex gap-12 bg-white/5 w-[50%] backdrop-blur-[80px] items-center justify-between pr-16">
                    <div className="h-[1px] bg-white/30 w-8 mr-8 items-start"></div>
                    {nav.map((item, index) => (
                        <div
                            className="relative flex flex-col text-[16px] tracking-[2px] group cursor-pointer justify-between h-[96px] text-white font-barlow"
                            key={index}
                            onClick={() => handleClick(item)}
                        >
                            <div className="flex gap-3 flex-1 items-center">
                                <div className="font-bold tracking-[2.7px]">
                                    {index.toString().padStart(2, "0")}
                                </div>
                                <div className="font-barlow font-normal">
                                    {item}
                                </div>
                            </div>

                            {/* Hover underline */}
                            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            {/* Active underline */}
                            <div
                                className="absolute bottom-0 left-0 h-1 bg-white w-full origin-left scale-x-0 pointer-events-none"
                                ref={(el) =>
                                    (underlineRefs.current[index] = el)
                                }
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
