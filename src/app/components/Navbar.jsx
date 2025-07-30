"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

function Navbar({ nav, current, setCurrent }) {
    const underlineRefs = useRef([]);
    const navbarRef = useRef(null);

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
        gsap.from(navbarRef.current, {
            opacity: 0,
            right: -100,
            duration: 2,
            ease: "back",
        });
        function handleClickOutside(event) {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [current]);

    function handleClick(item) {
        setCurrent(item);
    }
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <div className="flex items-center justify-between">
                <div
                    className="flex items-center xl:w-[50%]"
                    onClick={() => setCurrent("HOME")}
                >
                    <div className="p-[24px] md:px-10 md:py-6 xl:p-16">
                        <img
                            src="/assets/shared/logo.svg"
                            alt="logo"
                            className="size-10 md:size-12"
                        />
                    </div>
                    <div className="hidden lg:block h-[1px] bg-white/40 flex-1"></div>
                </div>
                <div className="hidden md:flex gap-12 bg-white/5 xl:w-[50%] backdrop-blur-[80px] items-center justify-between px-10 xl:pr-16 xl:pl-0">
                    <div className="hidden xl:block h-[1px] bg-white/30 w-8 mr-8 items-center"></div>
                    {nav.map((item, index) => (
                        <div
                            className="relative flex flex-col text-[16px] tracking-[2px] group cursor-pointer justify-between h-[96px] text-white font-barlow"
                            key={index}
                            onClick={() => handleClick(item)}
                        >
                            <div className="flex gap-3 flex-1 items-center">
                                {item === "HOME" && item == current ? (
                                    <div className=""></div>
                                ) : (
                                    <div className="font-bold tracking-[2.7px]">
                                        {index.toString().padStart(2, "0")}
                                    </div>
                                )}

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
                <div
                    className="md:hidden px-[24px] relative"
                    onClick={() => setOpen(!open)}
                >
                    <img src="/assets/shared/icon-hamburger.svg" alt="open" />
                </div>

                {open && (
                    <div
                        className="md:hidden absolute top-0 -right-0 z-1000 w-[254px] flex flex-col bg-white/5 backdrop-blur-[80px] h-screen"
                        ref={navbarRef}
                    >
                        <div
                            className="p-[24px] py-[32px] self-end"
                            onClick={() => setOpen(false)}
                        >
                            <img
                                src="/assets/shared/icon-close.svg"
                                alt="open"
                            />
                        </div>
                        <div className="ml-[24px] my-[48px] flex flex-col gap-[32px]">
                            {nav.map((item, index) => (
                                <div
                                    className={`relative flex gap-[12px] w-full`}
                                    key={index}
                                    onClick={() => setCurrent(item)}
                                >
                                    <div className="font-barlow text-[16px] tracking-[2.7px] font-bold">
                                        {index.toString().padStart(2, "0")}
                                    </div>
                                    <div className="font-barlow text-[16px] tracking-[2px]">
                                        {item}
                                    </div>

                                    {current === item && (
                                        <div className="absolute right-0 top-0 h-full w-[2px] bg-white" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
