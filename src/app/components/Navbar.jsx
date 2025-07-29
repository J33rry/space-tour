"use client";
import React, { useState } from "react";

function Navbar({ nav, current, setCurrent }) {
    function handleClick(item) {
        setCurrent(item);
    }

    return (
        <div>
            <div className=" flex items-center">
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
                    {nav.map((item, index) => {
                        return (
                            <div
                                className={`flex flex-col text-[16px] tracking-[2px] group cursor-pointer justify-between h-[96px] text-white font-barlow`}
                                key={index}
                                onClick={() => handleClick(item)}
                            >
                                {" "}
                                <div className=""></div>
                                <div className="flex gap-3">
                                    <div className="font-bold tracking-[2.7px]">
                                        {index.toString().padStart(2, "0")}
                                    </div>
                                    <div className="font-barlow font-normal">
                                        {item}
                                    </div>
                                </div>
                                {current === item ? (
                                    <div className="h-1 bg-white"></div>
                                ) : (
                                    <div className="h-1 bg-transparent group-hover:bg-white/30 transition-color duration-300"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
