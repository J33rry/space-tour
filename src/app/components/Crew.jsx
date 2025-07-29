"use client";
import React, { useState } from "react";

function Crew({ crew }) {
    const [selectedCrew, setSelectedCrew] = useState(crew[0]);

    return (
        <div className="flex-1 px-[165px] py-[48px] h-screen w-screen overflow-hidden">
            <div className="flex font-barlow text-[28px] tracking-[4px] gap-[24px]">
                <div className="font-bold tracking-[4.72px] text-white opacity-25">
                    02
                </div>
                <div className="">MEET YOUR CREW</div>
            </div>
            <div className="mt-[24px] flex flex-row-reverse gap-[32px]">
                <div className="flex-1/2 flex items-center justify-center">
                    <img
                        src={selectedCrew.images.png}
                        alt=""
                        className="mask-b-from-70% mask-b-to-100%"
                    />
                </div>
                <div className="flex-1/2">
                    <div className="flex flex-col relative">
                        <div className="py-[197px] justify-center">
                            <div className="text-white opacity-50 font-bellefair text-[32px] uppercase">
                                {selectedCrew.role}
                            </div>
                            <div className="font-bellefair text-[56px] text-white uppercase">
                                {selectedCrew.name}
                            </div>
                            <div className="text-[18px] text-Blue-300 leading-[180%] font-barlow">
                                {selectedCrew.bio}
                            </div>
                        </div>
                        <div className="flex gap-[40px] py-[40px]">
                            {crew.map((item, index) => (
                                <div
                                    key={index}
                                    className={`crew-member ${
                                        selectedCrew === item ? "active" : ""
                                    }`}
                                    onClick={() => setSelectedCrew(item)}
                                >
                                    <div
                                        className={`size-[15px] ${
                                            item.name == selectedCrew.name
                                                ? "bg-white"
                                                : "bg-white/17 hover:bg-white/40"
                                        } rounded-full cursor-pointer transition-colors duration-200`}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crew;
